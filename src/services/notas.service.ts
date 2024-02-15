import axios, { AxiosError } from 'axios';
import { Nota} from "../interfaces/EvaluationInterface";
import { API_NOTAS_URL} from "../utils/Endpoints";

export const getNotas  = async (course_id: number,user_id: number, userToken: string): Promise<Nota[]> => {
    try {
      const response = await axios.get(`${API_NOTAS_URL}/${course_id}/${user_id}`, {
        headers: {
          Authorization: userToken,
        },
      });
      return response.data;
    } catch (error) {
        const axiosError = error as AxiosError; 
        if (axiosError.response?.status === 403) {
          console.error('Permission Denied: You do not have access to this resource.');
        } else {
          console.error('Error while fetching course data:', error);
        }
        throw error; 
      }
  };