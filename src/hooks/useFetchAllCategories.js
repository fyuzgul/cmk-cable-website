import { useState, useEffect } from "react";
import CategoriesService from "../services/CategoriesService";
import { useLoading } from "../contexts/LoadingContext";

const useFetchAllCategories = () => {
  const [categories, setCategories] = useState([]);
  const { setLoading } = useLoading();
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoading(true);
        const data = await CategoriesService.getAllCategories();
        setCategories(data);
      } catch (err) {
        setError("Failed to fetch products or categories.");
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      }
    };

    fetchCategories();
  }, [setLoading]);

  return { categories, error };
};

export default useFetchAllCategories;
