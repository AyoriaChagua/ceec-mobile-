export interface DictionaryRequest {
    word: string | null;
    meaning: string | null;
    module_id: number;
    quizztype_id: number;
}

export interface DictionaryResponse {
    message: string;
    error?: string;
}