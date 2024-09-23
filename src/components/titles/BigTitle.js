import classNames from "classnames";

export default function BigTitle({ children, color }) {
  const titleClasses = classNames(
    "text-3xl md:text-4xl font-bold pt-3 md:pt-3 z-10 mb-4",
    {
      "text-red-500": color === "red",
      "text-blue-500": color === "blue",
      "text-green-500": color === "green",
    }
  );

  return <h1 className={titleClasses}>{children}</h1>;
}
