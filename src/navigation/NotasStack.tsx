import { createStackNavigator } from '@react-navigation/stack';
import DetailNotasScreen from '../screens/auth/student/DetailNotasScreen';
import NotasScreen from '../screens/auth/student/NotasScreen';
export type RootStackParamList = {
  Notas: undefined;
  DetailNotas: {course_id: number };

};
const NotasStack: React.FC = () => {
    const Stack = createStackNavigator<RootStackParamList>();
  
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Notas" component={NotasScreen} />
        <Stack.Screen name="DetailNotas" component={DetailNotasScreen} />
      </Stack.Navigator>
    );
  };
  
  export default NotasStack;
