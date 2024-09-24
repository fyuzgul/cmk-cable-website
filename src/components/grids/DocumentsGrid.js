import { useState } from "react";
import Fuse from "fuse.js";
import DocumentSidebar from "../sidebars/DocumentSidebar";
import SearchBar from "../SearchBar";
import DocumentCard from "../cards/DocumentCard";
import Loader from "../Loader";
import useFetchCertificatesAndTypes from "../../hooks/useFetchCertificatesAndTypes";

const Documents = () => {
  const [selectedDocument, setSelectedDocument] = useState("TSE-HAR");
  const [searchQuery, setSearchQuery] = useState("");
  const { certificates, loading, error } = useFetchCertificatesAndTypes();

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
