import HamburgerSVG from "../svgs/HamburgerSVG";
export default function HamburgerButton({
  onClick,
  ariaControls,
  ariaExpanded,
}) {
  return (
    <button
      className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      onClick={onClick}
      aria-controls={ariaControls}
      aria-expanded={ariaExpanded}
    >
      <HamburgerSVG className="w-6 h-6" />
    </button>
  );
}
