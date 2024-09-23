import React from "react";
import { ErrorMessage } from "formik";

const FileInput = ({ name, onChange }) => {
  return (
    <>
      <input
        id={name}
        name={name}
        type="file"
        onChange={onChange}
        className="px-2 py-3 bg-white w-full text-gray-800 text-sm border-b border-gray-300 focus:border-red-600 outline-none"
      />
      <ErrorMessage
        name={name}
        component="div"
        className="text-red-500 text-sm mt-1"
      />
    </>
  );
};

export default FileInput;
