
export interface PrequizzResult {
   course_id: number,
    user_id: number,
    puntaje: number;
    efectividad : number;
  }

  export interface PrequizzResultCourse {
    course_id : 2,
    name : string,
    description:string,
    is_active: boolean | null,
    is_finish: boolean,
    limit_date: string,
    image: string,
    background_color: string,
    logo: string,
    preQuizzResultModel: {
        pre_result_id : number,
        course_id : number,
        user_id : number,
        puntaje : number,
        efectividad: string,
        
      }; 
  }
  

  interface User {
    user_id: number;
    email: string;
    password: string;
    role_id: number;
    failed_login_attempts: number;
    last_failed_login: string | null;
    is_blocked: string | null;
    created_at: string;
    updated_at: string;
  }
  
 export  interface PrequizzResultUserCourse {
    pre_result_id: number;
    course_id: number;
    user_id: number;
    puntaje: string;
    efectividad: string;
    User: User;
  }