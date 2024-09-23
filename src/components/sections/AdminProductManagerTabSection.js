import React, { useState } from "react";
import TechnicalFeaturesManagerTable from "../tables/product-technical-features-table/TechnicalFeaturesManagerTable";
import ProductCertificateTable from "../tables/product-certificate-table/ProductCertificateTable";
import ProductStandartTable from "../tables/product-standart-table/ProductStandartTable";
import UpdateProductForm from "../forms/UpdateProductForm";

const AdminProductManagerTabSection = ({ id }) => {
  const [activeTab, setActiveTab] = useState("Ürün");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const tabs = [
    {
      name: "Ürün",
      content: <UpdateProductForm id={id} />,
    },
    {
      name: "Ürün Teknik Özellikler",
      content: <TechnicalFeaturesManagerTable id={id} />,
    },
    {
      name: "Sertifikaları",
      content: (
        <ProductCertificateTable
          id={id}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      ),
    },
    {
      name: "Standartlar",
      content: (
        <ProductStandartTable
          id={id}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      ),
    },
  ];

  const handleTabChange = (tab) => {
    if (tab.isExternal) {
      window.open(tab.url, "_blank");
    } else {
      setActiveTab(tab.name);
    }
  };

  return (
    <div className="p-4 md:p-8 mt-16">
      <div className="flex flex-wrap justify-center space-x-2 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            onClick={() => handleTabChange(tab)}
            className={`px-4 py-2 m-1 rounded ${
              activeTab === tab.name
                ? "bg-red-600 text-white"
                : "bg-gray-600 text-white hover:bg-red-600"
            } text-sm md:text-base`}
          >
            {tab.name}
          </button>
        ))}
      </div>

      <div>
        {tabs.map(
          (tab) =>
            activeTab === tab.name &&
            tab.content && <div key={tab.name}>{tab.content}</div>
        )}
      </div>
    </div>
  );
};

export default AdminProductManagerTabSection;
