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