import RightDirectionSVG from "../../svgs/RightDirectionSVG";
import { useNavigate } from "react-router-dom";

export default function ProductsTableRow({ certificate }) {
  const navigate = useNavigate();
  const handleLearnMoreClick = () => {
    navigate(`/admin/certificate-manager/${certificate.id}`);
  };

  return (
    <tr key={certificate.id} className="border-b border-dashed last:border-b-0">
      <td className="p-3 pl-0 w-1/4">
        <div className="flex items-center">
          <div className="relative inline-block shrink-0 rounded-2xl me-3">
            <img
              src={`data:image/jpeg;base64,${certificate.imageData}`}
              className="w-[50px] h-[50px] inline-block shrink-0 rounded-2xl"
              alt={certificate.id}
            />
          </div>
        </div>
      </td>

      <td className="p-3 pr-0 w-1/4 text-end">
        <span className="text-center align-baseline inline-flex px-2 py-1 mr-auto items-center font-semibold text-base/none text-success bg-success-light rounded-lg">
          {certificate.name}
        </span>
      </td>
      <td className="p-3 pr-0 w-1/4 text-end">
        <span className="text-center align-baseline inline-flex px-2 py-1 mr-auto items-center font-semibold text-base/none text-success bg-success-light rounded-lg">
          {certificate.type}
        </span>
      </td>
      <td className="p-3 pr-0 w-1/12 text-end align-middle">
        <button
          onClick={handleLearnMoreClick}
          className="text-gray-500 inline-flex items-center md:mb-2 lg:mb-0"
        >
          <RightDirectionSVG />
        </button>
      </td>
    </tr>
  );
}
