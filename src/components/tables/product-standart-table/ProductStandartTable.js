import { useEffect, useState } from "react";
import standartsService from "../../../services/StandartsService";
import ProductStandartsService from "../../../services/ProductStandartsService";
import ProductStandartTableRow from "./ProductStandartTableRow";

export default function StandartTable({ id, isModalOpen, setIsModalOpen }) {
  const [standarts, setStandarts] = useState([]);
  const [selectedStandarts, setSelectedStandarts] = useState(null);
  useEffect(() => {
    async function fetchStandarts() {
      try {
        const response = await standartsService.getAllStandards();
        setStandarts(response);
      } catch (error) {
        console.error("Error fetching standarts:", error);
      }
    }
    fetchStandarts();
  }, []);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleAddStandart = async () => {
    if (selectedStandarts) {
      try {
        await ProductStandartsService.createProductStandart(
          parseInt(id),
          parseInt(selectedStandarts)
        );
        alert("Standart başarıyla eklendi!");
        closeModal();
      } catch (error) {
        console.error("Error creating product standart:", error);
      }
    } else {
      alert("Lütfen bir standart seçin.");
    }
  };

  return (
    <div className="overflow-x-auto mt-12">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Standart ID
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Name
            </th>
          </tr>
        </thead>
        <ProductStandartTableRow />
      </table>

      <button
        onClick={openModal}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
      >
        Standart Ekle
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-md w-1/3">
            <h2 className="text-lg font-semibold mb-4">Standart Ekle</h2>
            <select
              value={selectedStandarts}
              onChange={(e) => setSelectedStandarts(e.target.value)}
              className="w-full mb-4 p-2 border border-gray-300 rounded"
            >
              <option value="">Bir standart seçin</option>
              {standarts.map((standart) => (
                <option key={standart.id} value={standart.id}>
                  {standart.name}
                </option>
              ))}
            </select>
            <div className="flex justify-end">
              <button
                onClick={handleAddStandart}
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
