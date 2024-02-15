import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity ,ScrollView  } from 'react-native';
import { useRoute, RouteProp, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../../../navigation/StudentStack';

type ResultScreenRouteProp = RouteProp<RootStackParamList, 'Result'>;

const   ResultScreen : React.FC<{ navigation: NavigationProp<any> }> = ({ navigation }) => {
  const route = useRoute< ResultScreenRouteProp>();
  const { totalScore , elapsedTime , evaluationId , effectiveness} = route.params;
  const formatTime = (timeInSeconds: number) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  };
  const handleRedirect  = () => {
    navigation.navigate('Evaluacion', {
      evaluationId : evaluationId
    });
  };

  const handleGetPosition = () => {
    navigation.navigate('Ranking');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>RESULTADOS</Text>
      <View style={styles.starContainer}>
        <View style={styles.starImageContainer}>
          <Image
            source={require('./../../../../../assets/images/Star.png')}
            style={styles.starImage}
          />
          <Text style={styles.points}>{totalScore} PUNTOS</Text>
        </View>
        <View style={styles.circlesContainer}>
          <View style={styles.circle}>
          <Text style={styles.circleText}>{formatTime(elapsedTime)}</Text>
            <Text style={styles.circleText}>Duración</Text>
          </View>
          <View style={styles.circle}>
            <Text style={styles.circleText}> {effectiveness} %</Text>
            <Text style={styles.circleText}>Efectividad</Text>
          </View>
        </View>
        <TouchableOpacity onPress={handleRedirect}>
          <Text style={styles.redirectText}>¿QUIERES MEJORAR TU RESULTADO?</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleGetPosition} style={styles.positionButton}>
          <Text style={styles.positionButtonText}>TU POSICIÓN</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4951FF',
    marginBottom: 10,
  },
  starContainer: {
    position: 'relative',
    alignItems: 'center',
    marginTop: 10,
  },
  starImageContainer: {
    position: 'relative',
    width: 200, // Adjust the width as needed
    height: 200, // Adjust the height as needed
  },
  starImage: {
    flex: 1,
    width: undefined,
    height: undefined,
    resizeMode: 'contain',
    tintColor: '#4951FF',
  },
  points: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -50 }, { translateY: -10 }],
    fontSize: 18,
    color: 'white',
  },
  circlesContainer: {
    flexDirection: 'row',
    marginTop: 40,
    maxWidth: '100%', // Set maximum width to prevent overflow
  },
  circle: {
    flex: 1, // Take up equal space
    maxWidth: 200, // Adjust the width as needed
    height: 200, // Adjust the height as needed
    borderRadius: 100, // To make it a circle
    backgroundColor: 'white',
    borderColor: '#4951FF',
    borderWidth: 15,
    marginHorizontal: 10, // Adjust the spacing between circles
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleText: {
    fontSize: 19,
    marginTop: 6,
    color: '#000000',
    fontWeight: 'bold',
    
  },
  redirectText: {
    marginTop: 30,
    fontSize: 16,
    color: '#4951FF',
    textDecorationLine: 'underline',
  },
  positionButton: {
    marginTop: 40,
    backgroundColor: '#4951FF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  positionButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default ResultScreen;