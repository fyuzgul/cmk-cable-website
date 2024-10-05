import classNames from "classnames";

export default function CmkCable({ brandColor, brand, textColor, text }) {
  return (
    <>
      <span
        className={classNames({ "text-primary": brandColor === "primary" })}
      >
        {brand}
      </span>{" "}
      <span
        className={classNames({
          "text-green-900": textColor === "green",
          "text-white": textColor === "white",
          "text-red-900": textColor === "red",
          "text-gray-700": textColor === "gray",
          "text-primary": textColor === "primary",
        })}
      >
        {text}
      </span>
    </>
  );
}
