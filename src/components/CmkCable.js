import classNames from "classnames";

export default function CmkCable({ brandColor, brand, textColor, text }) {
  return (
    <>
      <span className={classNames({ "text-red-900": brandColor === "red" })}>
        {brand}
      </span>{" "}
      <span
        className={classNames({
          "text-green-900": textColor === "green",
          "text-white": textColor === "white",
          "text-red-900": textColor === "red",
          "text-gray-700": textColor === "gray",
        })}
      >
        {text}
      </span>
    </>
  );
}
