import React from "react";
import { Formik, Form } from "formik";
import { TextInput } from "../form-elements";
import * as Yup from "yup";
import StandartService from "../../services/StandartsService";

export default function AddStanadrtForm() {
  const validationSchema = Yup.object({
    name: Yup.string().required("Certificate Name is required"),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const standart = {
        Name: values.name,
      };

      await StandartService.createStandards(standart);
      window.location.reload(true);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
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
  );
}
