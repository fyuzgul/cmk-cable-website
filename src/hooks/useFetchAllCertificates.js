import { useState, useEffect } from "react";
import CertificatesService from "../services/CertificatesService";

const useFetchAllCertificates = () => {
  const [certificates, setCertificates] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCertificates = async () => {
      try {
        const certificates = await CertificatesService.getAllCertificates();
        setCertificates(certificates);
      } catch (err) {
        setError("Failed to fetch certificates.");
      } finally {
        setLoading(false);
      }
    };
    fetchCertificates();
  }, []);
  return { certificates, loading, error };
};

export default useFetchAllCertificates;
