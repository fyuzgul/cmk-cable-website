import StandartsService from "../services/StandartsService";
import { useState, useEffect } from "react";

const useFetchAllStandarts = () => {
  const [standarts, setStandarts] = useState([]);
  const [loading, setLoading] = useState(false);
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
  }, []);
  return { standarts, loading, error };
};

export default useFetchAllStandarts;
