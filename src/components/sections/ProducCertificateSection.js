import useFetchProductCertificates from "../../hooks/useFetchProductCertificates";

export default function ProductCertificateSection({ id }) {
  const { detailedCertificates } = useFetchProductCertificates(id);

  return (
    <div>
      {detailedCertificates.map((certificate) => (
        <div key={certificate.id}>{certificate.name}</div>
      ))}
    </div>
  );
}
