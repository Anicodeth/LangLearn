import axios from "axios";

const apiUrl = "https://lang-learn-api.vercel.app/api/v1/users";

export const signUp = async (user: any) => {
  try {
    const response = await axios.post(`${apiUrl}/signup`, user);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const signIn = async (user: any) => {
  try {
    const response = await axios.post(`${apiUrl}/signin`, user);
    return response.data;
  } catch (error) {
    throw error;
  }
};