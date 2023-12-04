import axios from "axios";
import { Profile, UserInfo} from "../interfaces/UserInterfaces";
import { API_GET_PROFILE } from "../utils/Endpoints";

export const GetProfile = async (id: number): Promise<Profile | null> => {
    try {
        const configObject = {
            method: 'GET',
            url: `${API_GET_PROFILE}/${id}`
        }
        const userProfile = await axios<UserInfo>(configObject);
        if (userProfile.data.Profile)
            return userProfile.data.Profile;
        else
            return null;
    } catch (error) {
        console.error(error);
        throw error
    }
}

