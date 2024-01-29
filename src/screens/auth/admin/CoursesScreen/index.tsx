import { TouchableOpacity, Text, ScrollView, View } from 'react-native';
import React from 'react';
import { styles } from './styles';
import { CardCourse, LoadIndicator } from '../../../../components';
import useCoursesWithModules from './hooks/useCourses';
import { RootStackParamListAdmin } from '../../../../interfaces/NavigationInterfaces';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { CommonActions, useFocusEffect } from '@react-navigation/native';
import { Icon } from 'react-native-paper';


type Props = {
  readonly navigation: NativeStackNavigationProp<RootStackParamListAdmin, 'Course'>;
};

export default function CoursesScreen({ navigation }: Props) {
  const { coursesWithModules, loading, error, fetchData } = useCoursesWithModules();

  useFocusEffect(
    React.useCallback(() => {
      fetchData();
    }, [])
  );

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

  const navigateToCreateCourse = () => {
    navigation.dispatch(
      CommonActions.navigate({
        name: "CreateCourse"
      })
    )
  }

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView style={styles.container} >
        {coursesWithModules.map(course => (
          <TouchableOpacity key={course.course_id}
            onPress={() => navigateToDetailScreen(course.course_id)}>
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
      <TouchableOpacity
        style={styles.bottomButton}
        onPress={() => navigateToCreateCourse()}>
        <Icon size={45} source={"plus-circle"} color='#4951FF' />
      </TouchableOpacity>
    </View>
  )
}
