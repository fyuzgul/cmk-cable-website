import { useParams } from "react-router-dom";
import useFetchProductByCategory from "../../hooks/useFetchProductByCategory";
import ProductCard from "../cards/ProductCard";
import Header from "../../components/sections/VideoThumbnail";
import img from "../../assets/header-images/kategori.png";
import { useLoading } from "../../contexts/LoadingContext";
import useFetchCategoryById from "../../hooks/useFetchCategoryById";

export default function ProductsGrid() {
  const { categoryId } = useParams();
  const { category } = useFetchCategoryById(categoryId);
  const { products } = useFetchProductByCategory(categoryId);
  const { loading } = useLoading();
  if (loading) {
    return null;
  }

  return (
    <>
      <Header img={img} title={category.name} />

      <div className="relative mb-48 mt-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3 max-w-screen-xl mx-auto">
          {products.map((product) => (
            <div className="flex justify-center" key={product.id}>
              <div className="w-2/3 sm:w-full h-full">
                <ProductCard product={product} categoryId={categoryId} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
