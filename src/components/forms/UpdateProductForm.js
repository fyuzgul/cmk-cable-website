import React, { useState, useEffect } from "react";
import { Formik, Form } from "formik";
import { FileInput, SelectInput, TextInput } from "../form-elements";
import * as Yup from "yup";
import productService from "../../services/ProductsService";
import CategoriesService from "../../services/CategoriesService";

export default function UpdateProductForm({ id }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [categories, setCategories] = useState([]);
  const [product, setProduct] = useState({
    id: id,
    type: "",
    usageLocations: "",
    categoryId: "",
    image: null,
    imagePreview: null,
    detailImage: null,
    detailImagePreview: null,
  });

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categories = await CategoriesService.getAllCategories();
        setCategories(categories);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productData = await productService.getProductById(id);
        setProduct({
          id: productData.id,
          type: productData.type,
          usageLocations: productData.usageLocations,
          categoryId: productData.categoryId,
          image: productData.imageData || null,
          imagePreview: productData.imageData
            ? `data:image/jpeg;base64,${productData.imageData}`
            : null,
          detailImage: productData.detailImageData || null,
          detailImagePreview: productData.detailImageData
            ? `data:image/jpeg;base64,${productData.detailImageData}`
            : null,
        });
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  const handleImageChange = (e, setFieldValue, fieldName) => {
    const file = e.target.files[0];
    if (file) {
      setFieldValue(fieldName, file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setProduct((prevProduct) => ({
          ...prevProduct,
          [fieldName === "image" ? "imagePreview" : "detailImagePreview"]:
            reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      await productService.deleteProduct(id);
      alert("Product deleted successfully!");
      // Redirect or refresh the page if needed
    } catch (error) {
      console.error(`Error deleting product with ID ${id}:`, error);
      alert("Failed to delete product.");
    }
  };

  return (
    <div className="w-full md:w-full bg-gray-100 p-4 rounded shadow-lg">
      <h1 className="text-lg font-bold mb-4">Update Product</h1>

      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <Formik
          enableReinitialize
          initialValues={{
            type: product.type || "",
            usageLocations: product.usageLocations || "",
            categoryId: product.categoryId || "",
            image: product.image || null,
            detailImage: product.detailImage || null,
          }}
          validationSchema={Yup.object({
            type: Yup.string().required("Type is required"),
            usageLocations: Yup.string().required(
              "Usage Locations are required"
            ),
            categoryId: Yup.string().required("Category ID is required"),
          })}
          onSubmit={async (values) => {
            const formData = new FormData();
            formData.append("Id", id);
            formData.append("Type", values.type);
            formData.append("UsageLocations", values.usageLocations);
            formData.append("CategoryId", values.categoryId);
            if (values.image) formData.append("Image", values.image);
            if (values.detailImage)
              formData.append("DetailImage", values.detailImage);

            try {
              await productService.updateProduct(formData);
              alert("Product updated successfully!");
            } catch (error) {
              console.error(`Error updating product with ID ${id}:`, error);
              alert("Failed to update product.");
            }
          }}
        >
          {({ setFieldValue }) => (
            <Form className="space-y-4">
              <TextInput name="type" placeholder="Type" />
              <TextInput name="usageLocations" placeholder="Usage Locations" />
              <SelectInput name="categoryId">
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </SelectInput>

              <div>
                <FileInput
                  name="image"
                  onChange={(e) => handleImageChange(e, setFieldValue, "image")}
                />
                {product.imagePreview ? (
                  <div className="mt-4">
                    <p className="text-gray-600">Current Image:</p>
                    <img
                      src={product.imagePreview}
                      alt="Product Preview"
                      className="w-64 h-64 object-cover mt-2 rounded-lg shadow-lg"
                    />
                  </div>
                ) : (
                  <p className="text-gray-600">No image uploaded.</p>
                )}
              </div>

              <div>
                <FileInput
                  name="detailImage"
                  onChange={(e) =>
                    handleImageChange(e, setFieldValue, "detailImage")
                  }
                />
                {product.detailImagePreview ? (
                  <div className="mt-4">
                    <p className="text-gray-600">Current Detail Image:</p>
                    <img
                      src={product.detailImagePreview}
                      alt="Detail Preview"
                      className="w-64 h-64 object-cover mt-2 rounded-lg shadow-lg"
                    />
                  </div>
                ) : (
                  <p className="text-gray-600">No detail image uploaded.</p>
                )}
              </div>

              <button
                type="submit"
                className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 text-sm"
              >
                Update Product
              </button>
              <button
                onClick={handleDelete}
                className="bg-red-500 text-white p-2 rounded hover:bg-red-600 text-sm"
              >
                Delete
              </button>
            </Form>
          )}
        </Formik>
      )}
    </div>
  );
}
