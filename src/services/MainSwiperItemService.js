import axios from "axios";

const API_BASE_URL = "http://localhost:5972/api/mainswiperitems";

const getAllMainSwiperItems = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error;
  }
};

const createMainSwiperItem = async (mainSwiperItem) => {
  try {
    const formData = new FormData();
    formData.append("Description", mainSwiperItem.Description);
    if (mainSwiperItem.Video) formData.append("Image", mainSwiperItem.Video);

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

const updateMainSwiperItem = async (formData) => {
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

const deleteMainSwiperItem = async (id) => {
  try {
    await axios.delete(`${API_BASE_URL}/delete/${id}`);
  } catch (error) {
    console.error(`Error deleting category with ID ${id}:`, error);
    throw error;
  }
};

const MainSwiperItemService = {
  getAllMainSwiperItems,
  createMainSwiperItem,
  updateMainSwiperItem,
  deleteMainSwiperItem,
};

export default MainSwiperItemService;
