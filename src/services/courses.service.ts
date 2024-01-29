
import axios, { AxiosError } from 'axios';
import { Course, CourseRequest, CourseResponse, CourseWithModules } from "../interfaces/CourseInterfaces";
import {
  API_COURSES_URL,
  API_COURSES_ID_URL,
  API_POST_COURSE,
  API_COURSES_WITH_USERS,
  API_GET_COURSES_WITH_MODULES,
  API_GET_STUDENTS_INFO,
  API_GET_COURSES_BY_ID
} from "../utils/Endpoints";
import { CoursesWithModules, CoursesWithUser } from "../interfaces/CoursesInterfaces";

import { StudentInfo } from "../interfaces/UserInterfaces";
export const getCourseByIdUser = async (userId: number, userToken: string): Promise<Course[]> => {
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

//solo devuelve informacion del curso, mas no devuelve detalles
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

export const GetCoursesWithModules = async (): Promise<CoursesWithModules[]> => {
  try {
    const configObject = {
      method: 'GET',
      url: API_GET_COURSES_WITH_MODULES
    }
    const coursesWithModules = await axios<CoursesWithModules[]>(configObject);
    return coursesWithModules.data;
  } catch (error) {
    console.error(error, 'customer service');
    throw error
  }
}

//
export const GetCourseWithModules = async (id: number): Promise<CourseWithModules | null> => {
  try {
    const configObject = {
      method: 'GET',
      url: `${API_GET_COURSES_BY_ID}/${id}`
    };
    const response = await axios<CourseWithModules[]>(configObject);
    if (response.data.length > 0) {
      return response.data[0];
    } else {
      return null;
    }
  } catch (error) {
    console.error(error, 'customer service');
    throw error;
  }
};


export const PostNewCourse = async ({ description, image, name }: CourseRequest): Promise<CourseResponse | null> => {
  try {
    const configObject = {
      method: 'POST',
      url: `${API_POST_COURSE}`,
      data: { description, image, name },
      headers: {
        "Content-Type": "application/json",
      }
    }
    const response = await axios<CourseResponse>(configObject);
    if (response.data)
      return response.data;
    else
      return null;
  } catch (error) {
    console.error(error, 'customer service');
    throw error;
  }
}