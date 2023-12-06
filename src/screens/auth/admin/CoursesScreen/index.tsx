import { TouchableOpacity, Text, ScrollView } from 'react-native';
import React from 'react';
import { styles } from './styles';
import { CardCourse, LoadIndicator } from '../../../../components';
import useCoursesWithModules from './hooks/useCourses';
import { RootStackParamListAdmin } from '../../../../interfaces/NavigationInterfaces';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { CommonActions } from '@react-navigation/native';


type Props = {
  readonly navigation: NativeStackNavigationProp<RootStackParamListAdmin, 'Details'>;
};

export default function CoursesScreen({ navigation }: Props) {
  const { coursesWithModules, loading, error } = useCoursesWithModules();
  if (loading) {
    return <LoadIndicator animating={true} size='large' />
  }

  if (error) {
    return <Text>Error: {error}</Text>;
  }

  const navigateToDetailScreen = (courseId: number) => {
    navigation.dispatch(
      CommonActions.navigate({
        name: 'Course',
        params: {
          courseId
        },
      })
    );
  };


  return (
    <ScrollView style={styles.container} >
      {coursesWithModules.map(course => (
        <TouchableOpacity key={course.course_id}
        onPress={()=>navigateToDetailScreen(course.course_id)}>
          <CardCourse
            userCount={course.user_count}
            key={course.course_id}
            moduleCount={course.modules.length}
            courseName={course.name}
            createdAt={course.created_at}
          />
        </TouchableOpacity>
      ))}
    </ScrollView>
  )
}
