import axios from "axios";

//const apiUrl = "https://lang-learn-api.vercel.app/api/v1/languages";
const apiUrl = "http://localhost:4000/api/v1/languages";

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

export const updateLanguage = async (id: string, data: any) => {
  try {
    const response = await axios.put(`${apiUrl}/${id}`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteLanguage = async (id: string) => {
  try {
    const response = await axios.delete(`${apiUrl}/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};


export const addCourseToLanguage = async (data: any) => {
    try {
        const response = await axios.post(
          `${apiUrl}/${data.languageId}/courses`,
          data
        );
        return response.data;
    } catch (error) {
        throw error;
    }
    }

export const getLanguageCourses = async (id: string) => {
    try {

        const response = await axios.get(`${apiUrl}/${id}/courses`);
        console.log(response.data, "am here");
        return response.data;
    } catch (error) {
        throw error;
    }
    }