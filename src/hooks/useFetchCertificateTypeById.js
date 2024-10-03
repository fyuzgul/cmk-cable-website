import { useState, useEffect } from "react";
import CertificateTypesService from "../services/CertificateTypesService";
import { useLoading } from "../contexts/LoadingContext";

const useFetchCertificateTypeById = (id) => {
  const { setLoading } = useLoading();

  const [error, setError] = useState(null);
  const [certificateType, setCertificateType] = useState({
    id: id,
    name: "",
    image: null,
  });

  useEffect(() => {
    const fetchCertificateType = async () => {
      try {
        const data = await CertificateTypesService.getCertificateType(id);
        setCertificateType({
          id: data.id,
          name: data.name,
          image: data.image,
        });
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchCertificateType();
  }, [setLoading, id]);
  return { certificateType, error };
};

export default useFetchCertificateTypeById;
