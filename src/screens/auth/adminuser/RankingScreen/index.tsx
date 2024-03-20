import { TouchableOpacity, Text, ScrollView, View } from 'react-native';
import React, { useState } from 'react';
import { styles } from './styles';
import { useRoute, RouteProp, NavigationProp } from '@react-navigation/native';
import { CourseCardAdmin, LoadIndicator } from '../../../../components';
import { RootStackParamListAdmin } from '../../../../interfaces/NavigationInterfaces';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { CommonActions, useFocusEffect } from '@react-navigation/native';
import { Card, Icon } from '@rneui/themed';
import {useCourse} from './hooks/useCourse';
type CursosScreenRouteProp = RouteProp<RootStackParamListAdmin, 'Ranking'>;

const RankingScreen : React.FC<{ navigation: NavigationProp<any> }> = ({ navigation }) => {
    const route = useRoute<CursosScreenRouteProp>();

    const [selectedCourse, setSelectedCourse] = useState('');
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const { courses } = useCourse();
    return (
      <View style={{ flex: 1, backgroundColor: "#fff" }} >
        <ScrollView  >
            <View style={styles.container} >
          <View style={{ padding: 10, width:200, margin: 10, borderRadius: 5 }}>
            <Text style={{ color: "#4951FF",fontSize: 20, fontWeight: 'bold' }}>Cursos</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor:  "#FAFAFF" }}>
              {!dropdownVisible && <Text style={{ color: "#4951FF"}}>{selectedCourse}</Text>}
              <TouchableOpacity onPress={() => setDropdownVisible(!dropdownVisible)}>
                <Icon name="chevron-down" type='font-awesome' size={24} color={"#4951FF"}  />
              </TouchableOpacity>
            </View>
            {dropdownVisible && courses.map((curso, index) => (
              <TouchableOpacity key={index} onPress={() => { setSelectedCourse(curso.name); setDropdownVisible(false); navigation.navigate('RankingCourseEvaluation', { course: curso.course_id }); }}>
                <Text style={{ fontSize: 18, marginTop: 10 , color:"#4951FF"}}>{curso.name   }</Text>
              </TouchableOpacity>
            ))}
          </View>
          </View>
        </ScrollView>
      </View>
    )
}

export default RankingScreen;