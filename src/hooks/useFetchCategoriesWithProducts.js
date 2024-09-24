import { useEffect, useState } from "react";
import ProductService from "../services/ProductsService";
import CategoriesService from "../services/CategoriesService";

const useFetchCategoriesWithProducts = () => {
  const [categories, setCategories] = useState([]);
  const [categoryProducts, setCategoryProducts] = useState({});
  const [loading, setLoading] = useState(false);
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
        setLoading(false);
      }
    };

    fetchCategoriesAndProducts();
  }, []);

  return { categories, categoryProducts, loading, error };
};

export default useFetchCategoriesWithProducts;
