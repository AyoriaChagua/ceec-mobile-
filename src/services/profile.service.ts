import axios from "axios";
import { DocumentType, Profile, ProfileRequest, UserInfo } from "../interfaces/UserInterfaces";
import { API_GET_PROFILE, API_GET_DOCUMENT_TYPES, API_POST_PROFILE } from "../utils/Endpoints";

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

export const GetDocumentTypes = async () => {
    try {
        const configObject = {
            method: 'GET',
            url: API_GET_DOCUMENT_TYPES
        }
        const documetTypes = await axios<DocumentType[]>(configObject);
        if (documetTypes.data)
            return documetTypes.data;
        else
            return null;
    } catch (error) {
        console.error(error);
        throw error
    }
}

export const PostProfile = async (id: number, profileInfo: ProfileRequest) => {
    try {
        const configObject = {
            method: 'POST',
            url: `${API_POST_PROFILE}/${id}`,
            data: profileInfo
        }
        const userProfile = await axios<Profile>(configObject);
        if (userProfile.data)
            return userProfile.data;
        else
            return null;
    } catch (error) {

    }
}

