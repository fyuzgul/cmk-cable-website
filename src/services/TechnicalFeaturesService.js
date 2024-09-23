import axios from "axios";

const API_BASE_URL = "http://localhost:5972/api/technicalfeatures";

const getAllFeaturesByProductId = async (productId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/byProduct/${productId}`);
    return response.data;
  } catch (error) {
    console.error(
      `Error fetching features for product ID ${productId}:`,
      error
    );
    throw error;
  }
};

const getAllFeatures = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching all features:", error);
    throw error;
  }
};

const createTechnicalFeature = async (technicalFeature) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/create`,
      technicalFeature
    );
    return response.data;
  } catch (error) {
    console.error("Error creating technical feature:", error);
    throw error;
  }
};

const updateTechnicalFeature = async (technicalFeature) => {
  try {
    const response = await axios.put(
      `${API_BASE_URL}/update`,
      technicalFeature
    );
    return response.data;
  } catch (error) {
    console.error(
      `Error updating technical feature with ID ${technicalFeature.id}:`,
      error
    );
    throw error;
  }
};

const deleteTechnicalFeature = async (id) => {
  try {
    await axios.delete(`${API_BASE_URL}/delete/${id}`);
  } catch (error) {
    console.error(`Error deleting technical feature with ID ${id}:`, error);
    throw error;
  }
};

const TechnicalFeaturesService = {
  getAllFeaturesByProductId,
  getAllFeatures,
  createTechnicalFeature,
  updateTechnicalFeature,
  deleteTechnicalFeature,
};

export default TechnicalFeaturesService;
