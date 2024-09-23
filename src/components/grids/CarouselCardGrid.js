import CarouselCard from "../cards/CarouselCard";
import icons from "../../assets/home-page-assets/slider-card-icons";
import { useTranslation } from "react-i18next";

function CarouselCardGrid() {
  const iconKeys = Object.keys(icons);
  const { t } = useTranslation();

  const textMap = {
    0: { text: t("Documents"), url: "/documents" },
    1: { text: t("PriceList"), url: "/price-list" },
    2: { text: t("Products"), url: "/products" },
    3: { text: t("ECatalog"), url: "/e-catalog" },
  };

  return (
    <div className="content-overlay">
      <section className="content">
        {iconKeys.map((key, index) => (
          <CarouselCard
            key={index}
            src={icons[key]}
            text={textMap[index].text}
            url={textMap[index].url}
          />
        ))}
      </section>
    </div>
  );
}

export default CarouselCardGrid;
