

const base_url = `http://192.168.0.11:4100/api`;


export const API_AUTH_URL = `http://192.168.0.11:3000/api/auth/signin`;

export const API_SOCKET_URL = `http://192.168.0.11:4100`;

export const API_COURSES_URL = `${base_url}/custom/coursesuser`;

export const API_COURSES_ID_URL = `${base_url}/courses`;

export const API_MODULE_URL = `${base_url}/custom`;

//obtener info del modulo por  su module_id: http://192.168.18.3:4100/api/modules/$module_id 
export const API_MODULE_ID_URL = `${base_url}/modules`;

//obtener info del falshcard por su module_id : http://192.168.18.3:4100/flashcard/module/1   

export const API_FLASHCARD_URL = `http://192.168.0.11:4100/flashcard`;

//obtener info de la evaluacion por el module_id : http://192.168.18.3:4100/api/evaluation/1

export const API_EVALUATION = `${base_url}/evaluation`;

export const API_PREQUIZZ = `${base_url}/prequizz`;

export const API_EVALUATION_ADMIN = `${base_url}/evaluations`;

// OBTENER TODOS LOS RESULTADOS http://192.168.18.3:4100/api/evaluationresults/

export const API_EVALUATIONS_RESULT_URL = `${base_url}/evaluationresults`;


//Obtener todas los resultados por evaluationId : http://192.168.18.3:4100/api/evaluationresults/by-evaluation/:evaluationId
export const API_EVALUATIONS_RESULT_EVAID = `${base_url}/evaluationresults/by-evaluation`;


export const API_COURSES_WITH_USERS = `${base_url}/custom/coursesuser`;

export const API_GET_ALL_USERS = `${base_url}/users/users`;

export const API_GET_PROFILE = `${base_url}/profiles/alldata`;

export const API_GET_SESSION_STATISTICS = `${base_url}/appsession`;

export const API_GET_STUDENTS_INFO = `${base_url}/users/users-courses`;

export const API_GET_BASIC_STATISTICS = `${base_url}/users/student-statistics`;

export const API_GET_DOCUMENT_TYPES = `${base_url}/profiles/document-types`;

export const API_POST_PROFILE = `${base_url}/profiles/profiles`;

export const API_GET_COURSES_WITH_MODULES = `${base_url}/courses/modules/all`;

export const API_GET_COURSES_BY_ID = `http://192.168.0.11:4100/coursestudent/course`;

export const API_POST_IMAGE = `${base_url}/image-service/upload`;

export const API_POST_COURSE = `${base_url}/courses/`

export const API_DICTIONARY = `${base_url}/dictionaryquizz`


