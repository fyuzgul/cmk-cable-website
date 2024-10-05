import CareerForm from "../components/forms/CareerForm";
import { BigTitle } from "../components/titles";
import Header from "../components/sections/VideoThumbnail";
import img from "../assets/header-images/kariyer.png";

export default function Career() {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Header img={img} title="Kariyer" />
      <div className="container mx-auto p-8 max-w-4xl">
        <BigTitle color="red"> İş / Staj Başvuru Formu</BigTitle>
        <CareerForm />
      </div>
    </div>
  );
}
