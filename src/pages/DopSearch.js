import React, { useState, useEffect } from "react";
import * as pdfjsLib from "pdfjs-dist/build/pdf";
import DocumentCard from "../components/cards/DocumentCard";
import Header from "../components/sections/VideoThumbnail";
import useFetchCertificatesAndTypes from "../hooks/useFetchCertificatesAndTypes";
import img from "../assets/header-images/kategori.png";
import {
  _3184A,
  _007_A03V2V2_F_Eca,
  _005_6181Y_Eca,
  _003H03VVH2_F_Eca,
} from "../assets/certificates";
import SearchBar from "../components/SearchBar";

pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;

const processPDFs = async (pdfs, setTextContent) => {
  try {
    const results = await Promise.all(
      pdfs.map(async ({ pdfurl, name, image }) => {
        const response = await fetch(pdfurl);
        const arrayBuffer = await response.arrayBuffer();
        const pdfDoc = await pdfjsLib.getDocument(arrayBuffer).promise;
        let fullText = "";

        for (let pageNum = 1; pageNum <= pdfDoc.numPages; pageNum++) {
          const page = await pdfDoc.getPage(pageNum);
          const textContent = await page.getTextContent();
          const pageText = textContent.items.map((item) => item.str).join("");
          fullText += pageText + "\n";
        }

        return { name, text: fullText, image };
      })
    );

    setTextContent(results);
  } catch (error) {
    console.error("Error processing PDFs: ", error);
  }
};

const DopSearch = () => {
  const { certificates } = useFetchCertificatesAndTypes();
  const [textContent, setTextContent] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredContent, setFilteredContent] = useState([]);

  const pdfs = [
    {
      pdfurl: _3184A,
      name: "318XA (-40°C )",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    },
    {
      pdfurl: _007_A03V2V2_F_Eca,
      name: "_007_A03V2V2_F_Eca",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    },
    {
      pdfurl: _003H03VVH2_F_Eca,
      name: "_003H03VVH2_F_Eca",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    },
    {
      pdfurl: _005_6181Y_Eca,
      name: "_005_6181Y_Eca",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    },
  ];

  useEffect(() => {
    processPDFs(pdfs, setTextContent);
  }, []);

  useEffect(() => {
    // Sadece arama sorgusu boş olmadığında sonuçları filtreleyin
    if (searchQuery.trim() !== "") {
      const filtered = textContent.filter((item) =>
        item.text.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredContent(filtered);
    } else {
      setFilteredContent([]); // Sorgu boşsa sonuçları temizle
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
                  <DocumentCard key={item.name} member={item} />
                ))
              : searchQuery.trim() !== "" && <p>No results found.</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DopSearch;
