import { useState, useEffect } from "react";
import CertificatesService from "../services/CertificatesService";
import { useLoading } from "../contexts/LoadingContext";

const useFetchAllCertificates = () => {
  const [certificates, setCertificates] = useState([]);
  const { setLoading } = useLoading();
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCertificates = async () => {
      try {
        const certificates = await CertificatesService.getAllCertificates();
        setCertificates(certificates);
      } catch (err) {
        setError("Failed to fetch certificates.");
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      }
    };
    fetchCertificates();
  }, [setLoading]);
  return { certificates, error };
};

export default useFetchAllCertificates;
