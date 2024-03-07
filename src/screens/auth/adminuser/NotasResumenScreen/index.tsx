// MaterialScreen.tsx
import React, { useRef, useState } from 'react';
import { StyleSheet, Text, View, ActivityIndicator , Dimensions} from 'react-native';
import {LineChart} from 'react-native-chart-kit';
import { Video, ResizeMode } from 'expo-av';
import { useRoute, RouteProp, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../../../navigation/StudentDrawer';

const screenWidth = Dimensions.get('window').width;

const NotasResumen: React.FC<{ navigation: NavigationProp<any> }> = ({ navigation }) => {
    const chartConfig = {
        backgroundGradientFrom: "#1E2923",
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "#fff",
        backgroundGradientToOpacity: 0.5,
        color: (opacity = 1) => `rgba(128, 0, 255, ${opacity})`,
        strokeWidth: 2, // optional, default 3
        barPercentage: 0.5,
        useShadowColorFromDataset: false // optional
      };
    const data = {
        labels: ["COMUNICACION"],
        datasets: [
          {
            data: [13,10,14],
            
            color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
            strokeWidth: 2 // optional
          },
          {  
            
            data: [20,15,18],
            color: (opacity = 1) => `rgba(119, 163, 69, ${opacity})`, // optional
            strokeWidth: 2 // optional
          },
          {
            data: [0] // min
          },
          {
            data: [20] // max
          },
        ],

        
        legend: ["NOTA PREQUIZZ"] // optional
      };
      const data2 = {
        labels: ["COMUNICA", "WORKFORC", "RETENCIONES"],
        datasets: [
          {
           
            data: [20,15,18],
            color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
            strokeWidth: 2 // optional
          },
          
          {
            data: [0] // min
          },
          {
            data: [20] // max
          },
        ],
        legend: ["NOTA EVALUACION FINAL "] // optional
      };

  return (
    <View style={styles.container}>
      <LineChart
  data={data}
  width={screenWidth}
  height={220}
  chartConfig={chartConfig}
/>
<Text>    </Text>
<Text>    </Text>
<Text>    </Text>
<LineChart
  data={data2}
  width={screenWidth}
  height={220}
  chartConfig={chartConfig}
/>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      marginBottom: 20,
    },
    titleContainer: {
      flex: 1,
      alignItems: 'center',
    },
    legendContainer: {
      flex: 1,
      marginTop: 30,
      alignItems: 'center',
    },
  });
export default NotasResumen;
