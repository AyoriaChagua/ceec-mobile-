
import axios, { AxiosError } from 'axios';
import { Course} from "../interfaces/CourseInterfaces";
import { API_COURSES_URL , API_COURSES_ID_URL} from "../utils/Endpoints";
import { API_COURSES_WITH_USERS, API_GET_STUDENTS_INFO } from "../utils/Endpoints";
import { CoursesWithUser } from "../interfaces/CoursesInterfaces";
import { StudentInfo } from "../interfaces/UserInterfaces";
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


//todos los cursos con los estudiantes inscritos en el ;D
export const GetCoursesWithUsers = async (): Promise<CoursesWithUser[]> => {
    try {
        const configObject = {
            method: 'GET',
            url: API_COURSES_WITH_USERS
        }
        const coursesWithUsers = await axios<CoursesWithUser[]>(configObject);
        return coursesWithUsers.data;
    } catch (error) {
        console.error(error, 'customer service');
        throw error
    }
}


//obtener todos los cursos con los usuario informacion agregada si esta desaprobado, etc
export const GetAllStudentInfo = async (): Promise<StudentInfo[]> => {
    try {
        const configObject = {
            method: 'GET',
            url: API_GET_STUDENTS_INFO
        }
        const users = await axios<StudentInfo[]>(configObject);
        return users.data;
    } catch (error) {
        console.error(error, 'customer service');
        throw error
    }
}
