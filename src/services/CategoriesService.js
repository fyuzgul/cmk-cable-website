import axios from "axios";

const API_BASE_URL = "http://localhost:5972/api/categories";

const getAllCategories = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error;
  }
};

const getCategoryById = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching category with ID ${id}:`, error);
    throw error;
  }
};

const createCategory = async (category) => {
  try {
    const formData = new FormData();
    formData.append("Name", category.Name);
    if (category.Image) formData.append("Image", category.Image);

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

const updateCategory = async (formData) => {
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

const deleteCategory = async (id) => {
  try {
    await axios.delete(`${API_BASE_URL}/delete/${id}`);
  } catch (error) {
    console.error(`Error deleting category with ID ${id}:`, error);
    throw error;
  }
};

const CategoriesService = {
  getAllCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
};

export default CategoriesService;
