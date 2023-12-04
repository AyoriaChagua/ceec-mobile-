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

