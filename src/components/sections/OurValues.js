import React from "react";
import background from "../../assets/home-page-assets/home-boxes-bg.png";
import OurValuesCard from "../cards/OurValuesCard";
import { BigTitle } from "../titles";
import { useTranslation } from "react-i18next";
import ContactUsButton from "../buttons/ContactUsButton";

const OurValues = () => {
  const { t } = useTranslation();
  return (
    <div
      className=""
      style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="relative z-10 flex flex-col items-center text-center text-white py-20">
        <BigTitle>Değerlerimiz</BigTitle>
        <div className="flex flex-wrap justify-center gap-8 mb-10">
          <OurValuesCard
            title="Deneme"
            text=" Ürünlerimiz BASEC, TSE, HAR, CPR, ISO 9001 sertifikaları tarafından
        onaylanmıştır. Bu sebeple ürünlerde yaşanabilecek olası tüm problemler
        belirlendiği an çözüme ulaştırılmaktadır. Aktif ve entegreli otomasyon
        sistemleri sayesinde hata minimize edilmiştir. CMK KABLO endüstri
        kabloları dünyanın her yerinde güvenle kullanılmaya devam edilmektedir."
          />
          <OurValuesCard
            title="Deneme"
            text=" Ürünlerimiz BASEC, TSE, HAR, CPR, ISO 9001 sertifikaları tarafından
      onaylanmıştır. Bu sebeple ürünlerde yaşanabilecek olası tüm problemler
      belirlendiği an çözüme ulaştırılmaktadır. Aktif ve entegreli otomasyon
      sistemleri sayesinde hata minimize edilmiştir. CMK KABLO endüstri
      kabloları dünyanın her yerinde güvenle kullanılmaya devam edilmektedir."
          />
          <OurValuesCard
            title="Deneme"
            text=" Ürünlerimiz BASEC, TSE, HAR, CPR, ISO 9001 sertifikaları tarafından
        onaylanmıştır. Bu sebeple ürünlerde yaşanabilecek olası tüm problemler
        belirlendiği an çözüme ulaştırılmaktadır. Aktif ve entegreli otomasyon
        sistemleri sayesinde hata minimize edilmiştir. CMK KABLO endüstri
        kabloları dünyanın her yerinde güvenle kullanılmaya devam edilmektedir."
          />
        </div>

        <ContactUsButton text={t("ContactUs")} />
      </div>
    </div>
  );
};

export default OurValues;
