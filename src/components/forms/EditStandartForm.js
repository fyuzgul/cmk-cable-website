import { Formik, Form } from "formik";
import { TextInput } from "../form-elements";
import * as Yup from "yup";
import StandartsService from "../../services/StandartsService";
import useFetchStandartById from "../../hooks/useFetchStandartById";

export default function EditStandartForm({ id }) {
  const handleDelete = async (standartId) => {
    try {
      await StandartsService.deleteStandards(standartId);
      alert("Standart başarıyla silindi.");
      window.location.reload(true);
    } catch (err) {
      alert("Standart silinirken bir hata oluştu.");
    }
  };

  const { standart, loading, error } = useFetchStandartById(id);

  return (
    <div className="p-6">
      <h1 className="text-lg font-bold mb-4">Standart Güncelle</h1>

      {loading ? (
        <p>Yükleniyor...</p>
      ) : error ? (
        <p>Hata: {error}</p>
      ) : (
        <Formik
          enableReinitialize
          initialValues={{
            name: standart.name || "",
          }}
          validationSchema={Yup.object({
            name: Yup.string().required("Standart adı gerekli"),
          })}
          onSubmit={async (values) => {
            try {
              await StandartsService.updateStandards({
                id: standart.id,
                name: values.name,
              });
              alert("Standart başarıyla güncellendi!");
              window.location.reload(true);
            } catch (error) {
              console.error("Standart güncellenirken hata:", error);
              alert("Standart güncellenemedi.");
            }
          }}
        >
          {() => (
            <Form className="space-y-4">
              <TextInput name="name" placeholder="Standart Adı" />

              <div className="flex space-x-4">
                <button
                  type="submit"
                  className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 text-sm"
                >
                  Standart Güncelle
                </button>

                <button
                  type="button"
                  onClick={() => handleDelete(standart.id)}
                  className="bg-red-500 text-white p-2 rounded hover:bg-red-600 text-sm"
                >
                  Standart Sil
                </button>
              </div>
            </Form>
          )}
        </Formik>
      )}
    </div>
  );
}
