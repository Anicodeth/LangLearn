import axios from "axios";

const apiUrl = "https://lang-learn-api.vercel.app/api/v1/languages";

export const getLanguages = async () => {
  try {
    const response = await axios.get(`${apiUrl}/`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getLanguage = async (id: string) => {
  try {
    const response = await axios.get(`${apiUrl}/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const addLanguage = async (data: any) => {
  try {
    const response = await axios.post(`${apiUrl}/`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};