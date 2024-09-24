import { useState, useEffect } from "react";
import ProductsService from "../services/ProductsService";
import CategoriesService from "../services/CategoriesService";

const useFetchProductsAndCategories = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchProductsAndCategories = async () => {
      try {
        setLoading(true);

        const productData = await ProductsService.getAllProducts();
        setProducts(productData);

        const categoryIds = [
          ...new Set(productData.map((product) => product.categoryId)),
        ];

        const categoriesData = await Promise.all(
          categoryIds.map((id) => CategoriesService.getCategoryById(id))
        );
        setCategories(categoriesData);
      } catch (err) {
        setError("Failed to fetch products or categories.");
      } finally {
        setLoading(false);
      }
    };

    fetchProductsAndCategories();
  }, []);
  return { categories, products, loading, error };
};

export default useFetchProductsAndCategories;
