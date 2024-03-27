import { TouchableOpacity, Text, ScrollView, View } from 'react-native';
import React from 'react';
import { styles } from './styles';
import { CampaignCardAdmin, LoadIndicator } from '../../../../components';
import {useCampaigns }  from './hooks/useCampaigns';
import { RootStackParamListAdmin } from '../../../../interfaces/NavigationInterfaces';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { CommonActions, useFocusEffect } from '@react-navigation/native';
import { Icon } from 'react-native-paper';
import { getCurrentDateAsString } from '../../../../utils/Dates';

type Props = {
  readonly navigation: NativeStackNavigationProp<RootStackParamListAdmin, 'Course'>;
};

export default function CampaignScreen({ navigation }: Props) {
  const { loading, campaigns } = useCampaigns();


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
        {/* Mapeo de campañas */}
        {campaigns.map(campaign => (
          <TouchableOpacity key={campaign.campaign_id}  onPress={() => navigation.navigate('Cursos', { campaign_id: campaign.campaign_id })}>
            <CampaignCardAdmin
              userCount={9}
              key={campaign.campaign_id}
              courseId={campaign.campaign_id}
              moduleCount={campaign.campaign_id}
              courseName={campaign.name}
              createdAt={campaign.limit_date}
              background_color={"4951FF"}
              navigateToCreateModule={navigateToCreateModuleScreen}
              navigateToAddStudents={navigateToAddStudentsScreen}
              navigateToStudentsPerCourse={navigateToStudentsPerCourseScreen}
            />
          </TouchableOpacity>
        ))}
      </ScrollView>
  
      {/* Botón para crear campaña */}
      <TouchableOpacity
        style={styles.bottomButton}
        onPress={() => navigateToCreateCourse()}>
        {/* Aquí debes envolver el componente <Icon> dentro de un componente de texto */}
        <Text>
          <Icon size={45} source={"plus-circle"} color='#4951FF' />
        </Text>
      </TouchableOpacity>
    </View>
  )

};