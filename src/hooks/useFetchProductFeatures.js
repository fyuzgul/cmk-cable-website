import { useEffect, useState } from "react";
import TechnicalFeaturesService from "../services/TechnicalFeaturesService";
import { useLoading } from "../contexts/LoadingContext";

const useFetchProductFeatures = (id) => {
  const [features, setFeatures] = useState([]);
  const { setLoading } = useLoading();
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) {
      console.error("Product ID is missing from URL.");
      return;
    }

    const fetchFeatures = async () => {
      try {
        const data = await TechnicalFeaturesService.getAllFeaturesByProductId(
          id
        );
        console.log("Fetched features:", data);
        setFeatures(data);
      } catch (error) {
        console.error(
          "Error fetching technical features:",
          error.response?.data || error.message
        );
        setError(error.message);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      }
    };

    fetchFeatures();
  }, [setLoading, id]);

  return { features, error };
};

export default useFetchProductFeatures;
