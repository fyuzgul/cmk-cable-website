import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { NavLink } from "react-router-dom";
import { useState } from "react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "../../styles/ProductsSwiper.css";
import ProductCard from "../cards/ProductCard";
import { EffectCoverflow, Autoplay, Navigation } from "swiper/modules";
import { BigTitle } from "../titles";
import CmkCable from "../CmkCable";
import { useTranslation } from "react-i18next";
import ShowAllButton from "../buttons/ShowAllButton";
import ProductService from "../../services/ProductsService";

export default function ProductsSwiper() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    ProductService.getAllProducts()
      .then((data) => {
        console.log("Data loaded:", data);
        setProducts(data);
      })
      .catch((error) => console.error("Error loading products:", error));
  }, []);

  const { t } = useTranslation();

  const swiperRef = useRef(null);

  useEffect(() => {
    const swiperInstance = swiperRef.current?.swiper;

    if (!swiperInstance) return;

    const handleMouseEnter = () => swiperInstance.autoplay.stop();
    const handleMouseLeave = () => swiperInstance.autoplay.start();

    const swiperElement = swiperInstance.el;

    swiperElement?.addEventListener("mouseenter", handleMouseEnter);
    swiperElement?.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      swiperElement?.removeEventListener("mouseenter", handleMouseEnter);
      swiperElement?.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className="flex flex-col items-center">
      <BigTitle className="text-center">
        <CmkCable
          brand={t("Brand") + " " + t("Cable")}
          text={t("Products")}
          brandColor="red"
          textColor="gray"
        ></CmkCable>
      </BigTitle>

      <Swiper
        effect={"coverflow"}
        loop={true}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 20,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[EffectCoverflow, Autoplay, Navigation]}
        className="productSwiper"
        ref={swiperRef}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductCard product={product} categoryId={product.categoryId} />
          </SwiperSlide>
        ))}
      </Swiper>
      <NavLink to={"/products"}>
        <ShowAllButton text="Tüm Ürünler" role="ShowAllProducts" />
      </NavLink>
    </div>
  );
}
