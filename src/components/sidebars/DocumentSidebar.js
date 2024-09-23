import React from "react";
import MediumTitle from "../titles/MediumTitle";

const DocumentSidebar = ({ documents, selectedDocument, onSelectDocument }) => {
  return (
    <div className="md:w-1/4 w-full bg-white shadow-md p-6">
      <MediumTitle color="green">Documents</MediumTitle>
      <ul className="space-y-2">
        {Object.keys(documents).map((document) => (
          <li
            key={document}
            className={`cursor-pointer hover:bg-gray-200 rounded-md p-2 truncate ${
              selectedDocument === document ? "bg-gray-200 font-bold" : ""
            }`}
            onClick={() => onSelectDocument(document)}
          >
            {document}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DocumentSidebar;
