function DownDirectionSVG({ onClick }) {
  return (
    <svg
      onClick={onClick}
      className="-mr-1 ml-2 h-5 w-5"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M10.293 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L10 12.586l3.293-3.293a1 1 0 011.414 1.414l-4 4z"
        clipRule="evenodd"
      />
    </svg>
  );
}
export default DownDirectionSVG;
