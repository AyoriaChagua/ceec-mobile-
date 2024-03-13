import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import CheckBox from '@react-native-community/checkbox';


const screenWidth = Dimensions.get('window').width;

const NotasResumen = () => {
  const [notaspre] = useState([
    {
      id: 2,
      course_id: 2,
      user_id: 3,
      progress: 0,
      is_approved: null,
      created_at: '2024-01-12T15:00:46.367Z',
      updated_at: '2024-01-12T15:00:46.367Z',
      Course: {
        name: 'La Comunicación',
        preQuizzResultModels: [
          {
            pre_result_id: 1,
            puntaje: '0',
            efectividad: '0',
            user_id: 3,
            course_id: 2,
          },
        ],
        CampaignCourses: [
          {
            campaign_course_id: 3,
            campaign_id: 2,
            course_id: 2,
          },
        ],
      },
    },
    {
      id: 7,
      course_id: 4,
      user_id: 3,
      progress: 0,
      is_approved: null,
      created_at: '2024-02-26T19:14:13.046Z',
      updated_at: '2024-02-26T19:14:13.046Z',
      Course: {
        name: 'Retenciones',
        preQuizzResultModels: [
          {
            pre_result_id: 7,
            puntaje: '2',
            efectividad: '40',
            user_id: 3,
            course_id: 4,
          },
        ],
        CampaignCourses: [
          {
            campaign_course_id: 2,
            campaign_id: 2,
            course_id: 4,
          },
        ],
      },
    },
    {
      id: 1,
      course_id: 1,
      user_id: 3,
      progress: 0,
      is_approved: null,
      created_at: '2024-01-12T15:00:46.367Z',
      updated_at: '2024-01-12T15:00:46.367Z',
      Course: {
        name: 'Workforce Management- Best Practice',
        preQuizzResultModels: [],
        CampaignCourses: [
          {
            campaign_course_id: 4,
            campaign_id: 2,
            course_id: 1,
          },
        ],
      },
    },
  ]);

  const [selectedCourses, setSelectedCourses] = useState<string[]>([]);

  const handleCheckboxChange = (courseName: string) => {
    if (selectedCourses.includes(courseName)) {
      setSelectedCourses(selectedCourses.filter((course) => course !== courseName));
    } else {
      setSelectedCourses([...selectedCourses, courseName]);
    }
  };

  const chartConfig = {
    backgroundGradientFrom: '#1E2923',
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: '#fff',
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(128, 0, 255, ${opacity})`,
    strokeWidth: 2,
    barPercentage: 0.5,
    useShadowColorFromDataset: false,
  };

  const data = {
    labels: selectedCourses,
    datasets: [
      {
        data: selectedCourses.map((courseName) =>
          parseFloat(
            notaspre.find((nota) => nota.Course.name === courseName)?.Course.preQuizzResultModels[0]?.puntaje ?? '0'
          )
        ),
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`,
        strokeWidth: 2,
      },
    ],
    legend: ['NOTA PREQUIZZ'],
  };

  return (
    <View style={styles.container}>
      <View style={styles.checkboxContainer}>
        {notaspre.map((nota) => (
          <View key={nota.id} style={styles.checkboxItem}>
            <CheckBox
              value={selectedCourses.includes(nota.Course.name)}
              onValueChange={() => handleCheckboxChange(nota.Course.name)}
            />
            <Text>{nota.Course.name}</Text>
          </View>
        ))}
      </View>
      <LineChart data={data} width={screenWidth} height={220} chartConfig={chartConfig} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkboxContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  checkboxItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
  },
});

export default NotasResumen;
