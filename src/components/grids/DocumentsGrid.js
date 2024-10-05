import { useState } from "react";
import Fuse from "fuse.js";
import DocumentSidebar from "../sidebars/DocumentSidebar";
import SearchBar from "../SearchBar";
import DocumentCard from "../cards/DocumentCard";
import useFetchCertificatesAndTypes from "../../hooks/useFetchCertificatesAndTypes";
import { useLoading } from "../../contexts/LoadingContext";
import img from "../../assets/header-images/belgeler.png";
import Header from "../../components/sections/VideoThumbnail";

const Documents = () => {
  const [selectedDocument, setSelectedDocument] = useState("BASEC");
  const [searchQuery, setSearchQuery] = useState("");
  const { certificatesCate, error } = useFetchCertificatesAndTypes();
  const { loading } = useLoading();

  if (error) return <div>{error}</div>;

  const selectedCertificates = certificatesCate[selectedDocument] || [];

  const fuse = new Fuse(selectedCertificates, {
    keys: ["products.type"],
    includeScore: true,
  });

  const filteredCertificates = searchQuery
    ? fuse.search(searchQuery).map((result) => result.item)
    : selectedCertificates;
  console.log(selectedDocument);
  return (
    <>
      <Header img={img} title={"Belgelerimiz / " + selectedDocument} />

      <div className="min-h-screen flex flex-col">
        {!loading && (
          <div className="flex flex-col md:flex-row flex-1 bg-gray-100">
            <DocumentSidebar
              documents={certificatesCate}
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
                    <DocumentCard
                      key={certificate.id}
                      certificate={certificate}
                    />
                  ))
                ) : (
                  <p>No certificates found for "{searchQuery}"</p>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export default Documents;
