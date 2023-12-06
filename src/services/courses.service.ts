import axios from "axios";
import { API_COURSES_WITH_USERS, API_GET_COURSES_WITH_MODULES, API_GET_STUDENTS_INFO } from "../utils/Endpoints";
import { CoursesWithModules, CoursesWithUser } from "../interfaces/CoursesInterfaces";
import { StudentInfo } from "../interfaces/UserInterfaces";

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