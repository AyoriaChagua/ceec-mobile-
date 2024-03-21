
export interface User {
    email: string;
    role_id: number;
    Profile: {
      first_name: string;
      last_name: string;
      profile_picture: string;
    };
  }
  
  export interface Module {
    module_id: number;
    name: string;
  }
  
  
  export interface EvaluationResult {
    user_id: number;
    evaluation_id: number;
    total_score: string;
    Evaluation: {
      evaluation_id: number;
      name: string;
      Module: Module;
    };
    realize_exam: boolean;
  }
  
  export interface UserEvaluation {
    User: User;
    evaluations: EvaluationResult[];
    total_score_sum: number;
    average_score: number;
    is_finished: boolean;
    status: string;
  }
  