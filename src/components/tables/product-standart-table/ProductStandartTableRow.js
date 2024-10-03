import React from "react";
import { useParams } from "react-router-dom";
import useFetchProductStandarts from "../../../hooks/useFetchProductStandarts";
import ProductStandartsService from "../../../services/ProductStandartsService";

export default function StandartTableRow() {
  const { id } = useParams();
  const { detailedStandarts, currentStandarts, error, loading } =
    useFetchProductStandarts(id);

  const handleDelete = async (productStandartId) => {
    try {
      await ProductStandartsService.deleteProductStandart(productStandartId);
      alert("Eşleşme başarıyla silindi.");
    } catch (err) {
      alert("Eşleşmeyi silerken bir hata oluştu.");
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
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
  );
}
