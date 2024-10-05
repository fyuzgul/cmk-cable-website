import React from "react";
import img from "../../assets/home-page-assets/15957674828e70.jpg";
import { MediumTitle, SmallTitle } from "../titles";
import CustomPTag from "../paragraphs/CustomPTag";
import CmkCable from "../CmkCable";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import ReadMoreButton from "../buttons/ReadMoreButton";
import { useLoading } from "../../contexts/LoadingContext";

function AboutSection() {
  const { t } = useTranslation();
  const { loading } = useLoading();

  if (loading) {
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col p-8 sm:p-16 md:p-24 justify-center bg-white">
      <div data-theme="teal" className="mx-auto max-w-6xl">
        <section className="text-black">
          <div className="[ lg:flex lg:items-center ] [ fancy-corners fancy-corners--large fancy-corners--top-left fancy-corners--bottom-right ]">
            <div className="flex-shrink-0 self-stretch sm:flex-basis-40 md:flex-basis-50 xl:flex-basis-60">
              <div className="h-full">
                <article className="h-full">
                  <div className="h-full">
                    <img
                      className="h-full object-cover"
                      src={img}
                      width="733"
                      height="412"
                      typeof="foaf:Image"
                      alt="About"
                    />
                  </div>
                </article>
              </div>
            </div>
            <div className="p-6 bg-gray-200">
              <div className="leading-relaxed">
                <SmallTitle>{t("AboutUs")}</SmallTitle>
                <MediumTitle>
                  <CmkCable
                    brand={t("Brand")}
                    text={t("Cable")}
                    brandColor="primary"
                  />
                </MediumTitle>
                <CustomPTag>{t("AboutUsText1")}</CustomPTag>
                <CustomPTag>{t("AboutUsText2")}</CustomPTag>

                <NavLink
                  className="flex justify-end mt-4"
                  to={"/corporate/about-us"}
                >
                  <ReadMoreButton onClick={() => window.scrollTo(0, 0)} />
                </NavLink>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default AboutSection;
