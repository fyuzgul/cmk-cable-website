import axios from "axios";

const API_BASE_URL = "http://localhost:5972/api/contactinformations";

const getAllContactInformations = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching Contact Informations:", error);
    throw error;
  }
};

const getContactInformation = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching Contact Information ${id}:`, error);
    throw error;
  }
};

const ContactInformationsService = {
  getAllContactInformations,
  getContactInformation,
};

export default ContactInformationsService;
