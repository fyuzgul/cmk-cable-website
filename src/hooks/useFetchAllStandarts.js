import StandartsService from "../services/StandartsService";
import { useState, useEffect } from "react";
import { useLoading } from "../contexts/LoadingContext";

const useFetchAllStandarts = () => {
  const [standarts, setStandarts] = useState([]);
  const { setLoading } = useLoading();
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchStandarts = async () => {
      try {
        const standarts = await StandartsService.getAllStandards();
        setStandarts(standarts);
      } catch (err) {
        setError("Failed to fetch certificates.");
      } finally {
        setLoading(false);
      }
    };
    fetchStandarts();
  }, [setLoading]);
  return { standarts, error };
};

export default useFetchAllStandarts;
