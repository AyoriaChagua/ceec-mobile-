import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/auth/student/HomeScreen';
import ModuleScreen from '../screens/auth/student/ModuleScreen';
import MaterialScreen from '../screens/auth/student/MaterialScreen';
import FlashCardScreen from '../screens/auth/student/FlashCardScreen';
import EvaluacionScreen from '../screens/auth/student/EvaluacionScreen';
import DiccionarioScreen from '../screens/auth/student/DiccionarioScreen';
import QuizScreen from '../screens/auth/student/QuizScreen';
import ResultScreen from '../screens/auth/student/ResultScreen';
import ResultDiccionario from '../screens/auth/student/ResultDiccionarioScreen';
import RankingScreen from '../screens/auth/student/RankingScreen';
export type RootStackParamList = {
  Home: undefined;
  Module: { course_id: number };
  Material: {  moduleId: number };
  FlashCard: {  moduleId: number };
  Evaluacion: {  moduleId: number };
  Diccionario:  {  moduleId : number };
  Quiz :  {  evaluationId : number };
Result:  {  totalScore : number  , elapsedTime : number , evaluationId :number ,  effectiveness: number};
ResultDiccionario :  {   totalQuestions : number  , correctAnswers :number };
Ranking :  {  totalScore : number , evaluationId : number};
  // ... other screens
};
const StudentStack: React.FC = () => {
    const Stack = createStackNavigator<RootStackParamList>();
  
    return (
      <Stack.Navigator screenOptions={{ headerShown: false  }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Module" component={ModuleScreen} />
        <Stack.Screen name="Material" component={MaterialScreen} />
        <Stack.Screen name="FlashCard" component={FlashCardScreen} />
        <Stack.Screen name="Evaluacion" component={EvaluacionScreen} />
        <Stack.Screen name="Diccionario" component={DiccionarioScreen} />
        <Stack.Screen name="Quiz" component={QuizScreen} />
        <Stack.Screen name="Result" component={ResultScreen} />
        <Stack.Screen name="Ranking" component={RankingScreen} />
        <Stack.Screen name="ResultDiccionario" component={ResultDiccionario} />
      </Stack.Navigator>
    );
  };
  
  export default StudentStack;
