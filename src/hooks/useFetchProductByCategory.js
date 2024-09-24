import { useState, useEffect } from "react";
import ProductsService from "../services/ProductsService";

const useFetchProductByCategory = (categoryId) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
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
        setLoading(false);
      }
    };

    fetchProducts();
  }, [categoryId]);
  return { products, loading, error };
};

export default useFetchProductByCategory;
