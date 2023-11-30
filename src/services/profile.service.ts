import axios from "axios";
import jwtDecode from "jwt-decode";
import * as SecureStore from 'expo-secure-store';
import { UserProfile } from "../interfaces/AuthInterfaces";
import { API_GET_PROFILE } from "../utils/Endpoints";

export const GetProfile = async (): Promise<UserProfile  | null> => {
    const token = await SecureStore.getItemAsync("userToken");
    try {
        if (token) {
            const decodedToken: { id: number } = jwtDecode(token);
            const configObject = {
                method: 'GET',
                url: `${API_GET_PROFILE}/${decodedToken.id}`
            }
            const userProfile = await axios<UserProfile>(configObject)
            return userProfile.data;
        }
        return null
    } catch (error) {
        console.error(error);
        throw error
    }
}

