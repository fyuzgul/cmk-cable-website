import axios from "axios";

const API_BASE_URL = "http://localhost:5972/api/structures";

const getAllStructures = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching structures:", error);
    throw error;
  }
};

const getStructureById = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching structure with ID ${id}:`, error);
    throw error;
  }
};

const getStructuresByProductId = async (productId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/byProduct/${productId}`);
    return response.data;
  } catch (error) {
    console.error(
      `Error fetching structures for product ID ${productId}:`,
      error
    );
    throw error;
  }
};

const createStructure = async (structure) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/create`, structure);
    return response.data;
  } catch (error) {
    console.error("Error creating structure:", error);
    throw error;
  }
};

const updateStructure = async (structure) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/update`, structure);
    return response.data;
  } catch (error) {
    console.error(`Error updating structure with ID ${structure.id}:`, error);
    throw error;
  }
};

const deleteStructure = async (id) => {
  try {
    await axios.delete(`${API_BASE_URL}/delete/${id}`);
  } catch (error) {
    console.error(`Error deleting structure with ID ${id}:`, error);
    throw error;
  }
};

const StructureService = {
  getAllStructures,
  getStructureById,
  getStructuresByProductId,
  createStructure,
  updateStructure,
  deleteStructure,
};

export default StructureService;
