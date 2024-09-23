import ContactCard from "../components/cards/ContacCard";
import { BigTitle } from "../components/titles";
import ContactCardPTag from "../components/paragraphs/ContactCardPTag";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import Map from "../components/sections/Map";

import {
  CustomPhoneInput,
  TextareaInput,
  TextInput,
  EmailInput,
} from "../components/form-elements";
import MailSVG from "../components/svgs/MailSVG";
import TelephoneSVG from "../components/svgs/TelephoneSVG";
import SendMessageButton from "../components/buttons/SendMessageButton";

export default function Contact() {
  const initialValues = {
    fullName: "",
    street: "",
    city: "",
    postcode: "",
    telephoneNumber: "",
    email: "",
    message: "",
  };

  const validationSchema = Yup.object().shape({
    fullName: Yup.string().required("Ad Soyad zorunludur"),
    street: Yup.string().required("Adres zorunludur"),
    city: Yup.string().required("Şehir zorunludur"),
    postcode: Yup.number()
      .typeError("Posta kodu sayısal olmalıdır")
      .required("Posta kodu zorunludur"),
    telephoneNumber: Yup.string().required("Telefon numarası zorunludur"),
    email: Yup.string()
      .email("Geçersiz e-posta adresi")
      .required("E-posta zorunludur"),
    message: Yup.string().required("Mesaj alanı zorunludur"),
  });

  const handleSubmit = (values) => {
    console.log("Form Submitted", values);
  };
  return (
    <div className="pt-24 mb-24">
      <div className="flex flex-wrap justify-center gap-6 mb-0">
        <ContactCard phone="sdasdas" email="asdasd" fax="asdasda" />
        <ContactCard phone="sdasdas" email="asdasd" fax="asdasda" />
        <ContactCard phone="sdasdas" email="asdasd" fax="asdasda" />
        <ContactCard phone="sdasdas" email="asdasd" fax="asdasda" />
        <ContactCard phone="sdasdas" email="asdasd" fax="asdasda" />
      </div>
      <div
        className="grid md:grid-cols-2 gap-16 items-center relative
      overflow-hidden p-8 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)]
      rounded-3xl max-w-6xl mx-auto bg-white  font-[sans-serif]
      before:absolute before:right-0 before:w-[300px] before:bg-gray-800
      before:h-full max-md:before:hidden"
      >
        <div>
          <BigTitle color="gray">Get In Touch</BigTitle>
          <ContactCardPTag>
            Have a specific inquiry or looking to explore new opportunities? Our
            experienced team is ready to engage with you.
          </ContactCardPTag>

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ values, setFieldValue }) => (
              <Form>
                <div className="space-y-4 mt-8">
                  <TextInput name="fullName" placeholder="Deneme" />
                  <TextInput name="street" placeholder="Street" />
                  <div className="grid grid-cols-2 gap-6">
                    <TextInput name="city" placeholder="City" />
                    <TextInput name="postcode" placeholder="Postcode" />
                  </div>
                  <CustomPhoneInput
                    value={values.telephoneNumber}
                    name="telephoneNumber"
                    onChange={(value) =>
                      setFieldValue("telephoneNumber", value)
                    }
                  />
                  <EmailInput name="email" />
                  <TextareaInput name="message" placeholder="Write Message" />
                </div>
                <SendMessageButton text="Send Message" />
              </Form>
            )}
          </Formik>

          <ul className="mt-4 flex flex-wrap justify-center gap-6">
            <li className="flex items-center text-red-600">
              <MailSVG />
              <a href="de" className="text-sm ml-4">
                <strong>info@example.com</strong>
              </a>
            </li>
            <li className="flex items-center text-red-600">
              <TelephoneSVG />
              <a href="de" className="text-sm ml-4">
                <strong>+158 996 888</strong>
              </a>
            </li>
          </ul>
        </div>
        <Map />
      </div>
    </div>
  );
}
