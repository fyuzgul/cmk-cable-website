export default function SelectLanguageMenuItemButton({ onClick, language }) {
  return (
    <button
      className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
      onClick={onClick}
    >
      <span className={`fi fi-${language.code} mr-3`} />
      {language.name}
    </button>
  );
}
