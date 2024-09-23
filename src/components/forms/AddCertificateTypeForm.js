import { Formik, Form } from "formik";
import certificateTypeService from "../../services/CertificateTypesService";
import { FileInput, TextInput } from "../form-elements";
import * as Yup from "yup";
export default function AddCertificateTypeForm() {
  const validationSchema = Yup.object({
    name: Yup.string().required("Product Name is required"),
    image: Yup.mixed().required("Image yüklemek zorunludur"),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const certificateType = {
        Name: values.name,
        Image: values.image,
      };

      await certificateTypeService.createCertificateType(certificateType);

      window.location.reload(true);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <div className="p-6">
      <h2 className="text-lg font-semibold mb-4">Add New Type</h2>
      <Formik
        initialValues={{
          name: "",
          image: null,
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, setFieldValue }) => (
          <Form>
            <div className="mb-4">
              <TextInput name="name" placeholder="Type Name" />
            </div>
            <div className="mb-4">
              <FileInput
                name="image"
                onChange={(event) => {
                  setFieldValue("image", event.currentTarget.files[0]);
                }}
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-blue-700 text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Add Type
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
