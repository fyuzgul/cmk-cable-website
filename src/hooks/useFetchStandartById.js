import { useState, useEffect } from "react";
import StandartsService from "../services/StandartsService";

const useFetchStandartById = (id) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [standart, setStandart] = useState({ id: id, name: "" });

  useEffect(() => {
    const fetchStandart = async () => {
      try {
        const standartData = await StandartsService.getStandardById(id);
        setStandart({
          id: standartData.id,
          name: standartData.name,
        });
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchStandart();
  }, [id]);
  return { standart, loading, error };
};

export default useFetchStandartById;
