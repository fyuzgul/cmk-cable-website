import React, { useState, useEffect } from "react";
import ProductCertificates from "../../../services/ProductCertificatesService";
import certificateService from "../../../services/CertificatesService";
import { useParams } from "react-router-dom";

export default function ProducCertificateTableRow() {
  const { id } = useParams();
  const [currentCertificates, setCurrentCertificates] = useState([]);
  const [detailedCertificates, setDetailedCertificates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCertificates = async () => {
      try {
        const certificates =
          await ProductCertificates.getCertificatesByProductId(id);
        setCurrentCertificates(certificates);

        const certificateIds = certificates.map((cert) => cert.certificateId);
        const detailedCertsPromises = certificateIds.map((certificateId) =>
          certificateService.getCertificateById(certificateId)
        );
        const detailedCertificates = await Promise.all(detailedCertsPromises);
        setDetailedCertificates(detailedCertificates);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCertificates();
  }, [id]);

  const handleDelete = async (productCertificateId) => {
    try {
      await ProductCertificates.deleteProductCertificate(productCertificateId);
      setCurrentCertificates((prev) =>
        prev.filter((cert) => cert.id !== productCertificateId)
      );
      alert("Eşleşme başarıyla silindi.");
    } catch (err) {
      alert("Eşleşmeyi silerken bir hata oluştu.");
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <tbody className="bg-white divide-y divide-gray-200">
        {currentCertificates.map((cert, index) => (
          <tr key={cert.id}>
            <td className="px-6 py-4 whitespace-nowrap">
              {detailedCertificates[index]?.id}
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              {detailedCertificates[index]?.name}
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <button
                onClick={() => handleDelete(cert.id)}
                className="text-red-600 hover:text-red-900"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </>
  );
}
