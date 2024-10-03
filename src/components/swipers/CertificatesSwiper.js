import { Swiper, SwiperSlide } from "swiper/react";
import useFethcAllCertificateTypes from "../../hooks/useFetchAllCertificateTypes";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "../../styles/CertificatesSwiper.css";
import { useTranslation } from "react-i18next";
import { FreeMode, Pagination } from "swiper/modules";
import { BigTitle } from "../titles";

function CertificatesSection() {
  const { types } = useFethcAllCertificateTypes();

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
          {types.map((type) => (
            <SwiperSlide key={type.id}>
              <img
                src={`data:image/png;base64,${type.imageData}`}
                alt={type.name}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default CertificatesSection;
