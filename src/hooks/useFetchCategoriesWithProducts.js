import { useEffect, useState } from "react";
import ProductService from "../services/ProductsService";
import CategoriesService from "../services/CategoriesService";
import { useLoading } from "../contexts/LoadingContext";

const useFetchCategoriesWithProducts = () => {
  const [categories, setCategories] = useState([]);
  const [categoryProducts, setCategoryProducts] = useState({});
  const { setLoading } = useLoading();
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategoriesAndProducts = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await CategoriesService.getAllCategories();
        setCategories(data);
        const productsByCategory = {};

        for (const category of data) {
          try {
            const products = await ProductService.getProductsByCategory(
              category.id
            );
            productsByCategory[category.id] = products;
          } catch (productError) {
            console.error(
              `Error loading products for category ${category.id}:`,
              productError
            );
            setError((prevError) => ({
              ...prevError,
              [category.id]: `Failed to load products for ${category.name}`,
            }));
          }
        }
        setCategoryProducts(productsByCategory);
      } catch (categoryError) {
        console.error("Error loading categories:", categoryError);
        setError("Failed to load categories");
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      }
    };

    fetchCategoriesAndProducts();
  }, [setLoading]);

  return { categories, categoryProducts, error };
};

export default useFetchCategoriesWithProducts;
