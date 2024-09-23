import React, { useState } from "react";
import AddAttributeModal from "../../modals/AddAttributeModal";
import EditCertificateTypForm from "../../forms/EditCertificateTypeForm";
import EditButton from "../../buttons/EditButton";

export default function CertificateTypeTableRow({ certificateType }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleUpdate = (id) => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <tr
        key={certificateType.id}
        className="border-b border-dashed last:border-b-0"
      >
        <td className="p-3 pl-0 w-1/4">
          <div className="flex items-center">
            <div className="relative inline-block shrink-0 rounded-2xl me-3">
              <img
                src={`data:image/jpeg;base64,${certificateType.imageData}`}
                className="w-[50px] h-[50px] inline-block shrink-0 rounded-2xl"
                alt={certificateType.id}
              />
            </div>
            <div className="flex flex-col justify-start">
              {certificateType.name}
            </div>
          </div>
        </td>
        <td className="p-3 w-1/4 text-end">
          <EditButton onClick={() => handleUpdate(certificateType.id)} />
        </td>
      </tr>

      {isModalOpen && (
        <AddAttributeModal onClose={closeModal}>
          <EditCertificateTypForm id={certificateType.id} />
        </AddAttributeModal>
      )}
    </>
  );
}
