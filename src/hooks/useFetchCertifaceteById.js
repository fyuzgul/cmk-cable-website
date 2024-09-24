import { useState, useEffect } from "react";
import CertificatesService from "../services/CertificatesService";

const useFetchCertificateById = (id) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [certificate, setCertificate] = useState(null);

  useEffect(() => {
    const fetchCertificate = async () => {
      try {
        const certificateData = await CertificatesService.getCertificateById(
          id
        );
        setCertificate({
          id: certificateData.id,
          name: certificateData.name,
          typeId: certificateData.typeId || "",
          image: certificateData.imageData || null,
          imagePreview: certificateData.imageData
            ? `data:image/jpeg;base64,${certificateData.imageData}`
            : null,
          fileContent: certificateData.fileContentData || null,
          fileContentPreview: certificateData.fileContentData
            ? `data:application/pdf;base64,${certificateData.fileContentData}`
            : null,
        });
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchCertificate();
  }, [id]);
  return { certificate, loading, error };
};

export default useFetchCertificateById;
