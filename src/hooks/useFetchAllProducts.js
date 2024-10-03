import ProductsService from "../services/ProductsService";
import { useLoading } from "../contexts/LoadingContext";
import { useState, useEffect } from "react";

const useFetchAllProducts = () => {
  const [products, setProducts] = useState([]);
  const { setLoading } = useLoading();
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products = await ProductsService.getAllProducts();
        setProducts(products);
      } catch (err) {
        setError("Failed to fetch certificates.");
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [setLoading]);
  return { products, error };
};

export default useFetchAllProducts;
