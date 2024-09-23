export default function ListTemplate({ children }) {
  return (
    <table className="table-auto w-[80%] mx-auto my-0 align-middle text-dark border-neutral-200">
      <tbody>{children}</tbody>
    </table>
  );
}
