import { useState, useEffect } from "react";
import ProductsService from "../services/ProductsService";

const useFetchProductById = (id) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [product, setProduct] = useState({
    id: id,
    type: "",
    usageLocations: "",
    categoryId: "",
    image: null,
    imagePreview: null,
    detailImage: null,
    detailImagePreview: null,
  });

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productData = await ProductsService.getProductById(id);
        setProduct({
          id: productData.id,
          type: productData.type,
          usageLocations: productData.usageLocations,
          categoryId: productData.categoryId,
          image: productData.imageData || null,
          imagePreview: productData.imageData
            ? `data:image/jpeg;base64,${productData.imageData}`
            : null,
          detailImage: productData.detailImageData || null,
          detailImagePreview: productData.detailImageData
            ? `data:image/jpeg;base64,${productData.detailImageData}`
            : null,
        });
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);
  return { product, loading, error };
};

export default useFetchProductById;
