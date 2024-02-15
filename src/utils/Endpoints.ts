import { Platform } from "react-native";


export const API_AUTH_URL = Platform.OS === 'ios' ?
    'http://localhost:3000/api/auth/signin' :
    'http://192.168.18.3:3000/api/auth/signin';

export const API_SOCKET_URL = Platform.OS === 'ios' ?
    'http://localhost:4100' :
    'http://192.168.18.3:4100';

export const API_COURSES_URL = Platform.OS === 'ios' ?
    'http://localhost:4100/api/custom/coursesuser' :
    'http://192.168.18.3:4100/api/custom/coursesuser';

export const API_COURSES_ID_URL = Platform.OS === 'ios' ?
    'http://localhost:4100/api/courses' :
    'http://192.168.18.3:4100/api/courses';

export const API_MODULE_URL = Platform.OS === 'ios' ?
    'http://localhost:4100/api/custom' :
    'http://192.168.18.3:4100/api/custom';

//obtener info del modulo por  su module_id: http://192.168.18.3:4100/api/modules/$module_id 
export const API_MODULE_ID_URL = Platform.OS === 'ios' ?
    'http://localhost:4100/api/modules' :
    'http://192.168.18.3:4100/api/modules';


 //obtener las notas por el id_curso y id_usuario :    http://192.168.18.3:4100/api/evaluationresults/:curso_id/:user_id
 export const API_NOTAS_URL = Platform.OS === 'ios' ?
 'http://localhost:4100/api/evaluationresults/notas' :
 'http://192.168.18.3:4100/api/evaluationresults/notas';

//obtener info del falshcard por su module_id : http://192.168.18.3:4100/flashcard/module/1   

export const API_FLASHCARD_URL = Platform.OS === 'ios' ?
    'http://localhost:4100/flashcard/module' :
    'http://192.168.18.3:4100/flashcard/module';

//obtener info de la evaluacion por el module_id : http://192.168.18.3:4100/api/evaluation/1

export const API_EVALUATION_MODULEID_URL = Platform.OS === 'ios' ?
    'http://localhost:4100/api/evaluation' :
    'http://192.168.18.3:4100/api/evaluation';

// OBTENER TODOS LOS RESULTADOS http://192.168.18.3:4100/api/evaluationresults/

export const API_EVALUATIONS_RESULT_URL = Platform.OS === 'ios' ?
    'http://localhost:4100/api/evaluationresults' :
    'http://192.168.18.3:4100/api/evaluationresults';

//obtener ranking por evaluacion : http://192.168.18.3:4100/api/evaluationresults/by-evaluation/:id-evaluacion

export const API_EVALUATIONS_RANKING_URL = Platform.OS === 'ios' ?
    'http://localhost:4100/api/evaluationresults/by-evaluation' :
    'http://192.168.18.3:4100/api/evaluationresults/by-evaluation';

//Obtener todas los resultados por evaluationId : http://192.168.18.3:4100/api/evaluationresults/by-evaluation/:evaluationId
export const API_EVALUATIONS_RESULT_EVAID = Platform.OS === 'ios' ?
    'http://localhost:4100/api/evaluationresults/by-evaluation' :
    'http://192.168.18.3:4100/api/evaluationresults/by-evaluation';


    //Obtener todas los resultados por eva_id y user :  http://192.168.18.3:4100/api/evaluationresults/by-user-evaluation/:userId/:evaluationId 
    export const API_EVALUATIONS_EVAID_USER = Platform.OS === 'ios' ?
    'http://192.168.18.3:4100/api/evaluationresults/by-user-evaluation' :
    'http://192.168.18.3:4100/api/evaluationresults/by-user-evaluation';





export const API_COURSES_WITH_USERS = Platform.OS === 'ios' ?
    'http://localhost:4100/api/custom/coursesuser' :
    'http://192.168.18.3:4100/api/custom/coursesuser';

export const API_GET_ALL_USERS = Platform.OS === 'ios' ?
    'http://localhost:4100/api/users/users' :
    'http://192.168.18.3:4100/api/users/users';

export const API_GET_PROFILE = Platform.OS === 'ios' ?
    'http://localhost:4100/api/profiles/alldata' :
    'http://192.168.18.3:4100/api/profiles/alldata';

export const API_GET_SESSION_STATISTICS = Platform.OS === 'ios' ?
    'http://localhost:4100/api/appsession' :
    'http://192.168.18.3:4100/api/appsession';

export const API_GET_STUDENTS_INFO = Platform.OS === 'ios' ?
    'http://localhost:4100/api/users/users-courses' :
    'http://192.168.18.3:4100/api/users/users-courses';


export const API_GET_BASIC_STATISTICS = Platform.OS === 'ios' ?
    'http://localhost:4100/api/users/student-statistics' :
    'http://192.168.18.3:4100/api/users/student-statistics';


export const API_GET_DOCUMENT_TYPES = Platform.OS === 'ios' ?
    'http://localhost:4100/api/profiles/document-types' :
    'http://192.168.18.3:4100/api/profiles/document-types';

export const API_POST_PROFILE = Platform.OS === 'ios' ?
    'http://localhost:4100/api/profiles/profiles' :
    'http://192.168.18.3:4100/api/profiles/profiles';

export const API_GET_COURSES_WITH_MODULES = Platform.OS === 'ios' ?
    'http://localhost:4100/api/courses/modules/all' :
    'http://192.168.18.3:4100/api/courses/modules/all';

