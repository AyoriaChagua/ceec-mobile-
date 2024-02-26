import React from 'react';
import { StyleSheet, View, ScrollView, Text } from 'react-native';
import { useRoute, RouteProp, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../../../navigation/StudentDrawer';
import { useModuleScreen } from './../ModuleScreen/hooks/useModule';
import { useNotas} from './../NotasScreen/hooks/useNotas';

type DetailNotasScreenRouteProp = RouteProp<RootStackParamList, 'DetailNotas'>;

const DetailNotasScreen: React.FC<{ navigation: NavigationProp<any> }> = ({ navigation }) => {
  const route = useRoute<DetailNotasScreenRouteProp>();
  const { course_id } = route.params;
  const { courseData, modules } = useModuleScreen(course_id);
  const { notas } = useNotas(course_id);

  // Function to calculate the average of the notes
  const calculateAverage = () => {
    if (notas.length === 0) return 0;
    const totalScore = notas.reduce((accumulator, currentValue) => accumulator + parseFloat(currentValue.total_score), 0);
    return totalScore / notas.length;
  };

  return (
    <ScrollView style={styles.container}>
      {courseData ? (
        <View style={styles.containercourse}>
          <Text style={styles.courseTitle}>{courseData.name}</Text>
          <View style={styles.divider} />

          <View style={styles.rectangle}>
            <Text style={styles.rectangleTitle}>Evaluaciones</Text>
            <View style={styles.rectangleDivider} />

            {notas.map((nota, index) => (
              <View key={index} style={styles.moduleContainer}>
                <Text style={styles.moduleText}>{nota.Evaluation ? nota.Evaluation.name : 'N/A'}</Text>
                <Text style={styles.noteText}>{nota.total_score}</Text>
              </View>
            ))}

            <View style={styles.divider} />

            <View style={styles.moduleContainer}>
              <Text style={styles.moduleText}>Promedio Final:</Text>
              <Text style={[styles.noteText, styles.letraFinal]}>{calculateAverage().toFixed(2)}</Text>
            </View>
          </View>
        </View>
      ) : (
        <Text>Loading...</Text>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  letraFinal: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    backgroundColor: 'white',
  },

  containercourse: {
    padding: 17,
  },
  divider: {
    borderBottomWidth: 1,
    borderColor: '#EAEAED',
    marginBottom: 16,
    marginTop: 8, // Adjust top margin for better spacing
  },
  courseTitle: {
    color: '#4951FF', // Adjust text color
    fontSize: 24, // Decrease font size
    fontWeight: 'normal', // Set to normal font weight
    textAlign: 'center',
  },

  rectangleTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 8,
  },
  rectangleDivider: {
    borderBottomWidth: 1,
    borderColor: '#EAEAED',
    marginBottom: 8,
  },
  rectangle: {
    width: '100%',
    height: 400,
    borderWidth: 2,
    backgroundColor: '#FFFFFF',
    borderColor: '#D9D9D9',
    marginBottom: 16,
    marginTop: 8,
    padding: 16,
  },
  moduleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  moduleText: {
    fontSize: 16,
    color: 'black',
    marginBottom: 8,
  },
  noteText: {
    fontSize: 16,
    color: 'black',
    marginBottom: 8,
  },
});

export default DetailNotasScreen;
