import React, { useState } from "react";
import AddAttributeModal from "../../modals/AddAttributeModal";
import EditStandartForm from "../../forms/EditStandartForm";
import EditButton from "../../buttons/EditButton";

export default function StandartsTableRow({ standart }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleUpdate = (id) => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <tr key={standart.id} className="border-b border-dashed last:border-b-0">
        <td className="p-3 pr-0 w-1/4 text-end">
          <span className="text-center align-baseline inline-flex px-2 py-1 mr-auto items-center font-semibold text-base/none text-success bg-success-light rounded-lg">
            {standart.name}
          </span>
        </td>
        <td className="p-3 w-1/4 text-end">
          <EditButton onClick={() => handleUpdate(standart.id)} />
        </td>
      </tr>

      {isModalOpen && (
        <AddAttributeModal onClose={closeModal}>
          <EditStandartForm id={standart.id} />
        </AddAttributeModal>
      )}
    </>
  );
}
