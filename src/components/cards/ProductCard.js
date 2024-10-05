import SmallTitle from "../titles/SmallTitle";
import { useNavigate } from "react-router-dom";

export default function ProductCard({ product, categoryId }) {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/products/${categoryId}/${product.id}`);
    window.scrollTo(0, 0);
  };

  return (
    <article
      className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-20 max-w-sm mx-auto mt-10 cursor-pointer"
      onClick={handleCardClick}
    >
      <img
        src={`data:image/jpeg;base64,${product.imageData}`}
        alt="Cable"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
      <SmallTitle color="white">{product.type}</SmallTitle>
      <div className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-white">
        Ürün Detayı
      </div>
    </article>
  );
}
