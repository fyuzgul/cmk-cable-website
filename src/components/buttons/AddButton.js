export default function AddButton({ text, onClick, type, disabled }) {
  return (
    <button
      className="text-blue-500"
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {text}
    </button>
  );
}
