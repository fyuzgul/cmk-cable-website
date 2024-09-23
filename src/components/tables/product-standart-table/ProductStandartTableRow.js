import React, { useState, useEffect } from "react";
import ProductStandartsService from "../../../services/ProductStandartsService";
import standartsService from "../../../services/StandartsService";
import { useParams } from "react-router-dom";

export default function StandartTableRow() {
  const { id } = useParams();
  const [currentStandarts, setCurrentStandarts] = useState([]);
  const [detailedStandarts, setDetailedStandarts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStandarts = async () => {
      try {
        const standarts = await ProductStandartsService.getStandartsByProductId(
          id
        );
        setCurrentStandarts(standarts);

        const standartIds = standarts.map((standart) => standart.standartId);
        const detailedStandartsPromises = standartIds.map((standartId) =>
          standartsService.getStandardById(standartId)
        );
        const detailedStandarts = await Promise.all(detailedStandartsPromises);
        setDetailedStandarts(detailedStandarts);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchStandarts();
  }, [id]);

  const handleDelete = async (productStandartId) => {
    try {
      await ProductStandartsService.deleteProductStandart(productStandartId);
      setCurrentStandarts((prev) =>
        prev.filter((standart) => standart.id !== productStandartId)
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
        {currentStandarts.map((standart, index) => (
          <tr key={standart.id}>
            <td className="px-6 py-4 whitespace-nowrap">
              {detailedStandarts[index]?.id}
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              {detailedStandarts[index]?.name}
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <button
                onClick={() => handleDelete(standart.id)}
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
