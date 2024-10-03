import { useNavigate } from "react-router-dom";
import { SmallTitle, XSmallTitle } from "../titles";
import CustomPTag from "../paragraphs/CustomPTag";
import RightDirectionSVG from "../svgs/RightDirectionSVG";

export default function CategoryCard({ category, products }) {
  const navigate = useNavigate();

  const handleLearnMoreClick = () => {
    navigate(`/products/${category.id}`);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <div className="p-4 max-w-md">
        <div className="h-full border-2 border-grayLight border-opacity-60 rounded-lg overflow-hidden">
          <img
            className="h-48 w-full object-cover object-center"
            src={`data:image/jpeg;base64,${category.imageData}`}
            alt="category"
          />
          <div className="p-6">
            <XSmallTitle color="red">{category.name}</XSmallTitle>
            <SmallTitle color="black">Products</SmallTitle>
            <div className="leading-relaxed mb-3">
              {products.length > 0 ? (
                products.map((product, index) => (
                  <span key={product.id}>
                    {product.type}
                    {index < products.length - 1 && ", "}
                  </span>
                ))
              ) : (
                <CustomPTag>No products available for this category</CustomPTag>
              )}
            </div>
            <div className="flex items-center flex-wrap">
              <button
                onClick={handleLearnMoreClick}
                className="text-gray-500 inline-flex items-center md:mb-2 lg:mb-0"
              >
                Learn More
                <RightDirectionSVG />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
