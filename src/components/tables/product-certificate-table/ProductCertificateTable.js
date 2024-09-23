import { useState, useEffect } from "react";
import CertificateTableRow from "../product-certificate-table/ProductCertificateTableRow.js";
import certificateService from "../../../services/CertificatesService.js";
import productCertificatesService from "../../../services/ProductCertificatesService.js";

export default function ProductCertificateTable({
  id,
  isModalOpen,
  setIsModalOpen,
}) {
  const [certificates, setCertificates] = useState([]);
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  useEffect(() => {
    async function fetchCertificates() {
      try {
        const response = await certificateService.getAllCertificates();
        setCertificates(response);
      } catch (error) {
        console.error("Error fetching certificates:", error);
      }
    }
    fetchCertificates();
  }, []);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleAddCertificate = async () => {
    if (selectedCertificate) {
      try {
        await productCertificatesService.createProductCertificate(
          parseInt(id),
          parseInt(selectedCertificate)
        );
        alert("Sertifika başarıyla eklendi!");
        closeModal();
      } catch (error) {
        console.error("Error creating product certificate:", error);
      }
    } else {
      alert("Lütfen bir sertifika seçin.");
    }
  };

  return (
    <div className="overflow-x-auto mt-12">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Certificate ID
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Name
            </th>
          </tr>
        </thead>
        <CertificateTableRow />
      </table>

      <button
        onClick={openModal}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
      >
        Sertifika Ekle
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-md w-1/3">
            <h2 className="text-lg font-semibold mb-4">Sertifika Ekle</h2>
            <select
              value={selectedCertificate}
              onChange={(e) => setSelectedCertificate(e.target.value)}
              className="w-full mb-4 p-2 border border-gray-300 rounded"
            >
              <option value="">Bir sertifika seçin</option>
              {certificates.map((certificate) => (
                <option key={certificate.id} value={certificate.id}>
                  {certificate.name}
                </option>
              ))}
            </select>
            <div className="flex justify-end">
              <button
                onClick={handleAddCertificate}
                className="bg-green-500 text-white px-4 py-2 rounded mr-2"
              >
                Ekle
              </button>
              <button
                onClick={closeModal}
                className="bg-red-500 text-white px-4 py-2 rounded"
              >
                Kapat
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
