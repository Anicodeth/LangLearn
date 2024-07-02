import axios from 'axios';

const apiUrl = "https://lang-learn-api.vercel.app/api/v1/users";
import { DataGrid, GridColDef } from '@mui/x-data-grid';


export const getUser = async (userId: string) => {
  const response = await axios.get(`${apiUrl}/${userId}`);
  return response.data;
};

export const getUsers = async () => {
  const response = await axios.get(apiUrl);
  return response.data;
};

export const createUser = async (user: any) => {
  const response = await axios.post(apiUrl, user);
  return response.data;
};

export const updateUser = async (user: any) => {
  const response = await axios.put(`${apiUrl}/${user._id}`, user);
  return response.data;
};

export const deleteUser = async (userId: string) => {
  const response = await axios.delete(`${apiUrl}/${userId}`);
  return response.data;
};

export const addCoins = async (userId: string, coins: number) => {
  const response = await axios.put(`${apiUrl}/${userId}/coins`, { coins });
  return response.data;
};

export const deductCoins = async (userId: string, coins: number) => {
  const response = await axios.put(`${apiUrl}/${userId}/deductcoins`, { coins });
  return response.data;
};

export const getCoinBalance = async (userId: string) => {
  const response = await axios.get(`${apiUrl}/${userId}/coins`);
  return response.data;
}

