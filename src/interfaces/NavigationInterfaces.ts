export type RootStackParamListAdmin = {
    Login: undefined
    Dashboard: undefined
    Details: { itemId: number }
    AdminDrawer: undefined
    Perfil: undefined
    Cursos: undefined
    Course: { courseId: number }
    Usuarios: undefined
    User: { userId: number }
    CreateCourse: undefined
    CreateUser: undefined
    Users: undefined
    CreateModule: { courseId: number }
    AddStudentsToCourse: { courseId: number }
    StudentsPerCourse: { courseId: number }
};


export type RootStackParamStudent = {
    Login: undefined
    Dashboard: undefined
    Details: { itemId: number }
    StudentDrawer: undefined
    Home: undefined
    Perfil: undefined
    Cursos: undefined
    "Notas / Estado de curso": undefined
    PreQuizz: undefined
};


export type RootStackParamList = {
    Login: undefined
    Dashboard: undefined
    Details: { itemId: number }
    AdminDrawer: undefined
};

