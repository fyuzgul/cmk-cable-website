import { useState, useEffect } from "react";
import ProductsService from "../services/ProductsService";
import CategoriesService from "../services/CategoriesService";
import { useLoading } from "../contexts/LoadingContext";

const useFetchProductsAndCategories = () => {
  const { setLoading } = useLoading();
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
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      }
    };

    fetchProductsAndCategories();
  }, [setLoading]);
  return { categories, products, error };
};

export default useFetchProductsAndCategories;
