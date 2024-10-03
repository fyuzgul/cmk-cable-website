import { useParams, Link } from "react-router-dom";
import RightDirectionSVG from "../components/svgs/RightDirectionSVG";
import ClientProductDetailTabSection from "../components/sections/ClientProductDetailTabSection";
import useFetchAllCategories from "../hooks/useFetchAllCategories";
import useFetchProductById from "../hooks/useFetchProductById";
import useFetchCategoryById from "../hooks/useFetchCategoryById";
import { useLoading } from "../contexts/LoadingContext";
import img from "../assets/header-images/kategori.png";
import Header from "../components/sections/VideoThumbnail";
import { MediumTitle } from "../components/titles";
import { useNavigate } from "react-router-dom";

export default function ProductDetail() {
  const { categoryId, productId } = useParams();
  const { categories, error } = useFetchAllCategories();
  const { product } = useFetchProductById(productId);
  const { loading } = useLoading();
  const { category } = useFetchCategoryById(categoryId);
  const navigate = useNavigate();

  const handleClick = (event) => {
    window.scrollTo(0, 0);
    navigate(`/products/${category.id}`);
    event.preventDefault();
  };
  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  return (
    <>
      <Header img={img} title={category.name + " / " + product.type} />
      <div className="mt-20 pb-20">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {!loading && (
            <aside className="bg-white shadow-md p-6 rounded-md w-full md:w-72">
              <ul className="space-y-2">
                {categories.map((category) => (
                  <li
                    key={category.id}
                    className={`border border-gray-300 rounded-md p-3 flex justify-between items-center transition-colors 
            ${
              category.id === Number(categoryId)
                ? "bg-red-600 text-white font-bold"
                : "bg-white text-black hover:bg-red-600 hover:text-white"
            }`}
                  >
                    <Link
                      onClick={handleClick}
                      className="w-full h-full flex items-center justify-between"
                    >
                      {category.name}
                      {category.id === Number(categoryId) && (
                        <RightDirectionSVG />
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </aside>
          )}

          <section className="md:col-span-3 md:pl-20">
            {!loading && product.detailImage && (
              <>
                <MediumTitle>{product.type}</MediumTitle>

                <img
                  src={`data:image/jpeg;base64,${product.detailImage}`}
                  alt={product.name}
                  className="w-full h-auto object-cover mt-4 rounded-md shadow"
                />
              </>
            )}

            <ClientProductDetailTabSection product={product} />
          </section>
        </div>
      </div>
    </>
  );
}
