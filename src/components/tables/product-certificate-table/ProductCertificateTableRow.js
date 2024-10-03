import React, { useState, useEffect } from "react";
import ProductCertificates from "../../../services/ProductCertificatesService";
import useFetchProductCertificates from "../../../hooks/useFetchProductCertificates";
import { useParams } from "react-router-dom";

export default function ProducCertificateTableRow() {
  const { id } = useParams();
  const [currentCertificates, setCurrentCertificates] = useState([]);
  const { detailedCertificates, error } = useFetchProductCertificates(id);

  useEffect(() => {
    if (detailedCertificates) {
      setCurrentCertificates(detailedCertificates);
    }
  }, [detailedCertificates]);

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

  if (error) return <div>Error: {error}</div>;

  return (
    <tbody className="bg-white divide-y divide-gray-200">
      {currentCertificates.map((cert) => (
        <tr key={cert.id}>
          <td className="px-6 py-4 whitespace-nowrap">{cert?.id}</td>
          <td className="px-6 py-4 whitespace-nowrap">{cert?.name}</td>
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
  );
}
