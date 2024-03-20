import { TouchableOpacity, Text, ScrollView, View, Image } from 'react-native';
import React, { useState } from 'react';
import { styles } from './styles';
import { useRoute, RouteProp, NavigationProp } from '@react-navigation/native';
import { CourseCardAdmin, LoadIndicator } from '../../../../components';
import { RootStackParamListAdmin } from '../../../../interfaces/NavigationInterfaces';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { CommonActions, useFocusEffect } from '@react-navigation/native';
import { Card, Icon } from '@rneui/themed';

type RankingCourseRouteProp = RouteProp<RootStackParamListAdmin, 'Ranking'>;

const RankingCourseEvaluation : React.FC<{ navigation: NavigationProp<any> }> = ({ navigation }) => {
    const cursos = ['cursos1', 'curso2', 'curso3'];
    const [selectedCourse, setSelectedCourse] = useState('');
    const [dropdownVisible, setDropdownVisible] = useState(false);
  
    return (
      <View style={{ flex: 1, backgroundColor: "#fff" }} >
        <ScrollView  >
          <View style={{ flexDirection: 'row', margin: 10, padding: 10, backgroundColor: '#ddd', borderRadius: 10 }}>
            <Image source={{ uri: 'https://res.cloudinary.com/dhfsbbos3/image/upload/v1708704757/cld-sample-4.jpg' }} style={{ width: 100, height: 100, borderRadius: 10 }} />
            <View style={{ marginLeft: 10 }}>
              <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Angela Maria</Text>
              <Text style={{ fontSize: 16 }}>18 puntos</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    )
}

export default RankingCourseEvaluation;