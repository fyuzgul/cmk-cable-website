import { Formik, Form } from "formik";
import {
  FileInput,
  SelectInput,
  TextareaInput,
  TextInput,
} from "../form-elements";
import * as Yup from "yup";
import ProductsService from "../../services/ProductsService";
import useFetchAllCategories from "../../hooks/useFetchAllCategories";

export default function AddProductForm() {
  const { categories, loading, error } = useFetchAllCategories();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  const validationSchema = Yup.object({
    name: Yup.string().required("Product Name is required"),
    usageLocations: Yup.string().required("Usage Locations is required"),
    category: Yup.string().required("Category is required"),
    image: Yup.mixed().required("Image yüklemek zorunludur"),
    detailImage: Yup.mixed().required("Detail image yüklemek zorunludur"),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const product = {
        Type: values.name,
        UsageLocations: values.usageLocations,
        CategoryId: values.category,
        Image: values.image,
        DetailImage: values.detailImage,
      };
      window.location.reload(true);
      await ProductsService.createProduct(product);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <div className="p-6">
      <h2 className="text-lg font-semibold mb-4">Add New Product</h2>
      <Formik
        initialValues={{
          name: "",
          usageLocations: "",
          category: "",
          image: null,
          detailImage: null,
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, setFieldValue }) => (
          <Form>
            <div className="mb-4">
              <TextInput name="name" placeholder="Product Name" />
            </div>
            <div className="mb-4">
              <TextareaInput
                name="usageLocations"
                placeholder="Usage Locations"
              />
            </div>
            <div className="mb-4">
              <SelectInput name="category" placeholder="Category">
                <option value="">Select Category</option>
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
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
                name="detailImage"
                onChange={(event) => {
                  setFieldValue("detailImage", event.currentTarget.files[0]);
                }}
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-blue-700 text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Add Product
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
