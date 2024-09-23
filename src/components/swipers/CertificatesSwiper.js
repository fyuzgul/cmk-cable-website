import { Swiper, SwiperSlide } from "swiper/react";
import CertificateTypesService from "../../services/CertificateTypesService";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "../../styles/CertificatesSwiper.css";
import { useTranslation } from "react-i18next";
import { FreeMode, Pagination } from "swiper/modules";
import { BigTitle } from "../titles";
import { useEffect, useState } from "react";

function CertificatesSection() {
  const [certificates, setSertificates] = useState([]);
  useEffect(() => {
    CertificateTypesService.getAllCertificateTypes()
      .then((data) => {
        console.log("Data loaded:", data); // Veri yüklendiğinde konsola yazdır
        setSertificates(data);
      })
      .catch((error) => console.error("Error loading products:", error));
  }, []);

  const { t } = useTranslation();
  return (
    <div className="py-8 px-4 bg-gray-100 text-center">
      <BigTitle>{t("Documents")}</BigTitle>
      <div className="flex justify-center">
        <Swiper
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="certificateSwiper"
          slidesPerView={6}
          slidesPerGroup={6}
          loop={true}
          centeredSlides={false}
          breakpoints={{
            1024: {
              slidesPerView: 6,
              slidesPerGroup: 6,
            },
            768: {
              slidesPerView: 4,
              slidesPerGroup: 4,
            },
            640: {
              slidesPerView: 2,
              slidesPerGroup: 2,
            },
            320: {
              slidesPerView: 2,
              slidesPerGroup: 2,
            },
          }}
        >
          {certificates.map((certificate) => (
            <SwiperSlide key={certificate.id}>
              <img
                src={`data:image/png;base64,${certificate.imageData}`}
                alt={certificate.name}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default CertificatesSection;
