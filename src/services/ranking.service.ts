import axios, { AxiosError } from 'axios';
import { RankingEva } from "../interfaces/EvaluationInterface";
import { API_EVALUATIONS_RANKING_URL , API_RANKING_STUDENTS_EVALUATION} from "../utils/Endpoints";
import {UserEvaluation} from "../interfaces/RankingInterface";

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


  export const getRankingEvaluationbyCourse  = async (course_id: number, userToken: string): Promise<UserEvaluation[]> => {
    try {
      const response = await axios.get(`${API_RANKING_STUDENTS_EVALUATION}/${course_id}`, {
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