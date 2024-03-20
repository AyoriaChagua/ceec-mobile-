export type RootStackParamListAdmin = {
    RankingCourseEvaluation:{ course_id: number }
    Ranking: undefined
    DescargaDatos : undefined
    Login: undefined
    NotasResumen: undefined
    Dashboard: undefined
    Details: { itemId: number }
    AdminDrawer: undefined
    Perfil: undefined
    Cursos: { campaign_id: number }
    Campaña : undefined
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
    NotasResumen: undefined
    Login: undefined
    Dashboard: undefined
    Details: { itemId: number }
    AdminDrawer: undefined
};

