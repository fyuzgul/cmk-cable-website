export default function UpdateButton({ onClick, text }) {
  return (
    <button
      type="submit"
      className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 text-sm"
    >
      {text}
    </button>
  );
}
