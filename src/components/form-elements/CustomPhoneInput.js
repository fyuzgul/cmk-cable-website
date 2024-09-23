import PhoneInput from "react-phone-number-input";
import { useTranslation } from "react-i18next";
import { ErrorMessage } from "formik";

export default function CustomPhoneInput({ value, onChange, name }) {
  const { t } = useTranslation();
  return (
    <div>
      <PhoneInput
        value={value}
        placeholder={t("Telephone")}
        className="px-2 py-3 bg-white w-full text-gray-800 text-sm border-b border-gray-300 focus:border-red-600 outline-none"
        onChange={onChange}
      />
      <ErrorMessage
        name={name}
        component="div"
        className="text-red-500 text-sm mt-1"
      />
    </div>
  );
}
