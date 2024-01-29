import { IconProps } from '@rneui/themed';


export interface Course {
  course_id: number;
  name: string;
  description: string;
  is_active: boolean | null;
  is_finish: boolean;
  limit_date: string;
  image: string;
  CourseStudent: {
    id: number;
    course_id: number;
    user_id: number;
    progress: number;
    is_approved: boolean;
  };
}

export interface ModuleService {
  module_id: number;
  course_id: number;
  is_finish: boolean;
  is_active: boolean;
  name: string;
  ppt_url: string;
}
export interface Module {
  numbertype?: number;
  module_id?: number;
  contentName?: string;
  icon?: React.ReactElement<IconProps> | string | undefined;
  is_active?: boolean;
  created_at?: Date;
  name?: string;
  Evaluation?: Evaluation;
}


export interface CourseCardProps {
  modules: Module[];
  namemodulo: string;
}


export interface CourseWithModules {
  course_id: number;
  name: string;
  description: string;
  is_active: boolean;
  created_at: Date;
  updated_at: Date;
  is_finish: boolean;
  limit_date: Date;
  image: string;
  modules: Module[];
}



export interface Evaluation {
  note: number;
  name: string;
  EvaluationResults: EvaluationResult[];
}

export interface EvaluationResult {
  note: string;
}


export interface CourseRequest {
  name: string
  description: string
  image: string
}

export interface CourseResponse {
  message: string,
  newCourse: {
    name: string
    description: string
    image: string
    course_id?: number
  }
}