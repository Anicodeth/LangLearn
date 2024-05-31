
import axios from "axios";

const apiUrl = "https://lang-learn-api.vercel.app/api/v1/ai";

export const getQuiz = async (languge:string, difficulty:string) => {
    try {
        const response = await axios.get(`${apiUrl}/quiz/${languge}/${difficulty}`);
        return JSON.parse(response.data);
    } catch (error) {
        throw error;
    }
    }



