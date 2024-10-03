import React, { useState } from "react";
import Timeline from "../../components/sections/Timeline";
import HistorySection from "../../components/sections/HistorySection";
import useFetchAllHistoryItems from "../../hooks/useFetchAllHistoryItems";

const History = () => {
  const { historyItems } = useFetchAllHistoryItems();
  const [activeYear, setActiveYear] = useState(2006); // default olarak string olarak ayarlıyoruz

  // Dinamik olarak içerik oluşturuluyor
  const content = historyItems.reduce((acc, item) => {
    acc[item.year] = {
      title: item.title,
      description: item.description,
      image: `data:image/png;base64,${item.imageData}`, // Base64 görsel formatı
    };
    return acc;
  }, {});

  return (
    <div className="relative w-full flex flex-col items-center mt-12">
      <Timeline activeYear={activeYear} setActiveYear={setActiveYear} />
      <HistorySection activeYear={activeYear} content={content} />
    </div>
  );
};

export default History;
