import axios from "axios";

const API_BASE_URL = "http://localhost:5972/api/certificatetypes";

const getAllCertificateTypes = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};
const getCertificateType = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching products by category ${id}:`, error);
    throw error;
  }
};

const createCertificateType = async (certificateType) => {
  try {
    const formData = new FormData();
    formData.append("Name", certificateType.Name);
    if (certificateType.Image) formData.append("Image", certificateType.Image);

    const response = await axios.post(`${API_BASE_URL}/create`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error creating product:", error);
    throw error;
  }
};

const deleteCertificateType = async (id) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/delete/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error deleting product with ID ${id}:`, error);
    throw error;
  }
};

const updateCertificateType = async (formData) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/update`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    console.error(`Error updating product:`, error);
    throw error;
  }
};

const CertificateTypesService = {
  createCertificateType,
  getAllCertificateTypes,
  getCertificateType,
  deleteCertificateType,
  updateCertificateType,
};

export default CertificateTypesService;
