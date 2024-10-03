import { useState, useEffect, useCallback } from "react";
import { useLoading } from "../contexts/LoadingContext";
import ProductCertificates from "../services/ProductCertificatesService";
import CertificatesService from "../services/CertificatesService";

const useFetchProductCertificates = (id) => {
  const [detailedCertificates, setDetailedCertificates] = useState([]);
  const { setLoading } = useLoading();
  const [error, setError] = useState(null);

  const fetchCertificates = useCallback(async () => {
    try {
      const certificates = await ProductCertificates.getCertificatesByProductId(
        id
      );
      const certificateIds = certificates.map((cert) => cert.certificateId);

      const detailedCertsPromises = certificateIds.map((certificateId) =>
        CertificatesService.getCertificateById(certificateId)
      );
      const detailedCerts = await Promise.all(detailedCertsPromises);

      setDetailedCertificates(detailedCerts);
    } catch (err) {
      setError(err.message);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  }, [id, setLoading]);

  useEffect(() => {
    fetchCertificates();
  }, [fetchCertificates]);

  return { detailedCertificates, error };
};

export default useFetchProductCertificates;
