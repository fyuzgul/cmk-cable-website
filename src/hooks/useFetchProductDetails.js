import { useState, useEffect } from "react";
import ProductsService from "../services/ProductsService";
import CategoriesService from "../services/CategoriesService";
import ProductCertificatesService from "../services/ProductCertificatesService";
import CertificatesService from "../services/CertificatesService";

const useFetchProductDetails = (productId) => {
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
            ProductsService.getProductById(productId),
            CategoriesService.getAllCategories(),
            ProductCertificatesService.getCertificatesByProductId(productId),
          ]);

        const certificateIds = productCertificates
          .map((pc) => pc.certificatesId)
          .filter((id) => id);

        if (certificateIds.length > 0) {
          const certificatesData = await Promise.all(
            certificateIds.map((id) =>
              CertificatesService.getCertificateById(id)
            )
          );
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
  }, [productId]);

  return { product, loading, error, categories, certificates };
};

export default useFetchProductDetails;
