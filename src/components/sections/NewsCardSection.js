import React from "react";
import NewsCard from "../cards/NewsCard";
import newsImages from "../../assets/home-page-assets/news";
import { BigTitle } from "../titles";
import CmkCable from "../CmkCable";

const NewsCardsSection = () => {
  const newsImagesKey = Object.keys(newsImages);
  const newsData = [
    {
      key: 0,
      title: "Konya Enerji Fuarı",
      description:
        "23.02.2023-25.02.2023\nFuar Yeri: TÜYAP KONYA ULUSLARARASI FUAR MERKEZİ",
    },
    {
      key: 1,
      title: "EGEKAF 23 Kariyer FUARI",
      description:
        "24-02-2023 \nFuar Yeri: NİHAT ZEYBETÇİ KONGRE VE KÜLTÜR MERKEZİ",
    },
    {
      key: 2,
      title: "15. Uluslararası Solarex Güneş Enerjisi & Teknolojileri FUARI",
      description: "6.04.2023-08.04.2023 Fuar Yeri: İSTANBUL FUAR MERKEZİ",
    },
  ];

  return (
    <section className="pt-12 lg:pt-0 pb-10 lg:pb-20 bg-[#F3F4F6] flex flex-col items-center">
      <div className="mb-8">
        <BigTitle className="text-center">
          <CmkCable
            brand="Bizden"
            text="Haberler"
            brandColor="red"
            textColor="gray"
          ></CmkCable>
        </BigTitle>
      </div>
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center -mx-4">
          {newsData.map((newsItem, index) => (
            <div key={index} className="w-full md:w-1/2 xl:w-1/3 px-4">
              <NewsCard
                imageSrc={newsImages[newsImagesKey[newsItem.key]]}
                title={newsItem.title}
                description={newsItem.description}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsCardsSection;
