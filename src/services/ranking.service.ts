import axios, { AxiosError } from 'axios';
import { RankingEva} from "../interfaces/EvaluationInterface";
import { API_EVALUATIONS_RANKING_URL} from "../utils/Endpoints";

export const getRankingEvaluation  = async (evaluationId: number, userToken: string): Promise<RankingEva[]> => {
    try {
      const response = await axios.get(`${API_EVALUATIONS_RANKING_URL}/${evaluationId}`, {
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