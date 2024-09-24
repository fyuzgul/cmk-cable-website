import ListTemplate from "../../components/tables/ListTemplate";
import CertificateTypeTableRow from "../../components/tables/certificate-type-table/CertificateTypeTableRow";
import AddCertificateTypeForm from "../../components/forms/AddCertificateTypeForm";
import ListHeader from "../../components/headers/ListHeader";
import useFetchAllCertificateTypes from "../../hooks/useFetchAllCertificateTypes";

export default function CertificateTypeManagerContext() {
  const { types, loading, error } = useFetchAllCertificateTypes();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <ListHeader
        text={"Add Certificate Type"}
        form={<AddCertificateTypeForm />}
      />
      <div className="overflow-x-auto">
        {types.map((certificateType) => (
          <ListTemplate key={certificateType.id}>
            <CertificateTypeTableRow certificateType={certificateType} />
          </ListTemplate>
        ))}
      </div>
    </>
  );
}
