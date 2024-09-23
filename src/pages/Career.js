import CareerForm from "../components/forms/CareerForm";
import { BigTitle } from "../components/titles";

export default function Career() {
  return (
    <div className="flex flex-col justify-between min-h-screen mt-24">
      <div className="container mx-auto p-8 max-w-4xl">
        <BigTitle color="red"> İş / Staj Başvuru Formu</BigTitle>
        <CareerForm />
      </div>
    </div>
  );
}
