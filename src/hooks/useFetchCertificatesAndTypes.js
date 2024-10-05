import { useEffect, useState } from "react";
import CertificatesService from "../services/CertificatesService";
import CertificateTypeService from "../services/CertificateTypesService";
import { useLoading } from "../contexts/LoadingContext";
import ProductsService from "../services/ProductsService";

const useFetchCertificatesAndTypes = () => {
  const [certificatesCate, setCertificatesCate] = useState({});
  const [certificates, setCertificate] = useState([]);
  const [certificateTypes, setCertificateTypes] = useState({});
  const { setLoading } = useLoading();
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCertificatesAndTypes = async () => {
      try {
        const [certificatesData, certificateTypesData] = await Promise.all([
          CertificatesService.getAllCertificates(),
          CertificateTypeService.getAllCertificateTypes(),
        ]);

        const certificateTypeMap = certificateTypesData.reduce((map, type) => {
          map[type.id] = type.name;
          return map;
        }, {});

        setCertificateTypes(certificateTypeMap);

        const certificatesWithProducts = await Promise.all(
          certificatesData.map(async (certificate) => {
            try {
              const products = await ProductsService.getProductsByCertificate(
                certificate.id
              );

              return { ...certificate, products };
            } catch (error) {
              console.error(
                `Error fetching products for certificate ${certificate.id}:`,
                error
              );
              return { ...certificate, products: [] };
            }
          })
        );

        const categorizedCertificates =
          CertificatesService.categorizeCertificatesByType(
            certificatesWithProducts,
            certificateTypeMap
          );

        setCertificate(certificatesWithProducts);

        setCertificatesCate(categorizedCertificates);
        console.log(categorizedCertificates);
      } catch (err) {
        console.error("Error fetching certificates or types:", err);
        setError("Failed to fetch certificates or types.");
      } finally {
        setLoading(false);
      }
    };

    fetchCertificatesAndTypes();
  }, [setLoading]);

  return { certificatesCate, certificates, certificateTypes, error };
};

export default useFetchCertificatesAndTypes;
