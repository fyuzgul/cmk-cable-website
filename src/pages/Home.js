import CustomSwiper from "../components/swipers/CustomSwiper";
import ProductsSwiper from "../components/swipers/ProductsSwiper";
import AboutSection from "../components/sections/AboutSection";
import VideoModal from "../components/modals/VideoModal";
import OurValues from "../components/sections/OurValues";
import CertificatesSwiper from "../components/swipers/CertificatesSwiper";
import { useLoading } from "../contexts/LoadingContext";

export default function Home() {
  const { loading } = useLoading();

  if (!loading) {
    return (
      <div className="page-container">
        <CustomSwiper />
        <AboutSection />
        <VideoModal />
        <ProductsSwiper />
        <OurValues />
        <CertificatesSwiper />
      </div>
    );
  }
}
