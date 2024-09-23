import { useTranslation } from "react-i18next";
import VerificationSVG from "../svgs/VerificationSVG";
export default function GetOfferButton({ onClick }) {
  const { t } = useTranslation();
  return (
    <button
      className="flex items-center justify-center font-medium rounded-lg text-sm p-2 text-white bg-red-700 hover:bg-black focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-black dark:focus:ring-blue-800"
      onClick={onClick}
    >
      <span className="flex items-center">
        {t("GetOffer")}

        <VerificationSVG className="mr-2" />
      </span>
    </button>
  );
}
