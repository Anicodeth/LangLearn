import axios from "axios"

const apiUrl = "https://lang-learn-api.vercel.app/api/v1/slides";

export const getSlides = async () => {
    try {
        const response = await axios.get(`${apiUrl}/`);
        return response.data;
    } catch (error) {
        throw error;
    }
    }

export const getSlide = async (id: string) => {
    try {
        const response = await axios.get(`${apiUrl}/${id}`);
        return response.data;
    } catch (error) {
        throw error;
    }
    }


export const updateSlide = async (id: string, data: any) => {
    try {
        const response = await axios.put(`${apiUrl}/${id}`, data);
        return response.data;
    } catch (error) {
        throw error;
    }
    }

export const deleteSlide = async (id: string) => {
    try {
        const response = await axios.delete(`${apiUrl}/${id}`);
        return response.data;
    } catch (error) {
        throw error;
    }
    }

