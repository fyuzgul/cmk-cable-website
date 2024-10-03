import { useEffect, useState } from "react";
import ProductsService from "../services/ProductsService";
import { useLoading } from "../contexts/LoadingContext";

const useFetchCertificatesAndProducts = (certificateId) => {
  const [products, setProducts] = useState([]);
  const { setLoading } = useLoading();
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      if (certificateId) {
        try {
          const data = await ProductsService.getProductsByCertificate(
            certificateId
          );
          setProducts(data);
        } catch (err) {
          setError("Failed to fetch products by certificate.");
        }
      }
    };

    fetchProducts();
  }, [certificateId, setLoading]);

  return { products, error };
};

export default useFetchCertificatesAndProducts;
