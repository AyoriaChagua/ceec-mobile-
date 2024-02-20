import { createStackNavigator } from '@react-navigation/stack';
import CourseQuizScreen from '../screens/auth/student/CourseQuizScreen';
import PreQuizScreen from '../screens/auth/student/PreQuizScreen';
import ResultPreQuizScreen from '../screens/auth/student/ResultPreQuizScreen';
export type RootStackParamList = {
  CourseQuiz: undefined;
  PreQuiz: {course_id: number };
  ResultPreQuiz :{   totalQuestions : number  , correctAnswers :number };

};
const NotasStack: React.FC = () => {
    const Stack = createStackNavigator<RootStackParamList>();
  
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="CourseQuiz" component={CourseQuizScreen} />
        <Stack.Screen name="PreQuiz" component={PreQuizScreen} />
        <Stack.Screen name="ResultPreQuiz" component={ResultPreQuizScreen} />
      </Stack.Navigator>
    );
  };
  
  export default NotasStack;
