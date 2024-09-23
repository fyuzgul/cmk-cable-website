import axios from "axios";

const API_BASE_URL = "http://localhost:5972/api/certificates";

const getAllCertificates = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching certificates:", error);
    throw error;
  }
};

const getCertificateById = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching certificate with ID ${id}:`, error);
    throw error;
  }
};

const createCertificate = async (certificate) => {
  try {
    const formData = new FormData();
    formData.append("Name", certificate.Name);
    formData.append("TypeId", certificate.TypeId);
    formData.append("ProductCertificates", certificate.ProductCertificates);

    // Backend form data field for Image and FileContent should be "Image" and "FileContent"
    if (certificate.Image) formData.append("Image", certificate.Image);
    if (certificate.FileContent)
      formData.append("FileContent", certificate.FileContent);

    const response = await axios.post(`${API_BASE_URL}/create`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error creating certificate:", error);
    throw error;
  }
};

const updateCertificate = async (formData) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/update`, formData);
    return response;
  } catch (err) {
    console.error(err);
  }
};

const deleteCertificate = async (id) => {
  try {
    await axios.delete(`${API_BASE_URL}/${id}`);
  } catch (error) {
    console.error(`Error deleting certificate with ID ${id}:`, error);
    throw error;
  }
};

const getCertificatesByTypeId = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/byType/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching certificates by TypeId ${id}:`, error);
    throw error;
  }
};

const categorizeCertificatesByType = (certificates, certificateTypeMap) => {
  return certificates.reduce((categories, certificate) => {
    const typeName = certificateTypeMap[certificate.typeId] || "Unknown";
    if (!categories[typeName]) {
      categories[typeName] = [];
    }
    categories[typeName].push(certificate);
    return categories;
  }, {});
};

const CertificateService = {
  getCertificatesByTypeId,
  getAllCertificates,
  getCertificateById,
  createCertificate,
  updateCertificate,
  deleteCertificate,
  categorizeCertificatesByType,
};

export default CertificateService;
