import RightDirectionSVG from "../svgs/RightDirectionSVG";
export default function DetailButton({ onClick }) {
  return (
    <button
      className="text-gray-500 inline-flex items-center md:mb-2 lg:mb-0"
      onClick={onClick}
    >
      <RightDirectionSVG />
    </button>
  );
}
