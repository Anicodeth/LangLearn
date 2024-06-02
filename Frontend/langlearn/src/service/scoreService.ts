import axios from "axios";

const apiUrl = "https://lang-learn-api.vercel.app/api/v1/scores";

export const getScores = async () => {
  try {
    const response = await axios.get(`${apiUrl}/`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getScore = async (id: string) => {
  try {
    const response = await axios.get(`${apiUrl}/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createScore = async (score: any) => {
  try {
    const response = await axios.post(`${apiUrl}/`, score);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateScore = async (score: any) => {
  try {
    const response = await axios.put(`${apiUrl}/${score.id}`, score);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteScore = async (id: string) => {
  try {
    const response = await axios.delete(`${apiUrl}/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteScores = async () => {
  try {
    const response = await axios.delete(`${apiUrl}/`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const addScoreToUser = async (score: any, id:string) => {
    try {
        const response = await axios.post(`${apiUrl}/${id}`, score);
        return response.data;
    } catch (error) {
        throw error;
    }
    }