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