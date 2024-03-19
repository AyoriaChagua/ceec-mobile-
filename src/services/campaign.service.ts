import axios, { AxiosError } from 'axios';
import { Campaign } from "../interfaces/CampaignInterface";
import {
    API_CAMPAIGN_URL
} from "../utils/Endpoints";


//obtener todas las campañas 
export const GetAllCampaign = async (userToken: string):  Promise<Campaign | null> => {
    try {
        const response = await axios.get(`${API_CAMPAIGN_URL}`, {
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

