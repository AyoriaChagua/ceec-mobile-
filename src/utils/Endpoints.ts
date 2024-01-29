import { Platform } from "react-native";


export const API_AUTH_URL = Platform.OS === 'ios' ?
    'http://localhost:3000/api/auth/signin' :
    'http://192.168.0.11:3000/api/auth/signin';

export const API_SOCKET_URL = Platform.OS === 'ios' ?
    'http://localhost:4100' :
    'http://192.168.0.11:4100';

export const API_COURSES_URL = Platform.OS === 'ios' ?
    'http://localhost:4100/api/custom/coursesuser' :
    'http://192.168.0.11:4100/api/custom/coursesuser';

export const API_COURSES_ID_URL = Platform.OS === 'ios' ?
    'http://localhost:4100/api/courses' :
    'http://192.168.0.11:4100/api/courses';

export const API_MODULE_URL = Platform.OS === 'ios' ?
    'http://localhost:4100/api/custom' :
    'http://192.168.0.11:4100/api/custom';

//obtener info del modulo por  su module_id: http://192.168.18.3:4100/api/modules/$module_id 
export const API_MODULE_ID_URL = Platform.OS === 'ios' ?
    'http://localhost:4100/api/modules' :
    'http://192.168.0.11:4100/api/modules';

export const API_COURSES_WITH_USERS = Platform.OS === 'ios' ?
    'http://localhost:4100/api/custom/coursesuser' :
    'http://192.168.0.11:4100/api/custom/coursesuser';

export const API_GET_ALL_USERS = Platform.OS === 'ios' ?
    'http://localhost:4100/api/users/users' :
    'http://192.168.0.11:4100/api/users/users';

export const API_GET_PROFILE = Platform.OS === 'ios' ?
    'http://localhost:4100/api/profiles/alldata' :
    'http://192.168.0.11:4100/api/profiles/alldata';

export const API_GET_SESSION_STATISTICS = Platform.OS === 'ios' ?
    'http://localhost:4100/api/appsession' :
    'http://192.168.0.11:4100/api/appsession';

export const API_GET_STUDENTS_INFO = Platform.OS === 'ios' ?
    'http://localhost:4100/api/users/users-courses' :
    'http://192.168.0.11:4100/api/users/users-courses';


export const API_GET_BASIC_STATISTICS = Platform.OS === 'ios' ?
    'http://localhost:4100/api/users/student-statistics' :
    'http://192.168.0.11:4100/api/users/student-statistics';


export const API_GET_DOCUMENT_TYPES = Platform.OS === 'ios' ?
    'http://localhost:4100/api/profiles/document-types' :
    'http://192.168.0.11:4100/api/profiles/document-types';

export const API_POST_PROFILE = Platform.OS === 'ios' ?
    'http://localhost:4100/api/profiles/profiles' :
    'http://192.168.0.11:4100/api/profiles/profiles';

export const API_GET_COURSES_WITH_MODULES = Platform.OS === 'ios' ?
    'http://localhost:4100/api/courses/modules/all' :
    'http://192.168.0.11:4100/api/courses/modules/all';


export const API_GET_COURSES_BY_ID = Platform.OS === 'ios' ?
    'http://localhost:4100/coursestudent/course' :
    'http://192.168.0.11:4100/coursestudent/course';

export const API_POST_IMAGE = Platform.OS === 'ios' ?
    'http://localhost:4100/api/image-service/upload' :
    'http://192.168.0.11:4100/api/image-service/upload';


export const API_POST_COURSE = Platform.OS === 'ios' ?
    'http://localhost:4100/api/courses/' :
    'http://192.168.0.11:4100/api/courses/'

