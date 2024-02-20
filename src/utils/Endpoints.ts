const base_url = `http://192.168.0.11:4100`;


export const API_SOCKET_URL = `${base_url}`;

export const API_AUTH_URL = `${base_url}/api/auth/signin`;


export const API_COURSES_URL = `${base_url}/api/custom/coursesuser`;

export const API_COURSES_ID_URL = `${base_url}/api/courses`;

export const API_MODULE_URL = `${base_url}/api/custom`;

//obtener info del modulo por  su module_id: http://192.168.18.3:4100/api/modules/$module_id 
export const API_MODULE_ID_URL = `${base_url}/api/modules`;

//obtener info del falshcard por su module_id : http://192.168.18.3:4100/flashcard/module/1   

export const API_FLASHCARD_URL = `${base_url}/api/flashcard`;

//obtener info de la evaluacion por el module_id : http://192.168.18.3:4100/api/evaluation/1

export const API_EVALUATION = `${base_url}/api/evaluation`;

export const API_PREQUIZZ = `${base_url}/api/prequizz`;

export const API_EVALUATION_ADMIN = `${base_url}/api/evaluations`;

// OBTENER TODOS LOS RESULTADOS http://192.168.18.3:4100/api/evaluationresults/

export const API_EVALUATIONS_RESULT_URL = `${base_url}/api/evaluationresults`;


//Obtener todas los resultados por evaluationId : http://192.168.18.3:4100/api/evaluationresults/by-evaluation/:evaluationId
export const API_EVALUATIONS_RESULT_EVAID = `${base_url}/api/evaluationresults/by-evaluation`;

export const API_COURSES_WITH_USERS = `${base_url}/api/custom/coursesuser`;

export const API_GET_ALL_USERS = `${base_url}/api/users/users`;

export const API_GET_PROFILE = `${base_url}/api/profiles/alldata`;

export const API_GET_SESSION_STATISTICS = `${base_url}/api/appsession`;

export const API_GET_STUDENTS_INFO = `${base_url}/api/users/users-courses`;

export const API_GET_BASIC_STATISTICS = `${base_url}/api/users/student-statistics`;

export const API_GET_DOCUMENT_TYPES = `${base_url}/api/profiles/document-types`;

export const API_POST_PROFILE = `${base_url}/api/profiles/profiles`;

export const API_GET_COURSES_WITH_MODULES = `${base_url}/api/courses/modules/all`;

export const API_GET_COURSES_BY_ID = `${base_url}/api/coursestudent/course`;

export const API_POST_IMAGE = `${base_url}/api/image-service/upload`;

export const API_POST_COURSE = `${base_url}/api/courses/`

export const API_DICTIONARY = `${base_url}/api/dictionaryquizz`


