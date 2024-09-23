import { useTranslation } from "react-i18next";
import { ErrorMessage, Field } from "formik";

export default function EmailInput({ name }) {
  const { t } = useTranslation();
  return (
    <div>
      <Field
        name={name}
        type="email"
        placeholder={t("EmailAdress")}
        className="px-2 py-3 bg-white w-full text-gray-800 text-sm border-b border-gray-300 focus:border-red-600 outline-none"
      />
      <ErrorMessage
        name={name}
        component="div"
        className="text-red-500 text-sm mt-1"
      />
    </div>
  );
}
