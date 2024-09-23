import axios from "axios";

const API_BASE_URL = "http://localhost:5972/api/standarts";

const getAllStandards = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching standards:", error);
    throw error;
  }
};

const getStandardsByProductId = async (productId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/byProduct/${productId}`);
    return response.data;
  } catch (error) {
    console.error(
      `Error fetching standards for product ID ${productId}:`,
      error
    );
    throw error;
  }
};
const getStandardById = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching standards for product ID ${id}:`, error);
    throw error;
  }
};

const getStandardsByCertificateId = async (certificateId) => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/byCertificate/${certificateId}`
    );
    return response.data;
  } catch (error) {
    console.error(
      `Error fetching standards for certificate ID ${certificateId}:`,
      error
    );
    throw error;
  }
};

const createStandards = async (standards) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/create`, standards);
    return response.data;
  } catch (error) {
    console.error("Error creating standards:", error);
    throw error;
  }
};

const updateStandards = async (standards) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/update`, standards);
    return response.data;
  } catch (error) {
    console.error(`Error updating standards with ID ${standards.id}:`, error);
    throw error;
  }
};

const deleteStandards = async (id) => {
  try {
    await axios.delete(`${API_BASE_URL}/delete/${id}`);
  } catch (error) {
    console.error(`Error deleting standards with ID ${id}:`, error);
    throw error;
  }
};

const StandartsService = {
  getAllStandards,
  getStandardsByProductId,
  getStandardsByCertificateId,
  createStandards,
  updateStandards,
  deleteStandards,
  getStandardById,
};

export default StandartsService;
