import { useState, useEffect } from "react";
import StandartsService from "../services/StandartsService";
import { useLoading } from "../contexts/LoadingContext";

const useFetchStandartById = (id) => {
  const { setLoading } = useLoading();

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
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      }
    };
    fetchStandart();
  }, [setLoading, id]);
  return { standart, error };
};

export default useFetchStandartById;
