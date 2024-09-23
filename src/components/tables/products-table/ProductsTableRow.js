import { useNavigate } from "react-router-dom";
import DetailButton from "../../buttons/DetailButton";

export default function ProductsTableRow({ product, category }) {
  const navigate = useNavigate();
  const handleLearnMoreClick = () => {
    navigate(`/admin/product-manager/${product.id}`);
  };

  return (
    <tr key={product.id} className="border-b border-dashed last:border-b-0">
      <td className="p-3 pl-0 w-1/4">
        <div className="flex items-center">
          <div className="relative inline-block shrink-0 rounded-2xl me-3">
            <img
              src={`data:image/jpeg;base64,${product.imageData}`}
              className="w-[50px] h-[50px] inline-block shrink-0 rounded-2xl"
              alt={product.id}
            />
          </div>
          <div className="flex flex-col justify-start">
            <button
              onClick={handleLearnMoreClick}
              className="text-gray-500 inline-flex items-center md:mb-2 lg:mb-0"
            >
              {product.type}
            </button>
          </div>
        </div>
      </td>
      <td className="p-3 pr-0 w-1/4 text-end">
        <span className="font-semibold text-light-inverse text-md/normal">
          {product.usageLocations}
        </span>
      </td>
      <td className="p-3 pr-0 w-1/4 text-end">
        <span className="text-center align-baseline inline-flex px-2 py-1 mr-auto items-center font-semibold text-base/none text-success bg-success-light rounded-lg">
          {category.name}
        </span>
      </td>
      <td className="p-3 pr-0 w-1/12 text-end align-middle">
        <DetailButton onClick={handleLearnMoreClick} />
      </td>
    </tr>
  );
}
