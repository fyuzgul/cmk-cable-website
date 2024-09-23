import { NavLink } from "react-router-dom";
import { Field, ErrorMessage } from "formik";

export default function AcceptSection({ name }) {
  return (
    <>
      <div className="flex items-center">
        <Field name={name} type="checkbox" className="mr-2" />
        <label htmlFor={name}>
          <span>
            <NavLink to="/cmkkablo.com" className="text-blue-500 underline">
              Açık Rıza Metni'ni
            </NavLink>{" "}
            okudum ve kabul ediyorum.
          </span>
        </label>
      </div>
      <ErrorMessage
        name={name}
        component="div"
        className="text-red-500 text-sm mt-1"
      />
    </>
  );
}
