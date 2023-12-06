import axios, { AxiosError } from 'axios';
import { ModuleService} from "../interfaces/CourseInterfaces";
import { Material} from "../interfaces/ContentModuleInterface";
import { API_MODULE_URL , API_MODULE_ID_URL} from "../utils/Endpoints";

export const getModulesByIdCourse  = async (courseId: number, userToken: string): Promise<ModuleService[]> => {
    try {
      const response = await axios.get(`${API_MODULE_URL}/${courseId}/modules`, {
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

  export const getModuleInfoById  = async (module_id: number, userToken: string): Promise<Material[]> => {
    try {
      const response = await axios.get(`${API_MODULE_ID_URL}/${module_id}`, {
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

