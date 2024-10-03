import React from "react";
import useFetchProductStandart from "../../hooks/useFetchProductStandarts";

export default function ProductStandartSection({ id }) {
  const { detailedStandarts, error } = useFetchProductStandart(id); // Hata kontrolü eklenebilir

  if (error) {
    return <p className="text-red-500">Standartlar yüklenirken hata oluştu.</p>;
  }

  if (!detailedStandarts || detailedStandarts.length === 0) {
    return <p className="text-gray-500">Hiç standart bulunamadı.</p>;
  }

  return (
    <div>
      {detailedStandarts.map((standart) => (
        <div key={standart.id}>{standart.name}</div>
      ))}
    </div>
  );
}
