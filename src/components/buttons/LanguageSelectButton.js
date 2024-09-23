import DownDirectionSVG from "../svgs/DownDirectionSVG";
export default function LanguageSelectButton({ onClick, selectedLanguage }) {
  return (
    <button
      className="inline-flex items-center justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none ml-4"
      onClick={onClick}
    >
      <span className={`fi fi-${selectedLanguage.code} mr-2`} />
      {selectedLanguage.name}
      <DownDirectionSVG className="ml-2" />
    </button>
  );
}
