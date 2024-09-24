import { useState, useEffect } from "react";
import CategoriesService from "../services/CategoriesService";
const useFetchCategoryById = (id) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [category, setCategory] = useState({ id: id, name: "", image: null });
  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const data = await CategoriesService.getCategoryById(id);
        setCategory({
          id: data.id,
          name: data.name,
          image: data.image,
        });
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchCategory();
  }, [id]);
  return { category, loading, error };
};

export default useFetchCategoryById;
