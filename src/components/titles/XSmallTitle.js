import classNames from "classnames";

export default function SmallTitle({ children, color, role }) {
  const titleClasses = classNames(
    "tracking-widest text-xs title-font font-medium mb-1",
    {
      relative: role === "OurValuesTitle",
      "text-gray-400 ": color === "gray",
      "text-white": color === "white",
      "text-green-500": color === "green",
      "text-red-500": color === "red",
    }
  );

  return <h4 className={titleClasses}>{children}</h4>;
}
