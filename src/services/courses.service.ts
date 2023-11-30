import axios from "axios";
import { API_COURSES_WITH_USERS } from "../utils/Endpoints";
import { CoursesWithUser } from "../interfaces/CoursesInterfaces";

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