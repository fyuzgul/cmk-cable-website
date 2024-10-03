import { Formik, Form } from "formik";
import { FileInput, TextInput } from "../form-elements";
import * as Yup from "yup";
import certificateTypeService from "../../services/CertificateTypesService";
import useFetchCertificateTypeById from "../../hooks/useFetchCertificateTypeById";

export default function EditCertificateTypeForm({ id }) {
  const handleDelete = async (certificateTypeId) => {
    try {
      await certificateTypeService.deleteCertificateType(certificateTypeId);
      alert("Kategori başarıyla silindi.");
      window.location.reload(true);
    } catch (err) {
      alert("Kategori silinirken bir hata oluştu.");
    }
  };
  const { certificateType } = useFetchCertificateTypeById(id);

  return (
    <div className="p-6">
      <h1 className="text-lg font-bold mb-4">Kategori Güncelle</h1>
      <Formik
        enableReinitialize
        initialValues={{
          name: certificateType.name || "",
          image: certificateType.image || null,
        }}
        validationSchema={Yup.object({
          name: Yup.string().required("Kategori adı gerekli"),
          image: Yup.mixed().required("Kategori fotoğrafı gerekli"),
        })}
        onSubmit={async (values) => {
          try {
            await certificateTypeService.updateCertificateType({
              id: certificateType.id,
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
              <button
                type="submit"
                className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 text-sm"
              >
                Type Güncelle
              </button>

              <button
                type="button"
                onClick={() => handleDelete(certificateType.id)}
                className="bg-red-500 text-white p-2 rounded hover:bg-red-600 text-sm"
              >
                Type Sil
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
