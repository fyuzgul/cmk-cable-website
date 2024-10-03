import React, { useState } from "react";
import ProductTypeSection from "./ProductTypeSection";
import ProductUsageLocationSection from "./ProductUsageLocationSection";
import ProductFeaturesSection from "./ProductFeaturesSection";
import ProductStandartSection from "./ProductStandartSection";
import ProductCertificateSection from "./ProducCertificateSection";
import { useLoading } from "../../contexts/LoadingContext";

const ClientProductDetailTabSection = ({ product }) => {
  const { loading } = useLoading();
  const [activeTab, setActiveTab] = useState("Tip");

  const tabs = [
    { name: "Tip", content: <ProductTypeSection type={product.type} /> },
    { name: "Yapısı", content: "Yapısı" },
    {
      name: "Kullanıldığı Yerler",
      content: (
        <ProductUsageLocationSection usageLocations={product.usageLocations} />
      ),
    },
    {
      name: "Teknik Özellikler",
      content: <ProductFeaturesSection id={product.id} />,
    },
    { name: "Standart", content: <ProductStandartSection id={product.id} /> },
    {
      name: "Sertifikalar",
      content: <ProductCertificateSection id={product.id} />,
    },
  ];

  if (loading) {
    return null;
  }

  return (
    <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
      <ul className="flex flex-wrap -mb-px">
        {tabs.map((tab) => (
          <li key={tab.name} className="me-2">
            <button
              onClick={() => setActiveTab(tab.name)}
              className={`inline-block p-4 border-b-2 rounded-t-lg ${
                activeTab === tab.name
                  ? "text-red-600 border-red-600 dark:text-red-500 dark:border-red-500"
                  : "border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
              }`}
            >
              {tab.name}
            </button>
          </li>
        ))}
      </ul>
      <div className="p-4 bg-gray-100">
        {tabs.map(
          (tab) =>
            activeTab === tab.name &&
            tab.content && <div key={tab.name}>{tab.content}</div>
        )}
      </div>
    </div>
  );
};

export default ClientProductDetailTabSection;
