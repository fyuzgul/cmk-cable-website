import React, { useState, useEffect } from "react";
import * as pdfjsLib from "pdfjs-dist/build/pdf";
import DocumentCard from "../components/cards/DocumentCard";
import Header from "../components/sections/VideoThumbnail";
import useFetchCertificatesAndTypes from "../hooks/useFetchCertificatesAndTypes";
import img from "../assets/header-images/kategori.png";
import SearchBar from "../components/SearchBar";

pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;

const base64ToArrayBuffer = (base64) => {
  const binaryString = window.atob(base64);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes.buffer;
};

const processPDFs = async (pdfs, setTextContent) => {
  try {
    const results = await Promise.all(
      pdfs.map(async (certificate) => {
        const { fileContentData } = certificate;
        const arrayBuffer = base64ToArrayBuffer(fileContentData);
        const pdfDoc = await pdfjsLib.getDocument({ data: arrayBuffer })
          .promise;
        let fullText = "";

        for (let pageNum = 1; pageNum <= pdfDoc.numPages; pageNum++) {
          const page = await pdfDoc.getPage(pageNum);
          const textContent = await page.getTextContent();
          const pageText = textContent.items.map((item) => item.str).join(" ");
          fullText += pageText + "\n";
        }

        return {
          ...certificate,
          text: fullText,
        };
      })
    );

    setTextContent(results);
  } catch (error) {
    console.error("Error processing PDFs: ", error);
  }
};

const DopSearch = () => {
  const [textContent, setTextContent] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredContent, setFilteredContent] = useState([]);
  const { certificates } = useFetchCertificatesAndTypes();

  const pdfs = certificates.map((certificate) => {
    return {
      ...certificate,
    };
  });

  useEffect(() => {
    processPDFs(pdfs, setTextContent);
  }, [certificates]);

  useEffect(() => {
    if (searchQuery.trim() !== "") {
      const filtered = textContent.filter((item) =>
        item.text.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredContent(filtered);
    } else {
      setFilteredContent([]);
    }
  }, [searchQuery, textContent]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header img={img} title="DOP SEARCH" />

      <div className="flex flex-col md:flex-row flex-1 pt-16 bg-gray-100">
        <div className="flex flex-col flex-1 p-6">
          <SearchBar
            searchQuery={searchQuery}
            onSearchChange={handleSearchChange}
          />

          <div className="flex flex-wrap justify-center gap-6 p-6 w-full">
            {filteredContent.length > 0
              ? filteredContent.map((item) => (
                  <DocumentCard key={item.name} certificate={item} />
                ))
              : searchQuery.trim() !== "" && <p>No results found.</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DopSearch;
