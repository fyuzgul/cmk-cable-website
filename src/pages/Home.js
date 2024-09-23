import CustomSwiper from "../components/swipers/CustomSwiper";
import ProductsSwiper from "../components/swipers/ProductsSwiper";

import AboutSection from "../components/sections/AboutSection";
import VideoModal from "../components/modals/VideoModal";
import OurValues from "../components/sections/OurValues";
import NewsCardSection from "../components/sections/NewsCardSection";
import CertificatesSwiper from "../components/swipers/CertificatesSwiper";

export default function Home() {
  return (
    <div className="page-container">
      <CustomSwiper></CustomSwiper>
      <AboutSection></AboutSection>
      <VideoModal></VideoModal>
      <ProductsSwiper></ProductsSwiper>
      <OurValues></OurValues>
      <NewsCardSection></NewsCardSection>
      <CertificatesSwiper></CertificatesSwiper>
    </div>
  );
}
