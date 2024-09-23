export default function DeleteButton({ text, onClick }) {
  return (
    <button className="text-red-500" onClick={onClick}>
      {text}
    </button>
  );
}
