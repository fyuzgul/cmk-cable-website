import { useState, useEffect } from "react";
import CategoriesService from "../services/CategoriesService";

const useFetchAllCategories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
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
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return { categories, loading, error };
};

export default useFetchAllCategories;
