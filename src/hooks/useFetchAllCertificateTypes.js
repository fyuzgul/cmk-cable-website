import { useState, useEffect } from "react";
import CertificateTypesService from "../services/CertificateTypesService";
import { useLoading } from "../contexts/LoadingContext";

const useFetchAllCertificateTypes = () => {
  const [types, setTypes] = useState([]);
  const { setLoading } = useLoading();
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTypes = async () => {
      try {
        const data = await CertificateTypesService.getAllCertificateTypes();
        setTypes(data);
      } catch (err) {
        setError("Failed to fetch products or categories.");
      } finally {
        setLoading(false);
      }
    };

    fetchTypes();
  }, [setLoading]);
  return { types, error };
};

export default useFetchAllCertificateTypes;
