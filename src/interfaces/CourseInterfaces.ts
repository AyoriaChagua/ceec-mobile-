import { IconProps } from '@rneui/themed';

export interface BaseModule {
  module_id: number;
}

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



export interface ModuleService extends BaseModule {
  course_id: number;
  is_finish: boolean;
  is_active: boolean;
  name: string;
  ppt_url: string;
}

export interface Module extends BaseModule {
  numbertype: number;
  contentName: string;
  icon: React.ReactElement<IconProps> | string | undefined;
}

export  interface CourseCardProps {
  modules: Module[];
  namemodulo:string;
}
