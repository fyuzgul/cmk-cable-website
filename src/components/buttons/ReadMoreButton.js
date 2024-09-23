import RightDirectionSVG from "../svgs/RightDirectionSVG";
import { useTranslation } from "react-i18next";

export default function ReadMoreButton({ onClick }) {
  const { t } = useTranslation();
  return (
    <button
      className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-medium text-white-600 transition duration-300 ease-out border-2 border-white-500 rounded-full shadow-md group mr-4"
      onClick={onClick}
    >
      <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-white-500 group-hover:translate-x-0 ease">
        <RightDirectionSVG />
      </span>
      <span className="absolute flex items-center justify-center w-full h-full text-white-500 transition-all duration-300 transform group-hover:translate-x-full ease">
        {t("ReadMore")}
      </span>
      <span className="relative invisible">{t("ReadMore")}</span>
    </button>
  );
}
