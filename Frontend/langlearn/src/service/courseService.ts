import axios from "axios";

const apiUrl = `https://lang-learn-api.vercel.app/api/v1/courses`;

export const getCourses = async () => {
  try {
    const response = await axios.get(`${apiUrl}/`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getCourse = async (id: string) => {
  try {
    const response = await axios.get(`${apiUrl}/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const addCourse = async (data: any) => {
  try {
    const response = await axios.post(`${apiUrl}/`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateCourse = async (id: string, data: any) => {
  try {
    const response = await axios.put(`${apiUrl}/${id}`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteCourse = async (id: string) => {
  try {
    const response = await axios.delete(`${apiUrl}/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const addSlideToCourse = async (data: any) => {
    try {
        const response = await axios.post(`${apiUrl}/add-slide`, data);
        return response.data;
    } catch (error) {
        throw error;
    }
    }


export const addSlidesToCourse = async (data: any) => {
    try {
        const response = await axios.post(`${apiUrl}/add-slides`, data);
        return response.data;
    } catch (error) {
        throw error;
    }
    }