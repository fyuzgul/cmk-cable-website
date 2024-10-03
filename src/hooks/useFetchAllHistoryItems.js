import { useState, useEffect } from "react";
import HistoryItemsService from "../services/HistoryItemsService";
import { useLoading } from "../contexts/LoadingContext";

const useFetchAllHistoryItems = () => {
  const [historyItems, setHistoryItems] = useState([]);
  const { setLoading } = useLoading();
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHistoryItems = async () => {
      try {
        const data = await HistoryItemsService.getAllHistoryItems();
        setHistoryItems(data);
      } catch (err) {
        setError("Failed to fetch products or categories.");
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      }
    };

    fetchHistoryItems();
  }, [setLoading]);

  return { historyItems, error };
};

export default useFetchAllHistoryItems;
