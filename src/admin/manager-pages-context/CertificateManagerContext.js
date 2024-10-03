import ListHeader from "../../components/headers/ListHeader";
import AddCertificateForm from "../../components/forms/AddCertificateForm";
import ListTemplate from "../../components/tables/ListTemplate";
import CertificateTableRow from "../../components/tables/certificate-table/CertificatesTableRow";
import useFetchAllCertificates from "../../hooks/useFetchAllCertificates";

export default function CertificateManagerContext() {
  const { certificates, error } = useFetchAllCertificates();

  if (error) {
    return <div>{error}</div>;
  }
  return (
    <>
      <ListHeader text={"Add Certificate"} form={<AddCertificateForm />} />
      <div className="overflow-x-auto">
        {certificates.map((certificate) => (
          <ListTemplate key={certificate.id}>
            <CertificateTableRow certificate={certificate} />
          </ListTemplate>
        ))}
      </div>
    </>
  );
}
