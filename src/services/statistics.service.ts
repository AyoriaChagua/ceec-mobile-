import axios from "axios";
import { API_GET_SESSION_STATISTICS, API_GET_BASIC_STATISTICS } from "../utils/Endpoints";
import { BasicStatistics, WeeklySessionInfo } from "../interfaces/StatisticsInterface";

export const GetBasicStatistics = async (): Promise<BasicStatistics> => {
    try {
        const configObject = {
            method: 'GET',
            url: API_GET_BASIC_STATISTICS
        }
        const statistics = await axios<BasicStatistics>(configObject);
        return statistics.data;
    } catch (error) {
        console.error(error, 'customer service');
        throw error
    }
}

export const GetSessionStatistics = async (page: number = 0): Promise<WeeklySessionInfo> => {
    try {
        const configObject = {
            method: 'GET',
            url: `${API_GET_SESSION_STATISTICS}?page=${page}`
        }
        const sessionsPerWeek = await axios<WeeklySessionInfo>(configObject);
        return sessionsPerWeek.data;
    } catch (error) {
        console.error(error, 'customer service');
        throw error
    }
}

