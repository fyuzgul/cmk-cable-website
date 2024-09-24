import { Formik, Form } from "formik";
import { FileInput, TextInput, SelectInput } from "../form-elements";
import * as Yup from "yup";
import CertificatesService from "../../services/CertificatesService";
import { useNavigate } from "react-router-dom";
import useFetchAllCertificateTypes from "../../hooks/useFetchAllCertificateTypes";
import useFetchCertificateById from "../../hooks/useFetchCertifaceteById";

export default function UpdateCertificateForm({ id }) {
  const navigate = useNavigate();
  const {
    types,
    loading: typesLoading,
    error: typesError,
  } = useFetchAllCertificateTypes();
  const {
    certificate,
    loading: certificateLoading,
    error: certificateError,
  } = useFetchCertificateById(id);

  const handleFileChange = (e, setFieldValue, fieldName) => {
    const file = e.target.files[0];
    if (file) {
      setFieldValue(fieldName, file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setFieldValue(
          fieldName === "image" ? "imagePreview" : "fileContentPreview",
          reader.result
        );
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDelete = async (certificateId) => {
    try {
      await CertificatesService.deleteCertificate(certificateId);
      alert("Sertifika başarıyla silindi.");
      navigate(-1);
    } catch (err) {
      alert("Sertifika silinirken bir hata oluştu.");
    }
  };
  if (typesLoading || certificateLoading) {
    return <p>Yükleniyor...</p>;
  }

  if (typesError) {
    return <p>Tipleri yüklerken hata oluştu: {typesError}</p>;
  }

  if (certificateError) {
    return <p>Sertifika yüklerken hata oluştu: {certificateError}</p>;
  }

  return (
    <div className="w-full md:w-full bg-gray-100 p-4 rounded shadow-lg mt-24">
      <h1 className="text-lg font-bold mb-4">Sertifikayı Güncelle</h1>

      <Formik
        enableReinitialize
        initialValues={{
          name: certificate.name || "",
          typeId: certificate.typeId || "",
          image: certificate.image || null,
          imagePreview: certificate.imagePreview || null,
          fileContent: certificate.fileContent || null,
          fileContentPreview: certificate.fileContentPreview || null,
        }}
        validationSchema={Yup.object({
          name: Yup.string().required("Sertifika adı gerekli"),
          typeId: Yup.string().required("Sertifika tipi gerekli"),
        })}
        onSubmit={async (values) => {
          const formData = new FormData();
          formData.append("Id", certificate.id);
          formData.append("Name", values.name);
          formData.append("TypeId", parseInt(values.typeId));
          if (values.image) formData.append("Image", values.image);
          if (values.fileContent)
            formData.append("FileContent", values.fileContent);

          try {
            await CertificatesService.updateCertificate(formData);
            alert("Sertifika başarıyla güncellendi!");
            navigate(-1);
          } catch (error) {
            console.error("Sertifika güncellenirken hata oluştu:", error);
            alert("Sertifika güncellenemedi.");
          }
        }}
      >
        {({ setFieldValue, values }) => (
          <Form className="space-y-4">
            <TextInput name="name" placeholder="Sertifika Adı" />
            <SelectInput name="typeId">
              <option value="">Tip Seçin</option>
              {types.map((type) => (
                <option key={type.id} value={type.id}>
                  {type.name}
                </option>
              ))}
            </SelectInput>

            <div>
              <FileInput
                name="image"
                onChange={(e) => handleFileChange(e, setFieldValue, "image")}
              />
              {values.imagePreview && (
                <div className="mt-4">
                  <p className="text-gray-600">Yüklü Resim:</p>
                  <img
                    src={values.imagePreview}
                    alt="Sertifika Resim Önizlemesi"
                    className="w-64 h-64 object-cover mt-2 rounded-lg shadow-lg"
                  />
                </div>
              )}
            </div>

            <div>
              <FileInput
                name="fileContent"
                onChange={(e) =>
                  handleFileChange(e, setFieldValue, "fileContent")
                }
              />
              {values.fileContentPreview && (
                <div className="mt-4">
                  <p className="text-gray-600">Yüklü Dosya:</p>
                  <iframe
                    src={values.fileContentPreview}
                    className="w-64 h-64 object-cover mt-2 rounded-lg shadow-lg"
                    title="Dosya Önizlemesi"
                  />
                </div>
              )}
            </div>

            <div className="flex space-x-4">
              <button
                type="submit"
                className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 text-sm"
              >
                Güncelle
              </button>
              <button
                type="button"
                onClick={() => handleDelete(certificate.id)}
                className="bg-red-500 text-white p-2 rounded hover:bg-red-600 text-sm"
              >
                Sil
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
