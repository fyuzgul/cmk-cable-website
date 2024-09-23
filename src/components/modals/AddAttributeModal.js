const AddAttributeModal = ({ onClose, children }) => {
  return (
    <div className="fixed inset-[-12px] bg-gray-500 bg-opacity-75 transition-opacity z-20">
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg w-full max-w-lg relative">
          <button
            onClick={onClose}
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 z-10"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          {children}
        </div>
      </div>
    </div>
  );
};

export default AddAttributeModal;
