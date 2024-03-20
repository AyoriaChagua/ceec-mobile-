import { StyleSheet, Text, View ,  ScrollView,  TouchableOpacity} from 'react-native'
import React  from 'react';
import { Card, Icon } from '@rneui/themed';
import { useRoute, RouteProp,  NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../../../navigation/StudentDrawer';
import {useCourse} from './../HomeScreen/hooks/useCourse';

const NotasScreen: React.FC<{ navigation: NavigationProp<any> }> = ({ navigation }) => {
  const { courseData } = useCourse();
    
  return (
    <ScrollView style={styles.container}>
      {courseData.campaignCourses.length > 0 ? (
        courseData.campaignCourses.map((course, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => navigation.navigate('DetailNotas', { course_id: course.Course.course_id })}
          >
            <Card
              key={index}
              containerStyle={{
                backgroundColor: '#D8D9FF',
                borderRadius: 0,
                width: 360,
                height: 180,
              }}
            >
              <Card.Divider />
              <View style={styles.titleContainer}>
              <Text style={styles.title}>{course.Course.name}</Text>

              {/* Agregar el Text para mostrar el estado del curso */}
              
            </View>

            <Text style={styles.estadoCurso}>
                Estado de Curso: {course.Course.is_finish ? 'Completado' : 'Pendiente'}
              </Text>
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
      height: 180,
    },
    titleContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 10,
     
      
    },
    estadoCurso: {
        fontSize: 12,
        color: '#4951FF',
        marginTop: 20,
        marginLeft:10,
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
  export default NotasScreen; 