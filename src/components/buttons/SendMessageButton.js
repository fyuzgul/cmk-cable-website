import SendMessageSVG from "../svgs/SendMessageSVG";
export default function SendMessageButton({ text, onClick }) {
  return (
    <button
      type="submit"
      className="mt-8 flex items-center justify-center text-sm w-full rounded-md px-6 py-3 bg-red-600 hover:bg-red-700 text-white"
      onClick={onClick}
    >
      <SendMessageSVG />
      {text}
    </button>
  );
}
