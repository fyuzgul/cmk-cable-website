import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import productService from "../../services/ProductsService";
import ProductCard from "../cards/ProductCard";
import Loader from "../Loader";

export default function ProductsGrid() {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const data = await productService.getProductsByCategory(categoryId);
        setProducts(data);
      } catch (err) {
        setError("Failed to fetch products.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [categoryId]);

  return (
    <div className="mt-24">
      {loading && <Loader />}
      {error && <p className="text-red-500">{error}</p>}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-screen-xl mx-auto">
        {products.map((product) => (
          <div className="flex justify-center" key={product.id}>
            <div className="w-2/3 sm:w-full h-full">
              <ProductCard product={product} categoryId={categoryId} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
