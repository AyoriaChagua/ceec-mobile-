import { Platform } from "react-native";

export const API_SOCKET_URL = Platform.OS === 'ios' ?
    'http://localhost:4100' :
    'http://192.168.0.11:4100';

export const API_AUTH_URL = Platform.OS === 'ios' ?
    'http://localhost:3000/api/auth/signin' :
    'http://192.168.0.11:3000/api/auth/signin';

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
