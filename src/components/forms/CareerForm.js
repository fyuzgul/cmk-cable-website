import { useState, useEffect } from "react";
import { MediumTitle } from "../titles";

import { Formik, Form, FieldArray } from "formik";
import * as Yup from "yup";
import DeleteButton from "../../components/buttons/DeleteButton";
import "react-phone-number-input/style.css";
import {
  TextInput,
  CustomPhoneInput,
  TextareaInput,
  FileInput,
  AcceptSection,
  EmailInput,
  SelectInput,
  DateInput,
} from "../form-elements";
import { useTranslation } from "react-i18next";
import AddButton from "../buttons/AddButton";
import SubmitButton from "../buttons/SubmitButton";
export default function CareerForm() {
  const { t } = useTranslation();
  const [universities, setUniversities] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUniversities = async () => {
      try {
        const response = await fetch(
          "http://universities.hipolabs.com/search?country=turkey"
        );
        if (!response.ok) {
          throw new Error("Veri çekilirken bir hata oluştu");
        }
        const data = await response.json();
        const universityNames = data.map((university) => university.name);
        setUniversities(universityNames);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUniversities();
  }, [setError, setLoading]);

  const initialValues = {
    fullName: "",
    telephoneNumber: "",
    email: "",
    gender: "",
    maritalStatus: "",
    militaryStatus: "",
    driverLicense: "",
    travelAvailability: "",
    education: {
      school: "",
      faculty: "",
      graduationDate: "",
      languages: "",
      softwareSkills: "",
      seminars: "",
    },
    experiences: [{ company: "", duration: "", position: "" }],
    department: "",
    referenceSource: "",
    description: "",
    cv: null,
    consent: false,
  };

  const validationSchema = Yup.object().shape({
    fullName: Yup.string().required("Ad Soyad zorunludur"),
    telephoneNumber: Yup.string().required("Telefon numarası zorunludur"),
    email: Yup.string()
      .email("Geçersiz e-posta adresi")
      .required("E-posta zorunludur"),
    gender: Yup.string().required("Cinsiyet seçimi zorunludur"),
    maritalStatus: Yup.string().required("Medeni durum seçimi zorunludur"),
    militaryStatus: Yup.string().required("Askerlik durumu seçimi zorunludur"),
    driverLicense: Yup.string().required("Ehliyet durumu seçimi zorunludur"),
    travelAvailability: Yup.string().required(
      "Seyahat engeli seçimi zorunludur"
    ),
    education: Yup.object().shape({
      school: Yup.string().required("Okul bilgisi zorunludur"),
      faculty: Yup.string().required("Fakülte/Bölüm bilgisi zorunludur"),
      graduationDate: Yup.string().required("Mezuniyet tarihi zorunludur"),
      languages: Yup.string().required("Yabancı dil bilgisi zorunludur"),
      softwareSkills: Yup.string().required(
        "Kullanılan programlar bilgisi zorunludur"
      ),
      seminars: Yup.string().required("Seminer bilgisi zorunludur"),
    }),
    department: Yup.string().required("Departman seçimi zorunludur"),
    referenceSource: Yup.string().required("Referans kaynağı zorunludur"),
    description: Yup.string().required("Açıklama zorunludur"),
    cv: Yup.mixed().required("CV yüklemek zorunludur"),
    consent: Yup.boolean().oneOf(
      [true],
      "Açık Rıza Metni'ni kabul etmelisiniz"
    ),
  });

  const handleSubmit = (values) => {
    console.log("Form Submitted", values);
  };
  return (
    <div>
      {loading && <p>Yükleniyor...</p>}
      {error && <p className="text-red-500">{error}</p>}
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, setFieldValue }) => (
          <Form>
            <section className="mb-8">
              <MediumTitle>Kişisel Bilgiler</MediumTitle>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <TextInput name="fullName" placeholder={t("FullName")} />
                <CustomPhoneInput
                  value={values.telephoneNumber}
                  name="telephoneNumber"
                  onChange={(value) => setFieldValue("telephoneNumber", value)}
                />
                <EmailInput name="email" />
                <SelectInput name="gender">
                  <option value="">Cinsiyet</option>
                  <option value="Erkek">Erkek</option>
                  <option value="Kadın">Kadın</option>
                  <option value="Diğer">Diğer</option>
                </SelectInput>
                <SelectInput name="maritalStatus">
                  <option value="">Medeni Durum</option>
                  <option value="Bekar">Bekar</option>
                  <option value="Evli">Evli</option>
                </SelectInput>
                <SelectInput name="militaryStatus">
                  <option value="">Askerlik Durumu</option>
                  <option value="Tamamlandı">Tamamlandı</option>
                  <option value="Muaf">Muaf</option>
                  <option value="Ertelendi">Ertelendi</option>
                </SelectInput>
                <SelectInput name="driverLicense">
                  <option value="">Sürücü Ehliyeti</option>
                  <option value="Var">Var</option>
                  <option value="Yok">Yok</option>
                </SelectInput>
                <SelectInput name="travelAvailability">
                  <option value="">Seyahat Engeli</option>
                  <option value="Var">Var</option>
                  <option value="Yok">Yok</option>
                </SelectInput>
              </div>
            </section>

            <section className="mb-8">
              <MediumTitle>Eğitim Bilgileri</MediumTitle>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <SelectInput name="education.school">
                  <option value="">Üniversite Seçin</option>
                  {universities.map((university, index) => (
                    <option key={index} value={university}>
                      {university}
                    </option>
                  ))}
                </SelectInput>
                <SelectInput name="education.faculty">
                  <option value="">Fakülte Seçin</option>
                  <option value="mühendislik">Mühendislik</option>
                  <option value="Tıp">Tıp</option>
                </SelectInput>
                <DateInput
                  name="education.graduationDate"
                  placeholderText="Mezun Olduğu Tarih"
                />
                <TextInput
                  name="education.languages"
                  placeholder={t("ForeignLanguages")}
                />
                <TextInput
                  name="education.softwareSkills"
                  placeholder={t("SoftwareSkills")}
                />
                <TextInput
                  name="education.seminars"
                  placeholder={t("Seminars")}
                />
              </div>
            </section>

            <section className="mb-8">
              <MediumTitle>İş Deneyimleri</MediumTitle>

              <FieldArray name="experiences">
                {({ push, remove }) => (
                  <>
                    {values.experiences.map((experience, index) => (
                      <div
                        key={index}
                        className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4"
                      >
                        <TextInput
                          name={`experiences[${index}].company`}
                          placeholder={t("CompanyName")}
                        />

                        <TextInput
                          name={`experiences[${index}].duration`}
                          placeholder={t("WorkingHours")}
                        />
                        <TextInput
                          name={`experiences[${index}].position`}
                          placeholder={t("Position")}
                        />
                        {index > 0 && (
                          <div className="col-span-full flex justify-end">
                            <DeleteButton
                              text="Sil"
                              onClick={() => remove(index)}
                            ></DeleteButton>
                          </div>
                        )}
                      </div>
                    ))}
                    <AddButton
                      onClick={() =>
                        push({ company: "", duration: "", position: "" })
                      }
                      text=" + İş Deneyimi Ekle"
                    ></AddButton>
                  </>
                )}
              </FieldArray>
            </section>

            <section className="mb-8">
              <MediumTitle>Başvurduğunuz Departman</MediumTitle>
              <SelectInput name="department">
                <option value="">Departman</option>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="Diğer">Diğer</option>
              </SelectInput>
            </section>

            <section className="mb-8">
              <MediumTitle>Referans</MediumTitle>
              <SelectInput name="referenceSource">
                <option value="">Departman</option>
                <option value="şirket yakını">şirket yakını</option>
                <option value="linkedin">linkedin</option>
                <option value="facebook">facebook</option>
              </SelectInput>
            </section>

            <section className="mb-8">
              <MediumTitle className="text-xl font-semibold mb-4">
                Açıklama
              </MediumTitle>
              <TextareaInput
                name="description"
                placeholder={t("ExplainYourself")}
              />
            </section>

            <section className="mb-8">
              <MediumTitle className="text-xl font-semibold mb-4">
                CV Yükle
              </MediumTitle>
              <FileInput
                name="cv"
                onChange={(event) =>
                  setFieldValue("cv", event.currentTarget.files[0])
                }
              />
            </section>

            <section className="mb-8">
              <AcceptSection name="consent" />
            </section>
            <div className="text-center">
              <SubmitButton
                type="submit"
                text="Başvuruyu Gönder"
              ></SubmitButton>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
