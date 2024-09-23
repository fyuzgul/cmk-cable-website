import SearchBar from "../SearchBar";
import ModalButton from "../buttons/ModalButton";
import AddAttributeModal from "../modals/AddAttributeModal";

export default function ListHeader({ text, form }) {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
      <SearchBar />
      <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
        <ModalButton
          ModalComponent={AddAttributeModal}
          buttonText={text}
          formContent={form}
        />
      </div>
    </div>
  );
}
