import React from "react";
import { Formik, Form } from "formik";
import { TextInput } from "../form-elements";
import * as Yup from "yup";
import StandartService from "../../services/StandartsService";

const AddStanadrtModal = ({ isOpen, onClose }) => {
  const validationSchema = Yup.object({
    name: Yup.string().required("Certificate Name is required"),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const standart = {
        Name: values.name,
      };

      await StandartService.createStandards(standart);
      onClose();
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity">
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg w-full max-w-lg relative">
          <button
            onClick={onClose}
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 z-10"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="p-6">
            <h2 className="text-lg font-semibold mb-4">Add New Standart</h2>
            <Formik
              initialValues={{
                name: "",
              }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting, setFieldValue }) => (
                <Form>
                  <div className="mb-4">
                    <TextInput name="name" placeholder="Certificate Name" />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-blue-700 text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                  >
                    Add Standarts
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddStanadrtModal;
