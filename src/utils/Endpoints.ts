import { Platform } from "react-native";

const base_url = `https://ceec-web-api.onrender.com/api`;

export const API_COURSES_URL = `${base_url}/custom/coursesuser` ;

export const API_COURSES_ID_URL = `${base_url}/courses`;

export const API_MODULE_URL = `${base_url}/custom` ;

//obtener info del modulo por  su module_id: http://192.168.18.3:4100/api/modules/$module_id 
export const API_MODULE_ID_URL = `${base_url}/modules`;


 //obtener las notas por el id_curso y id_usuario :    http://192.168.18.3:4100/api/evaluationresults/:curso_id/:user_id
 export const API_NOTAS_URL = `${base_url}/evaluationresults/notas` ;

//obtener info del falshcard por su module_id : http://192.168.18.3:4100/flashcard/module/1   

export const API_FLASHCARD_URL = 'https://ceec-web-api.onrender.com/flashcard/module';

//obtener info de la evaluacion por el module_id : http://192.168.18.3:4100/api/evaluation/1

export const API_EVALUATION_MODULEID_URL = `${base_url}/evaluation`;

// OBTENER TODOS LOS RESULTADOS http://192.168.18.3:4100/api/evaluationresults/

export const API_EVALUATIONS_RESULT_URL = `${base_url}/evaluationresults`;

//obtener ranking por evaluacion : http://192.168.18.3:4100/api/evaluationresults/by-evaluation/:id-evaluacion

export const API_EVALUATIONS_RANKING_URL = `${base_url}/evaluationresults/by-evaluation`;

//Obtener todas los resultados por evaluationId : http://192.168.18.3:4100/api/evaluationresults/by-evaluation/:evaluationId
export const API_EVALUATIONS_RESULT_EVAID = `${base_url}/evaluationresults/by-evaluation`;

//Obtener todas los resultados por eva_id y user :  http://192.168.18.3:4100/api/evaluationresults/by-user-evaluation/:userId/:evaluationId 
export const API_EVALUATIONS_EVAID_USER = `${base_url}/evaluationresults/by-user-evaluation`;





export const API_AUTH_URL = `https://ceec-web-api.onrender.com/api/auth/signin`;

export const API_SOCKET_URL = `https://ceec-web-api.onrender.com`;




export const API_EVALUATION = `${base_url}/evaluation`;

export const API_PREQUIZZ = `${base_url}/prequizz`;

export const API_EVALUATION_ADMIN = `${base_url}/evaluations`;


export const API_COURSES_WITH_USERS = `${base_url}/custom/coursesuser`;

export const API_GET_ALL_USERS = `${base_url}/users/users`;

export const API_GET_PROFILE = `${base_url}/profiles/alldata`;

export const API_GET_SESSION_STATISTICS = `${base_url}/appsession`;

export const API_GET_STUDENTS_INFO = `${base_url}/users/users-courses`;

export const API_GET_BASIC_STATISTICS = `${base_url}/users/student-statistics`;

export const API_GET_DOCUMENT_TYPES = `${base_url}/profiles/document-types`;

export const API_POST_PROFILE = `${base_url}/profiles/profiles`;

export const API_GET_COURSES_WITH_MODULES = `${base_url}/courses/modules/all`;

export const API_GET_COURSES_BY_ID = `https://ceec-web-api.onrender.com/coursestudent/course`;

export const API_POST_IMAGE = `${base_url}/image-service/upload`;

export const API_POST_COURSE = `${base_url}/courses/`

export const API_DICTIONARY = `${base_url}/dictionaryquizz`


