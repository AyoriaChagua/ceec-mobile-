export interface Evaluation {
    evaluation_id: number;
    quizz_type: number;
    name: string;
    module_id: number;
    is_complete: boolean;
    Evaluation?: {
      evaluation_id: number;
      is_complete: boolean;
      module_id: number;
      name: string;
      quizz_type: number | null;
    };
  }
 export interface Question {
    type: string;
    image_url:string,
    difficulty: string;
    category: string;
    question: string;
    points: number;
    correct_answer: string;
    incorrect_answer: string[];
  }

export interface Result {
    evaluation_id: number,
    user_id: number,
    total_score: number;
  }

  export interface GetResult {
    result_id : number,
    evaluation_id: number,
    user_id: number,
    total_score: number;
  }

export interface Nota {
  result_id: number;
  evaluation_id: number;
  user_id: number;
  total_score: string;
  Evaluation: {
    name: string;
    Module: {
      name: string;
      course_id: number;
    };
  };
}


export interface RankingEva {
  result_id: number;
  evaluation_id: number;
  user_id: number;
  total_score: string;
  User: {
    user_id: number;
    email: string;
    role_id: number;
    created_at: string;
    updated_at: string;
    Profile: {
      first_name: string;
      last_name: string;
    };
  };
}
