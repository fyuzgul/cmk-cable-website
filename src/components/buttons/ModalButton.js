import { useState } from "react";

const ModalButton = ({
  ModalComponent,
  buttonText,
  icon,
  formContent,
  ...modalProps
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <button
        type="button"
        onClick={openModal}
        className="flex items-center justify-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        {icon && <span className="mr-2">{icon}</span>}
        {buttonText}
      </button>
      {isModalOpen && (
        <ModalComponent
          isOpen={isModalOpen}
          onClose={closeModal}
          {...modalProps}
        >
          {formContent}
        </ModalComponent>
      )}
    </>
  );
};

export default ModalButton;
