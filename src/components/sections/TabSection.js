import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import AboutUs from "../../pages/Corporate/AboutUs";
import History from "../../pages/Corporate/History";
import Pds from "../../pages/Corporate/Pds";
import useFetchAllAboutUsItems from "../../hooks/useFetchAllAboutUsItems";
import { useLoading } from "../../contexts/LoadingContext";

const TabSection = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { items } = useFetchAllAboutUsItems();
  const { loading } = useLoading();

  const tabMap = {
    "/corporate/about-us": "Hakkımızda",
    "/corporate/history": "Tarihçe",
    "/corporate/pds": "KVKK",
    "/corporate/iss": "Bilgi Toplumu Hizmeti",
  };

  const activeTab = tabMap[location.pathname] || "Hakkımızda";

  const tabs = [
    {
      name: "Hakkımızda",
      url: "/corporate/about-us",
      content: <AboutUs items={items} />,
    },
    {
      name: "Tarihçe",
      url: "/corporate/history",
      content: <History />,
    },
    {
      name: "Bilgi Toplumu Hizmeti",
      url: "https://www.belgemodul.com/sirket/891",
      isExternal: true,
    },
    {
      name: "KVKK",
      url: "/corporate/pds",
      content: <Pds />,
    },
  ];

  const handleTabChange = (tab) => {
    if (tab.isExternal) {
      window.open(tab.url, "_blank");
    } else {
      navigate(tab.url);
    }
  };

  return (
    <div className="p-4 md:p-8 mt-28">
      {!loading && (
        <>
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
                tab.content && (
                  <div key={tab.name}>
                    <div>{tab.content}</div>
                  </div>
                )
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default TabSection;
