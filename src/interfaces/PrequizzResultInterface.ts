
export interface PrequizzResult {
    evaluation_id: number,
    user_id: number,
    total_score: number;
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
  