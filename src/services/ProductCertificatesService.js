import axios from "axios";

const API_BASE_URL = "http://localhost:5972/api/productCertificates";

const getCertificatesByProductId = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching category with ID ${id}:`, error);
    throw error;
  }
};

const deleteProductCertificate = async (id) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/delete/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error deleting product with ID ${id}:`, error);
    throw error;
  }
};

const createProductCertificate = async (productId, certificateId) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/create`, {
      productId,
      certificateId,
    });
    return response.data;
  } catch (error) {
    console.error(`Error creating product certificate:`, error);
    throw error;
  }
};

const ProductCertificatesService = {
  getCertificatesByProductId,
  deleteProductCertificate,
  createProductCertificate,
};
export default ProductCertificatesService;
