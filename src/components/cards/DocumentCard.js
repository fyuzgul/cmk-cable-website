import React from "react";
import { SmallTitle } from "../titles";

const DocumentCard = ({ certificate }) => {
  const openPdfInNewTab = () => {
    if (!certificate.fileContentData) {
      console.error("File content data is missing.");
      return;
    }

    const pdfBlob = new Blob(
      [
        Uint8Array.from(atob(certificate.fileContentData), (c) =>
          c.charCodeAt(0)
        ),
      ],
      {
        type: "application/pdf",
      }
    );

    const pdfUrl = URL.createObjectURL(pdfBlob);
    window.open(pdfUrl, "_blank");
  };

  return (
    <div
      onClick={openPdfInNewTab}
      className="relative bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 cursor-pointer"
      style={{ width: "250px", height: "350px" }}
    >
      {certificate.imageData ? (
        <img
          src={`data:image/jpeg;base64,${certificate.imageData}`}
          alt={certificate.name}
          className="w-full h-full object-cover"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-gray-200">
          <p>No image available</p>
        </div>
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-80"></div>

      <div className="absolute bottom-0 left-0 w-full p-4 flex items-center justify-center">
        <SmallTitle color="white">
          {certificate.products
            ? certificate.products.map((product) => product.type).join(" / ")
            : "No products available"}
        </SmallTitle>
      </div>
    </div>
  );
};

export default DocumentCard;
