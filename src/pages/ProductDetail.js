import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import productService from "../services/ProductsService";
import categoriesService from "../services/CategoriesService";
import productCertificatesService from "../services/ProductCertificatesService";
import certificatesService from "../services/CertificatesService";

export default function ProductDetail() {
  const { categoryId, productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [categories, setCategories] = useState([]);
  const [certificates, setCertificates] = useState([]);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        setLoading(true);

        const [productData, categoriesData, productCertificates] =
          await Promise.all([
            productService.getProductById(productId),
            categoriesService.getAllCategories(),
            productCertificatesService.getCertificatesByProductId(productId),
          ]);

        console.log("Product Certificates Data:", productCertificates);

        const certificateIds = productCertificates
          .map((pc) => pc.certificatesId)
          .filter((id) => id);

        console.log("Filtered Certificate IDs:", certificateIds);

        if (certificateIds.length > 0) {
          const certificatesData = await Promise.all(
            certificateIds.map((id) =>
              certificatesService.getCertificateById(id)
            )
          );

          console.log("Fetched Certificates Data:", certificatesData);

          setCertificates(certificatesData);
        } else {
          console.log("No valid certificate IDs found.");
        }

        setProduct(productData);
        setCategories(categoriesData);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Failed to fetch product details or categories.");
      } finally {
        setLoading(false);
      }
    };

    fetchProductDetails();
  }, [categoryId, productId]);

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
