import { User } from "./UserInterfaces";

export interface CoursesWithUser {
    course: Course;
    users: User[];
}

export interface Course {
    course_id: number;
    name: string;
    description: string;
    is_active: boolean | null;
    created_at: Date;
    updated_at: Date;
    is_finish: boolean;
    limit_date: Date | null;
    image: null | string;
}

export interface CoursesWithModules {
    user_count: number;
    background_color: string;
    course_id: number;
    name: string;
    description: string;
    is_active: boolean | null;
    created_at: Date;
    updated_at: Date;
    is_finish: boolean;
    limit_date: Date | null;
    image: null | string;
    modules: Module[];
}

export interface Module {
    is_active: boolean;
    created_at: Date;
    name: string;
}
