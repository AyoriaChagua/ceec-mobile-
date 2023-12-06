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

export  interface ModuleService {
  module_id: number;
  course_id: number;
  is_finish: boolean;
  is_active: boolean;
  name: string;
  ppt_url: string;
}
export  interface Module {
  numbertype: number;
  module_id: number;
  contentName: string;
  icon: React.ReactElement<IconProps> | string | undefined;
}


export  interface CourseCardProps {
  modules: Module[];
  namemodulo:string;
}
