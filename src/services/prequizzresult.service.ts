import axios, { AxiosError } from 'axios';
import { PrequizzResult , PrequizzResultCourse} from "../interfaces/PrequizzResultInterface";
import { API_PREQUIZZ_RESULT , API_PREQUIZZ_RESULT_BY_COURSE} from "../utils/Endpoints";

export const getPrequizzCourseId  = async (course_id: number, userToken: string): Promise<PrequizzResultCourse[]> => {
    try {
      const response = await axios.get(`${API_PREQUIZZ_RESULT_BY_COURSE}/${course_id}`, {
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

export const sendPreQuizResult = async (Result: PrequizzResult, userToken: string): Promise<void> => {
    try {
      const response = await axios.post(API_PREQUIZZ_RESULT , Result, {
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

  
  export const updateQuizResult = async (resultId: number, totalScore: number, userToken: string): Promise<void> => {
    try {
      const response = await axios.put(`${API_PREQUIZZ_RESULT}/${resultId}`, { puntaje: totalScore }, {
        headers: {
          Authorization: userToken,
          'Content-Type': 'application/json',
        },
      });
  
      // Log or handle the response if needed
      console.log('Quiz result updated successfully:', response.data);
    } catch (error) {
      const axiosError = error as AxiosError;
      if (axiosError.response?.status === 403) {
        console.error('Permission Denied: You do not have access to this resource.');
      } else {
        console.error('Error while updating quiz result:', error);
      }
      throw error;
    }
  };