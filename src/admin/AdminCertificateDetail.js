import UpdateCertificateForm from "../components/forms/UpdateCertificateForm";
import { useParams } from "react-router-dom";
export default function AdminCertificateDetail() {
  const { id } = useParams();
  return <UpdateCertificateForm id={id} />;
}
