import React from "react";
import { Formik, Form } from "formik";
import { FileInput, TextInput } from "../form-elements";
import * as Yup from "yup";
import { useState, useEffect } from "react";
import certificateTypeService from "../../services/CertificateTypesService";
import CertificatesService from "../../services/CertificatesService";
import { SelectInput } from "../form-elements";
import AddButton from "../buttons/AddButton";

export default function AddCertificateForm() {
  const [types, setTypes] = useState([]);
  useEffect(() => {
    const fetchTypes = async () => {
      try {
        const data = await certificateTypeService.getAllCertificateTypes();
        setTypes(data);
      } catch (err) {
      } finally {
      }
    };

    fetchTypes();
  }, []);
  const validationSchema = Yup.object({
    name: Yup.string().required("Certificate Name is required"),
    typeId: Yup.string().required("Certificate Type is required"),
    image: Yup.mixed().required("Image is required"),
    fileContent: Yup.mixed().required("Detail image is required"),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const certificate = {
        Name: values.name,
        TypeId: values.typeId,
        Image: values.image,
        FileContent: values.fileContent,
      };

      await CertificatesService.createCertificate(certificate);
      window.location.reload(true);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <div className="p-6">
      <h2 className="text-lg font-semibold mb-4">Add New Certificate</h2>
      <Formik
        initialValues={{
          name: "",
          typeId: "",
          image: null,
          fileContent: null,
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, setFieldValue }) => (
          <Form>
            <div className="mb-4">
              <TextInput name="name" placeholder="Certificate Name" />
            </div>
            <div className="mb-4">
              <SelectInput name="typeId" placeholder="Type">
                <option value="">Select Type</option>
                {types.map((type) => (
                  <option key={type.id} value={type.id}>
                    {type.name}
                  </option>
                ))}
              </SelectInput>
            </div>
            <div className="mb-4">
              <FileInput
                name="image"
                onChange={(event) => {
                  setFieldValue("image", event.currentTarget.files[0]);
                }}
              />
            </div>
            <div className="mb-4">
              <FileInput
                name="fileContent"
                onChange={(event) => {
                  setFieldValue("fileContent", event.currentTarget.files[0]);
                }}
              />
            </div>
            <AddButton
              text="Add Certificate"
              disabled={isSubmitting}
              type="submit"
            />
          </Form>
        )}
      </Formik>
    </div>
  );
}
