import { useState, useEffect } from "react";
import CertificateTypesService from "../services/CertificateTypesService";

const useFetchAllCertificateTypes = () => {
  const [types, setTypes] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTypes = async () => {
      try {
        setLoading(true);
        const data = await CertificateTypesService.getAllCertificateTypes();
        setTypes(data);
      } catch (err) {
        setError("Failed to fetch products or categories.");
      } finally {
        setLoading(false);
      }
    };

    fetchTypes();
  }, []);
  return { types, loading, error };
};

export default useFetchAllCertificateTypes;
