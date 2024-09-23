import CertificateTypesService from "../../services/CertificateTypesService";
import { useState, useEffect } from "react";
import ListTemplate from "../../components/tables/ListTemplate";
import CertificateTypeTableRow from "../../components/tables/certificate-type-table/CertificateTypeTableRow";
import AddCertificateTypeForm from "../../components/forms/AddCertificateTypeForm";
import ListHeader from "../../components/headers/ListHeader";

export default function CertificateTypeManagerContext() {
  const [types, setTypes] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTypes = async () => {
      try {
        setLoading(true);

        const data = await CertificateTypesService.getAllCertificateTypes();
        setTypes(data);
      } catch (err) {
        setError("Failed to fetch products or categories.");
      } finally {
        setLoading(false);
      }
    };

    fetchTypes();
  }, []);

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
