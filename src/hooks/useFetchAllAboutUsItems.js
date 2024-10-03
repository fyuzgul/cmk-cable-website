import { useState, useEffect } from "react";
import AboutUsItemsService from "../services/AboutUsItemsService";
import { useLoading } from "../contexts/LoadingContext";

const useFetchAllAboutUsItems = () => {
  const [items, setItems] = useState([]);
  const { setLoading } = useLoading();
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        setLoading(true);
        const data = await AboutUsItemsService.getAllAboutUsItems();
        setItems(data);
      } catch (err) {
        setError("Failed to fetch products or categories.");
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      }
    };

    fetchItems();
  }, [setLoading]);

  return { items, error };
};

export default useFetchAllAboutUsItems;
