import { useState, useEffect } from "react";
import ProductsService from "../services/ProductsService";
import { useLoading } from "../contexts/LoadingContext";

const useFetchProductByCategory = (categoryId) => {
  const [products, setProducts] = useState([]);
  const { setLoading } = useLoading();

  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const data = await ProductsService.getProductsByCategory(categoryId);
        setProducts(data);
      } catch (err) {
        setError("Failed to fetch products.");
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      }
    };

    fetchProducts();
  }, [setLoading, categoryId]);
  return { products, error };
};

export default useFetchProductByCategory;
