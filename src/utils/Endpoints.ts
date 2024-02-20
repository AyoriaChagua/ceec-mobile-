import { Platform } from "react-native";



export const API_COURSES_URL = Platform.OS === 'ios' ?
    'https://ceec-web-api.onrender.com/api/custom/coursesuser' :
    'https://ceec-web-api.onrender.com/api/custom/coursesuser';

export const API_COURSES_ID_URL = Platform.OS === 'ios' ?
    'https://ceec-web-api.onrender.com/api/courses' :
    'https://ceec-web-api.onrender.com/api/courses';

export const API_MODULE_URL = Platform.OS === 'ios' ?
    'https://ceec-web-api.onrender.com/api/custom' :
    'https://ceec-web-api.onrender.com/api/custom';

//obtener info del modulo por  su module_id: http://192.168.18.3:4100/api/modules/$module_id 
export const API_MODULE_ID_URL = Platform.OS === 'ios' ?
    'https://ceec-web-api.onrender.com/api/modules' :
    'https://ceec-web-api.onrender.com/api/modules';


 //obtener las notas por el id_curso y id_usuario :    http://192.168.18.3:4100/api/evaluationresults/:curso_id/:user_id
 export const API_NOTAS_URL = Platform.OS === 'ios' ?
 'https://ceec-web-api.onrender.com/api/evaluationresults/notas' :
 'https://ceec-web-api.onrender.com/api/evaluationresults/notas';

//obtener info del falshcard por su module_id : http://192.168.18.3:4100/flashcard/module/1   

export const API_FLASHCARD_URL = Platform.OS === 'ios' ?
    'https://ceec-web-api.onrender.com/flashcard/module' :
    'https://ceec-web-api.onrender.com/flashcard/module';

//obtener info de la evaluacion por el module_id : http://192.168.18.3:4100/api/evaluation/1

export const API_EVALUATION_MODULEID_URL = Platform.OS === 'ios' ?
    'https://ceec-web-api.onrender.com/api/evaluation' :
    'https://ceec-web-api.onrender.com/api/evaluation';

// OBTENER TODOS LOS RESULTADOS http://192.168.18.3:4100/api/evaluationresults/

export const API_EVALUATIONS_RESULT_URL = Platform.OS === 'ios' ?
    'https://ceec-web-api.onrender.com/api/evaluationresults' :
    'https://ceec-web-api.onrender.com/api/evaluationresults';

//obtener ranking por evaluacion : http://192.168.18.3:4100/api/evaluationresults/by-evaluation/:id-evaluacion

export const API_EVALUATIONS_RANKING_URL = Platform.OS === 'ios' ?
    'https://ceec-web-api.onrender.com/api/evaluationresults/by-evaluation' :
    'https://ceec-web-api.onrender.com/api/evaluationresults/by-evaluation';

//Obtener todas los resultados por evaluationId : http://192.168.18.3:4100/api/evaluationresults/by-evaluation/:evaluationId
export const API_EVALUATIONS_RESULT_EVAID = Platform.OS === 'ios' ?
    'https://ceec-web-api.onrender.com/api/evaluationresults/by-evaluation' :
    'https://ceec-web-api.onrender.com/api/evaluationresults/by-evaluation';


    //Obtener todas los resultados por eva_id y user :  http://192.168.18.3:4100/api/evaluationresults/by-user-evaluation/:userId/:evaluationId 
    export const API_EVALUATIONS_EVAID_USER = Platform.OS === 'ios' ?
    'https://ceec-web-api.onrender.com/api/evaluationresults/by-user-evaluation' :
    'https://ceec-web-api.onrender.com/api/evaluationresults/by-user-evaluation';









const base_url = `https://ceec-web-api.onrender.com/api`;


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


