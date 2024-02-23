import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image  , ImageBackground , TextInput , KeyboardAvoidingView , Platform } from 'react-native';
import React from 'react';
import { useEffect, useState } from 'react';
import { Card, Icon } from '@rneui/themed';
import { useRoute, RouteProp, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../../../navigation/StudentStack';
import { useCourse } from './hooks/useCourse';
import { useAuth } from '../../../../context/AuthContext';
import { windowWidth, windowHeight } from '../../../../utils/Dimentions'; // Importa las dimensiones
import { styles , textStyles} from './styles';
type HomeScreenRouteProp = RouteProp<RootStackParamList, 'Home'>;

const HomeScreen: React.FC<{ navigation: NavigationProp<any> }> = ({ navigation }) => {
  const { courseData, firstName } = useCourse();
  const { profileInfo } = useAuth();
  const [searchText, setSearchText] = useState<string>('');

  const filterCourses = (text: string) => {
    return courseData.filter(course => course.name.toLowerCase().includes(text.toLowerCase()));
  };

  const filteredData = filterCourses(searchText);
  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={[textStyles.headerText, { color: '#3C63FF', fontSize: 40 }]}>¡Hola {firstName}!</Text>
          <TextInput
            style={styles.searchInput}
            placeholder="🔍 Buscar cursos..."
            placeholderTextColor="#ffffff"
            onChangeText={setSearchText}
            value={searchText}
          />
          <Text style={[textStyles.headerText, textStyles.courseTitle, { color: '#3C63FF' }]}>Cursos</Text>
        </View>
        <ScrollView contentContainerStyle={[styles.scrollViewContent, { paddingBottom: windowHeight * 0.25 }]}>
          {filteredData.length > 0 ? (
            filteredData.map((course, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => navigation.navigate('Module', { course_id: course.course_id })}
              >
                <Card
                  key={index}
                  containerStyle={[styles.cardContainer, {backgroundColor: course.background_color}]}
                >
                  <View style={styles.cardContent}>
                    <View style={styles.imageContainer}>
                      <Image source={{ uri: course.image }} style={styles.cardImage} />
                    </View>
                    <View style={styles.contentContainer}>
                      <Text style={textStyles.courseTitle}>{course.name}</Text>
                    </View>
                  </View>
                </Card>
              </TouchableOpacity>
            ))
          ) : (
            <Text style={textStyles.loadingText}>No se encontraron cursos.</Text>
          )}
          <ImageBackground
            source={require('../../../../../assets/images/cursos/vector.png')}
            style={[styles.bottomImage, { height: windowHeight * 0.25, width: '100%' }]}
          />
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  );
};

export default HomeScreen;
