
import axios from "axios";



const apiUrl = "https://lang-learn-api.vercel.app/api/v1/users";

export const register = async (user: any) => {
  try {
    const response = await axios.post(`${apiUrl}/register`, user);
    return response.data;
  } catch (error) {
    throw error;
  }
};