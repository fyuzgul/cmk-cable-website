import React, { useEffect, useState } from "react";
import Fuse from "fuse.js";
import DocumentSidebar from "../sidebars/DocumentSidebar";
import SearchBar from "../SearchBar";
import DocumentCard from "../cards/DocumentCard";
import certificatesService from "../../services/CertificatesService";
import certificateTypeService from "../../services/CertificateTypesService";
import Loader from "../Loader";

const Documents = () => {
  const [selectedDocument, setSelectedDocument] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [certificates, setCertificates] = useState({});
  const [certificateTypes, setCertificateTypes] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCertificatesAndTypes = async () => {
      try {
        setLoading(true);

        const [certificatesData, certificateTypesData] = await Promise.all([
          certificatesService.getAllCertificates(),
          certificateTypeService.getAllCertificateTypes(),
        ]);

        const certificateTypeMap = certificateTypesData.reduce((map, type) => {
          map[type.id] = type.name;
          return map;
        }, {});

        setCertificateTypes(certificateTypeMap);

        const categorizedCertificates =
          certificatesService.categorizeCertificatesByType(
            certificatesData,
            certificateTypeMap
          );

        setCertificates(categorizedCertificates);

        const firstCategoryKey = Object.keys(categorizedCertificates)[0];
        if (firstCategoryKey) {
          setSelectedDocument(firstCategoryKey);
        }
      } catch (err) {
        setError("Failed to fetch certificates or types.");
      } finally {
        setLoading(false);
      }
    };

    fetchCertificatesAndTypes();
  }, []);

  if (loading) return <Loader />;
  if (error) return <div>{error}</div>;

  const selectedCertificates = certificates[selectedDocument] || [];

  const fuse = new Fuse(selectedCertificates, {
    keys: ["name"],
    includeScore: true,
  });

  const filteredCertificates = searchQuery
    ? fuse.search(searchQuery).map((result) => result.item)
    : selectedCertificates;

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex flex-col md:flex-row flex-1 pt-16 bg-gray-100">
        <DocumentSidebar
          documents={certificates}
          selectedDocument={selectedDocument}
          onSelectDocument={setSelectedDocument}
        />
        <div className="flex flex-col flex-1 p-6">
          <SearchBar
            searchQuery={searchQuery}
            onSearchChange={(e) => setSearchQuery(e.target.value)}
          />
          <div className="flex flex-wrap justify-center gap-6 p-6 w-full">
            {filteredCertificates.length > 0 ? (
              filteredCertificates.map((certificate) => (
                <DocumentCard key={certificate.id} certificate={certificate} />
              ))
            ) : (
              <p>No certificates found for "{searchQuery}"</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documents;
