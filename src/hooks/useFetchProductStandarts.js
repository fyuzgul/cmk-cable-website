import { useState, useEffect, useCallback } from "react";
import { useLoading } from "../contexts/LoadingContext";
import ProductStandartsService from "../services/ProductStandartsService";
import StandartsService from "../services/StandartsService";

const useFetchProductStandarts = (id) => {
  const [detailedStandarts, setDetailedStandarts] = useState([]);
  const [currentStandarts, setCurrentStandarts] = useState([]);
  const { setLoading } = useLoading();
  const [error, setError] = useState(null);

  const fetchStandarts = useCallback(async () => {
    try {
      const standarts = await ProductStandartsService.getStandartsByProductId(
        id
      );
      setCurrentStandarts(standarts);

      const standartIds = standarts.map((standart) => standart.standartId);
      const detailedStandartsPromises = standartIds.map((standartId) =>
        StandartsService.getStandardById(standartId)
      );
      const detailedStandarts = await Promise.all(detailedStandartsPromises);
      setDetailedStandarts(detailedStandarts);
    } catch (err) {
      setError(err.message);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  }, [id, setLoading]);

  useEffect(() => {
    fetchStandarts();
  }, [fetchStandarts]);

  return { detailedStandarts, currentStandarts, error };
};

export default useFetchProductStandarts;
