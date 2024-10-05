import NavbarItemsService from "../services/NavbarItemsService";
import { useLoading } from "../contexts/LoadingContext";
import { useState, useEffect } from "react";

const useFetchAllNavbarItems = () => {
  const [navbarItems, setNavbarItems] = useState([]);
  const [dropdownItems, setDropdownItems] = useState([]); // dropdown için ayrı state
  const { setLoading } = useLoading();
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const fetchNavbarItems = async () => {
      try {
        const items = await NavbarItemsService.getAllNavbarItems();
        if (isMounted) {
          // Dropdown için olan item'leri filtreliyoruz
          const dropdownItems = items.filter((item) =>
            [8, 9, 10, 11].includes(item.id)
          );

          // dropdownItems'ta olmayan item'leri navbarItems olarak set ediyoruz
          const filteredNavbarItems = items.filter(
            (item) => ![8, 9, 10, 11].includes(item.id)
          );

          setNavbarItems(filteredNavbarItems); // Sadece navbar item'leri set ediyoruz
          setDropdownItems(dropdownItems); // Dropdown item'lerini set ediyoruz
          console.log(dropdownItems); // Test amaçlı console log
        }
      } catch (err) {
        if (isMounted) {
          setError("Failed to fetch navbar items.");
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchNavbarItems();

    return () => {
      isMounted = false;
    };
  }, [setLoading]);

  return { navbarItems, dropdownItems, error }; // dropdownItems'ı ve navbarItems'ı return ediyoruz
};

export default useFetchAllNavbarItems;
