import axios from "axios";
import {  API_GET_ALL_USERS } from "../utils/Endpoints";
import {  User } from "../interfaces/UserInterfaces";

export const GetAllStudent = async (): Promise<User[]> => {
    try {
        const configObject = {
            method: 'GET',
            url: API_GET_ALL_USERS
        }
        const users = await axios<User[]>(configObject);
        return users.data;
    } catch (error) {
        console.error(error, 'customer service');
        throw error
    }
}

