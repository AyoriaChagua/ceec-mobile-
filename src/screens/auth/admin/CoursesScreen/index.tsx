import { TouchableOpacity, Text, ScrollView, View } from 'react-native';
import React from 'react';
import { styles } from './styles';
import { useRoute, RouteProp, NavigationProp } from '@react-navigation/native';
import { CourseCardAdmin, LoadIndicator } from '../../../../components';
import useCoursesWithModules from './hooks/useCourses';
import { RootStackParamListAdmin } from '../../../../interfaces/NavigationInterfaces';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { CommonActions, useFocusEffect } from '@react-navigation/native';
import { Icon } from 'react-native-paper';



type CursosScreenRouteProp = RouteProp<RootStackParamListAdmin, 'Cursos'>;

const CoursesScreen : React.FC<{ navigation: NavigationProp<any> }> = ({ navigation }) => {
  const route = useRoute<CursosScreenRouteProp>();
  const { params } = route;
  const { coursesWithModules, loading, error } = useCoursesWithModules(params.campaign_id);

  
  if (loading) {
    return <LoadIndicator animating={true} size='large' />
  }

  if (error) {
    return <Text>Error: {error}</Text>;
  }

  const navigateToCreateCourse = () => {
    navigation.dispatch(
      CommonActions.navigate({
        name: "CreateCourse"
      })
    )
  }

  const navigateToCreateModuleScreen = (courseId: number) => {
    navigation.dispatch(
      CommonActions.navigate({
        name: 'CreateModule',
        params: {
          courseId
        },
      })
    );
  };

  const navigateToAddStudentsScreen = (courseId: number) => {
    navigation.dispatch(
      CommonActions.navigate({
        name: 'AddStudentsToCourse',
        params: {
          courseId
        },
      })
    );
  };

  const navigateToStudentsPerCourseScreen = (courseId: number) => {
    navigation.dispatch(
      CommonActions.navigate({
        name: 'StudentsPerCourse',
        params: {
          courseId
        },
      })
    );
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView style={styles.container} >
        {coursesWithModules.map(course => (
          <CourseCardAdmin
            userCount={9}
            key={course.Course.course_id}
            courseId={course.Course.course_id}
            moduleCount={course.Course.modules.length}
            courseName={course.Course.name}
            createdAt={course.Course.created_at}
            background_color={course.Course.background_color}
            navigateToCreateModule={navigateToCreateModuleScreen}
            navigateToAddStudents={navigateToAddStudentsScreen}
            navigateToStudentsPerCourse={navigateToStudentsPerCourseScreen}
          />
        ))}
      </ScrollView>
      <TouchableOpacity
        style={styles.bottomButton}
        onPress={() => navigateToCreateCourse()}>
        <Icon size={45} source={"plus-circle"} color='#4951FF' />
      </TouchableOpacity>
    </View>
  )
}

export default CoursesScreen;