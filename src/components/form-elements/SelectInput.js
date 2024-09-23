import { Field, ErrorMessage } from "formik";

export default function SelectInput({ name, children, isMulti = false }) {
  return (
    <div>
      <Field
        as="select"
        name={name}
        className="px-2 py-3 bg-white w-full text-gray-800 text-sm border-b border-gray-300 focus:border-red-600 outline-none"
        multiple={isMulti}
      >
        {children}
      </Field>
      <ErrorMessage
        name={name}
        component="div"
        className="text-red-500 text-sm mt-1"
      />
    </div>
  );
}
