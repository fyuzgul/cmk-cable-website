import classNames from "classnames";

export default function MediumTitle({ children, color }) {
  const titleClasses = classNames(
    "text-xl md:text-2xl font-bold pt-2 md:pt-2 z-10 mb-2",
    {
      "text-red-500": color === "red",
      "text-primary ": color === "primary",
      "text-blue-500": color === "blue",
      "text-green-500": color === "green",
      "text-gray-800": color === "gray",
      "text-white": color === "white",
    }
  );

  return <h2 className={titleClasses}>{children}</h2>;
}
