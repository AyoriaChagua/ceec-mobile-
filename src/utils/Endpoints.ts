
//const base_url = `https://ceec-web-api.onrender.com/api`;
const base_url = `http://192.168.170.52:4100`;
//const base_url = `http://192.168.0.11:4100`;


export const API_COURSES_URL = `${base_url}/api/campaignuser/courses` ;


export const API_CAMPAIGN_URL = `${base_url}/api/campaigns` ;


export const API_COURSES_ID_URL = `${base_url}/api/courses`;

export const API_MODULE_URL = `${base_url}/api/custom` ;

//obtener info del modulo por  su module_id: http://192.168.18.3:4100/api/modules/$module_id 
export const API_MODULE_ID_URL = `${base_url}/api/modules`;


 //obtener las notas por el id_curso y id_usuario :    http://192.168.18.3:4100/api/evaluationresults/:curso_id/:user_id
 export const API_NOTAS_URL = `${base_url}/api/evaluationresults/notas` ;

//obtener info del falshcard por su module_id : http://192.168.18.3:4100/flashcard/module/1   

export const API_FLASHCARD_URL = `${base_url}/api/flashcard`;

//obtener info de la evaluacion por el module_id : http://192.168.18.3:4100/api/evaluation/1

export const API_EVALUATION_MODULEID_URL = `${base_url}/api/evaluation`;

// OBTENER TODOS LOS RESULTADOS http://192.168.18.3:4100/api/evaluationresults/

export const API_EVALUATIONS_RESULT_URL = `${base_url}/api/evaluationresults`;

export const API_EVALUATIONS_PREQUIZZRESULT_URL = `${base_url}/api/prequizzresults`;

//obtener ranking por evaluacion : http://192.168.18.3:4100/api/evaluationresults/by-evaluation/:id-evaluacion

export const API_EVALUATIONS_RANKING_URL = `${base_url}/api/evaluationresults/by-evaluation`;

//Obtener todas los resultados por evaluationId : http://192.168.18.3:4100/api/evaluationresults/by-evaluation/:evaluationId
export const API_EVALUATIONS_RESULT_EVAID = `${base_url}/api/evaluationresults/by-evaluation`;

export const API_COURSES_WITH_USERS = `${base_url}/api/custom/coursesuser`;

export const API_GET_ALL_USERS = `${base_url}/api/users/all`;

export const API_GET_ALL_STUDENTS = `${base_url}/api/users/students`;

export const API_GET_PROFILE = `${base_url}/api/profiles/alldata`;

export const API_GET_SESSION_STATISTICS = `${base_url}/api/appsession`;

export const API_GET_BASIC_STATISTICS = `${base_url}/api/users/student-statistics`;



export const API_GET_STUDENTS_INFO = `${base_url}/api/users/users-courses`;



export const API_GET_DOCUMENT_TYPES = `${base_url}/api/profiles/document-types`;

export const API_POST_PROFILE = `${base_url}/api/profiles/profiles`;

export const API_GET_COURSES_WITH_MODULES = `${base_url}/api/courses/modules/all`;




export const API_GET_COURSES_BY_ID = `${base_url}/api/coursestudent/course`;

export const API_GET_ALL_DATA_STUDENT_PER_COURSE = `${base_url}/api/coursestudent/all-data`


export const API_GET_STUDENTS_FOR_COURSE = `${base_url}/api/users/students-for-course`;

export const API_POST_STUDENTS_TO_COURSES = `${base_url}/api/coursestudent/many`





export const API_POST_IMAGE = `${base_url}/api/image-service/upload`;

export const API_POST_COURSE = `${base_url}/api/courses/`;

export const API_GET_COURSES = `${base_url}/api/courses`;

export const API_DICTIONARY = `${base_url}/api/dictionaryquizz`;

//Obtener todas los resultados por eva_id y user :  http://192.168.18.3:4100/api/evaluationresults/by-user-evaluation/:userId/:evaluationId 
export const API_EVALUATIONS_EVAID_USER = `${base_url}/api/evaluationresults/by-user-evaluation`;

//obtener ranking por evaluacion : http://192.168.18.3:4100/api/evaluationresults/by-evaluation/:id-evaluacion



//obtEner resultados de prequizz por curso

export const API_PREQUIZZ_RESULT_BY_COURSE = `${base_url}/api/prequizzresult`;


export const API_PREQUIZZ_RESULT_BY_COURSEANDUSER = `${base_url}/api/prequizzresult/usercourse`;


export const API_AUTH_URL = `http://192.168.170.52:4100/api/auth/signin`; /*`https://ceec-web-api.onrender.com/api/auth/signin`;*/ 

export const API_SOCKET_URL = `http://192.168.170.52:4100`; /*`https://ceec-web-api.onrender.com`;*/ 

//obtener notas de preguizz por campaña y userid  https://ceec-web-api.onrender.com/api/prequizzresult/notasprequizz/:userId/:campaignid
export const API_PREQUIZZRESULT_NOTA = `${base_url}/api/prequizzresult/notasprequizz`;



export const API_EVALUATION = `${base_url}/api/evaluation`;

export const API_PREQUIZZ = `${base_url}/api/prequizz`;

export const API_EVALUATION_ADMIN = `${base_url}/api/evaluations`;

export const API_USER_ADMIN = `${base_url}/api/users/new`;