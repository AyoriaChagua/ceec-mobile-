import axios, { AxiosError } from 'axios';
import { Evaluation , Result} from "../interfaces/EvaluationInterface";
import { API_EVALUATION_MODULEID_URL , API_EVALUATIONS_RESULT_URL} from "../utils/Endpoints";


export const getEvaluationModuleId  = async (module_id: number, userToken: string): Promise<Evaluation[]> => {
    try {
      const response = await axios.get(`${API_EVALUATION_MODULEID_URL}/${module_id}`, {
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

  export const sendQuizResult = async (Result: Result, userToken: string): Promise<void> => {
    try {
      const response = await axios.post(API_EVALUATIONS_RESULT_URL, Result, {
        headers: {
          Authorization: userToken,
          'Content-Type': 'application/json',
        },
      });
  
      // Log or handle the response if needed
      console.log('Quiz result sent successfully:', response.data);
    } catch (error) {
      const axiosError = error as AxiosError;
      if (axiosError.response?.status === 403) {
        console.error('Permission Denied: You do not have access to this resource.');
      } else {
        console.error('Error while sending quiz result:', error);
      }
      throw error;
    }
  };