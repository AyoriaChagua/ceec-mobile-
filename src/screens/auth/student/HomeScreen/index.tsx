import { StyleSheet, Text, View ,  ScrollView,  TouchableOpacity} from 'react-native'
import React  from 'react';
import { Card, Icon } from '@rneui/themed';
import { NavigationProp } from '@react-navigation/native';
import {useCourse} from './hooks/useCourse';

const HomeScreen: React.FC<{ navigation: NavigationProp<any> }> = ({ navigation }) => {
  const { courseData } = useCourse();
    
  return (
    <ScrollView style={styles.container}>
      {courseData.length > 0 ? (
        courseData.map((course, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => navigation.navigate('Module', { course_id: course.course_id })}
          >
            <Card
              key={index}
              containerStyle={{
                backgroundColor: '#D8D9FF',
                borderRadius: 10,
                width: 350,
                height: 270,
              }}
            >
              <Card.Image source={{ uri: course.image }} style={styles.cardImage} />
              <Card.Divider />
              <View style={styles.titleContainer}>
                <Text style={styles.title}>{course.name}</Text>
                <Icon name="arrow-right" size={30} color="#4951FF" />
              </View>
            </Card>
          </TouchableOpacity>
        ))
      ) : (
        <Text>No courses available.</Text>
      )}
    </ScrollView>
  );
};
  const styles = StyleSheet.create({
    container: {
      padding: 16,
    },
    cardImage: {
      width: '100%',
      height: 150,
    },
    titleContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 10,
    },
    title: {
      fontSize: 20,
    },
  });
  export default HomeScreen; 