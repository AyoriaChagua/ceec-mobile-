import axios, { AxiosError } from 'axios';
import { Course} from "../interfaces/CourseInterfaces";
import { API_COURSES_URL , API_COURSES_ID_URL} from "../utils/Endpoints";

export const getCourseByIdUser  = async (userId: number, userToken: string): Promise<Course[]> => {
    try {
      const response = await axios.get(`${API_COURSES_URL}/${userId}`, {
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
  
  export const getCourseInfoById = async (courseId: number, userToken: string): Promise<Course | null> => {
    try {
      const response = await axios.get(`${API_COURSES_ID_URL}/${courseId}`, {
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
