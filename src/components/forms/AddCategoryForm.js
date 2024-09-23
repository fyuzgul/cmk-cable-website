import { Formik, Form } from "formik";
import categoriesService from "../../services/CategoriesService";
import { FileInput, TextInput } from "../form-elements";
import * as Yup from "yup";
import AddButton from "../buttons/AddButton";

export default function AddCategoryForm() {
  const validationSchema = Yup.object({
    name: Yup.string().required("Product Name is required"),
    image: Yup.mixed().required("Image yüklemek zorunludur"),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const category = {
        Name: values.name,
        Image: values.image,
      };

      await categoriesService.createCategory(category);

      window.location.reload(true);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <div className="p-6">
      <h2 className="text-lg font-semibold mb-4">Add New Category</h2>
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
              <TextInput name="name" placeholder="Category Name" />
            </div>
            <div className="mb-4">
              <FileInput
                name="image"
                onChange={(event) => {
                  setFieldValue("image", event.currentTarget.files[0]);
                }}
              />
            </div>
            <AddButton
              text="Add Category"
              disabled={isSubmitting}
              type="submit"
            />
          </Form>
        )}
      </Formik>
    </div>
  );
}
