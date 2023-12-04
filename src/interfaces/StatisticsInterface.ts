import { DailySession } from "./UserInterfaces";

export interface BasicStatistics {
    totalStudents: number;
    approvedPercentage: number;
    inProgressPercentage: number;
    disapprovedPercentage: number;
}

export interface WeeklySessionInfo {
    sessionsWithDay: DailySession[];
    startOfWeek: string;
    endOfWeek: string;
}