import axios from "axios";

const API_BASE_URL = "http://localhost:5972/api/aboutusitems";

const getAllAboutUsItems = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching About Us Items:", error);
    throw error;
  }
};

const AboutUsItemsService = {
  getAllAboutUsItems,
};

export default AboutUsItemsService;
