import { useEffect, useState } from "react";
import CertificatesService from "../services/CertificatesService";
import CertificateTypeService from "../services/CertificateTypesService";

const useFetchCertificatesAndTypes = () => {
  const [certificates, setCertificates] = useState({});
  const [certificateTypes, setCertificateTypes] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCertificatesAndTypes = async () => {
      try {
        setLoading(true);

        const [certificatesData, certificateTypesData] = await Promise.all([
          CertificatesService.getAllCertificates(),
          CertificateTypeService.getAllCertificateTypes(),
        ]);

        const certificateTypeMap = certificateTypesData.reduce((map, type) => {
          map[type.id] = type.name;
          return map;
        }, {});

        setCertificateTypes(certificateTypeMap);

        const categorizedCertificates =
          CertificatesService.categorizeCertificatesByType(
            certificatesData,
            certificateTypeMap
          );

        setCertificates(categorizedCertificates);
      } catch (err) {
        console.error("Error fetching certificates or types:", err);
        setError("Failed to fetch certificates or types.");
      } finally {
        setLoading(false);
      }
    };

    fetchCertificatesAndTypes();
  }, []);

  return { certificates, certificateTypes, loading, error };
};

export default useFetchCertificatesAndTypes;
