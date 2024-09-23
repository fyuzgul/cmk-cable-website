import { NavLink } from "react-router-dom";
import CmkCable from "../CmkCable";
import { useTranslation } from "react-i18next";

function Logo() {
  const { t } = useTranslation();
  return (
    <NavLink to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
      <img src="./logo.png" className="h-8" alt="Flowbite Logo" />
      <CmkCable
        brand={t("Brand")}
        text={t("Cable")}
        brandColor="red"
        textColor="black"
      />
    </NavLink>
  );
}
export default Logo;
