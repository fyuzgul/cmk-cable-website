import { Formik, Form } from "formik";
import { FileInput, TextInput } from "../form-elements";
import * as Yup from "yup";
import CategoriesService from "../../services/CategoriesService";
import UpdateButton from "../buttons/UpdateButton";
import useFetchCategoryById from "../../hooks/useFetchCategoryById";
import DeleteButton from "../buttons/DeleteButton";

export default function EditCategoryForm({ id }) {
  const handleDelete = async (categoryId) => {
    try {
      await CategoriesService.deleteCategory(categoryId);
      alert("Kategori başarıyla silindi.");
      window.location.reload(true);
    } catch (err) {
      alert("Kategori silinirken bir hata oluştu.");
    }
  };

  const { category } = useFetchCategoryById(id);

  return (
    <div className="p-6">
      <h1 className="text-lg font-bold mb-4">Kategori Güncelle</h1>

      <Formik
        enableReinitialize
        initialValues={{
          name: category.name || "",
          image: category.image || null,
        }}
        validationSchema={Yup.object({
          name: Yup.string().required("Kategori adı gerekli"),
          image: Yup.mixed().required("Kategori fotoğrafı gerekli"),
        })}
        onSubmit={async (values) => {
          try {
            await CategoriesService.updateCategory({
              id: category.id,
              name: values.name,
              image: values.image,
            });
            alert("Kategori başarıyla güncellendi!");
            window.location.reload(true);
          } catch (error) {
            console.error("Kategori güncellenirken hata:", error);
            alert("Kategori güncellenemedi.");
          }
        }}
      >
        {({ setFieldValue }) => (
          <Form className="space-y-4">
            <TextInput name="name" placeholder="Kategori Adı" />
            <FileInput
              name="image"
              onChange={(event) => {
                setFieldValue("image", event.currentTarget.files[0]);
              }}
            />

            <div className="flex space-x-4">
              <UpdateButton text="Kategori Güncelle" />
              <DeleteButton
                text="Sil"
                onClick={() => handleDelete(category.id)}
              />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
