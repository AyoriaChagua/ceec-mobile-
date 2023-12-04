export interface LoginResponse {
    code?: number;
    msg?: string;
    token?: string;
    possibleAttemps?: number
}

export interface LoginRequest {
    email: string;
    password: string;
}

export interface User {
    user_id: number;
    email: string;
    role_id: number;
    expired_at?: null;
    created_at?: Date;
    updated_at?: Date;
}

export interface UserInfo {
    id?: number;
    email: string;
    role_id: number;
    Profile?: Profile
}

export interface Profile {
    first_name: string;
    last_name: string;
    document_number?: number;
    phone?: number;
    DocumentType?: DocumentType;
}

export interface DocumentType {
    name: string;
}



export interface DailySession {
    session_day: Date;
    sessions: string;
    average_duration_seconds: string;
    day: string;
}

export interface StudentInfo {
    progress: string;
    is_approved: boolean | null;
    User: UserInfo;
    Course: CourseInfo;
}

export interface CourseInfo {
    name: string;
}