export default function UpdateButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="text-blue-600 hover:text-blue-800 font-semibold px-4 py-2 mr-2 border border-blue-600 rounded-lg"
    >
      Düzenle
    </button>
  );
}
