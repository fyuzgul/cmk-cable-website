import classNames from "classnames";

export default function SmallTitle({ children, color, role }) {
  const titleClasses = classNames("text-lg md:text-xl font-bold z-10", {
    relative: role === "OurValuesTitle",
    "text-gray-300": color === "gray",
    "text-white": color === "white",
    "text-green-500": color === "green",
    "text-red-500": color === "red",
    "text-primary": color === "primary",
  });

  return (
    <h3 className={titleClasses}>
      {children}
      {role === "OurValuesTitle" && (
        <span className="block w-20 h-1 bg-red-500 absolute top-full left-1/2 transform -translate-x-1/2 mt-2"></span>
      )}
    </h3>
  );
}
