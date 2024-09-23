import axios from "axios";

const API_BASE_URL = "http://localhost:5972/api/products";

const getAllProducts = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};
const getProductById = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching products by category ${id}:`, error);
    throw error;
  }
};

const getProductsByCategory = async (categoryId) => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/byCategory/${categoryId}`
    );
    return response.data;
  } catch (error) {
    console.error(`Error fetching products by category ${categoryId}:`, error);
    throw error;
  }
};

const getProductsByStandart = async (standartId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/byStandart`, {
      params: { id: standartId },
    });
    return response.data;
  } catch (error) {
    console.error(`Error fetching products by standart ${standartId}:`, error);
    throw error;
  }
};

const getProductsByStructure = async (structureId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/byStructure`, {
      params: { id: structureId },
    });
    return response.data;
  } catch (error) {
    console.error(
      `Error fetching products by structure ${structureId}:`,
      error
    );
    throw error;
  }
};

const getProductsByCertificate = async (certificateId) => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/byCertificate/${certificateId}`
    );
    return response.data;
  } catch (error) {
    console.error(
      `Error fetching products by certificate ${certificateId}:`,
      error
    );
    throw error;
  }
};

const createProduct = async (product) => {
  try {
    const formData = new FormData();
    formData.append("Type", product.Type);
    formData.append("UsageLocations", product.UsageLocations);
    formData.append("CategoryId", product.CategoryId);
    if (product.Image) formData.append("Image", product.Image);
    if (product.DetailImage)
      formData.append("DetailImage", product.DetailImage);

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

const updateProduct = async (formData) => {
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

const deleteProduct = async (id) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/delete/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error deleting product with ID ${id}:`, error);
    throw error;
  }
};

const ProductsService = {
  getAllProducts,
  getProductsByCategory,
  getProductsByStandart,
  getProductsByStructure,
  getProductsByCertificate,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductById,
};

export default ProductsService;
