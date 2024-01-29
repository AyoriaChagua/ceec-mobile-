import axios, { AxiosError } from 'axios';
import { FlashCard} from "../interfaces/ContentModuleInterface";
import { API_FLASHCARD_URL} from "../utils/Endpoints";

export const getFlashCardInfoById  = async (module_id: number, userToken: string): Promise<FlashCard[]> => {
    try {
      const response = await axios.get(`${API_FLASHCARD_URL}/${module_id}`, {
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