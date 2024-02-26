import { StyleSheet, Text, View ,  ScrollView,  TouchableOpacity} from 'react-native'
import React  from 'react';
import { Card, Icon } from '@rneui/themed';
import { useRoute, RouteProp,  NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../../../navigation/StudentDrawer';
import {useCourse} from '../HomeScreen/hooks/useCourse';
type CourseQuizScreenRouteProp = RouteProp<RootStackParamList, 'CourseQuiz'>;
const CourseQuizScreen: React.FC<{ navigation: NavigationProp<any> }> = ({ navigation }) => {
  const { courseData } = useCourse();
    
  return (
    <ScrollView style={styles.container}>
      {courseData.length > 0 ? (
        courseData.map((course, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => navigation.navigate('PreQuiz', { course_id: course.course_id })}
          >
            <Card
              key={index}
              containerStyle={{
                backgroundColor: '#D8D9FF',
                borderRadius: 20,
                width: 360,
                height: 190,
              }}
            >
               <View style={styles.titleContainer}>
                <Text style={styles.title}>PREQUIZ</Text>
                </View>
              <Card.Divider />
              <View style={styles.titleContainer}>
                <Text style={styles.title}>{course.name}</Text>
              </View>
              <Icon name="arrow-right" size={60} color="#4951FF" style={styles.icon} />
            </Card>
          </TouchableOpacity>
        ))
      ) : (
        <Text>Cargando...</Text>
      )}
    </ScrollView>
  );
};
  const styles = StyleSheet.create({
    container: {

      padding: 15,
      backgroundColor: '#F8F7FB',
    },
    cardImage: {
      width: '100%',
      height: 170,
    },
    titleContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 10,
      
    },
    title: {
      fontSize: 20,
      color : '#4951FF',
    }, 
    icon: {
      marginLeft: 'auto', // Move icon to the right
      marginTop: 'auto', // Align icon to the bottom
    }
  });
  export default CourseQuizScreen; 