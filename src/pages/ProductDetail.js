import { useParams, Link } from "react-router-dom";
import useFetchProductDetails from "../hooks/useFetchProductDetails";

export default function ProductDetail() {
  const { categoryId, productId } = useParams();
  const { product, loading, error, categories, certificates } =
    useFetchProductDetails(productId);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!product) {
    return <p>Product not found.</p>;
  }

  return (
    <div className="mt-24">
      <div className="max-w-screen-lg mx-auto p-8 grid grid-cols-4 gap-8">
        <aside className="col-span-1 bg-gray-100 p-4 rounded-md">
          <h2 className="text-lg font-bold mb-4">Categories</h2>
          <ul>
            {categories.length > 0 ? (
              categories.map((category) => (
                <li key={category.id} className="mb-2">
                  <Link
                    to={`/products/${category.id}`}
                    className={`text-blue-500 ${
                      category.id === Number(categoryId) ? "font-bold" : ""
                    }`}
                  >
                    {category.name}
                  </Link>
                </li>
              ))
            ) : (
              <p>No categories available.</p>
            )}
          </ul>
        </aside>

        <section className="col-span-3">
          <h1 className="text-2xl font-bold">{product.name}</h1>
          {product.detailImageData && (
            <img
              src={`data:image/jpeg;base64,${product.detailImageData}`}
              alt={product.name}
              className="w-full h-auto object-cover mt-4"
            />
          )}
          <p className="mt-4 text-lg">{product.type}</p>
          <div className="mt-4">
            <h2 className="text-xl font-bold">Certificates</h2>
            {certificates.length > 0 ? (
              certificates.map((certificate) => (
                <div key={certificate.id} className="mb-2">
                  <p>Certificate ID: {certificate.id}</p>
                  <p>Certificate Name: {certificate.name}</p>
                </div>
              ))
            ) : (
              <p>No certificates available for this product.</p>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
