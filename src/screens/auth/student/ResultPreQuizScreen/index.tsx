import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useRoute, RouteProp, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../../../navigation/PreQuizStack';

type ResultPreQuizScreenRouteProp = RouteProp<RootStackParamList, 'ResultPreQuiz'>;

const ResultPreQuizScreen: React.FC<{ navigation: NavigationProp<any> }> = ({ navigation }) => {
  const route = useRoute<ResultPreQuizScreenRouteProp>();
  const { totalQuestions, correctAnswers } = route.params;
  const formatTime = (timeInSeconds: number) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  };
  const handleGetPosition = () => {
    navigation.navigate('CourseQuiz');
  };

  const renderEmojis = () => {
    if (correctAnswers < totalQuestions * 0.5) {
      // Si menos de la mitad de las respuestas son correctas, mostrar caritas tristes
      return (
        <Image
          source={require('./../../../../../assets/images/triste.gif')} // Ajusta la ruta de la imagen
          style={styles.emojiImage}
        />
      );
    } else {
      // Si la mitad o más de las respuestas son correctas, mostrar confeti
      return (
        <Image
          source={require('./../../../../../assets/images/confeti.gif')} // Ajusta la ruta de la imagen
          style={styles.emojiImage}
        />
      );
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>RESULTADOS</Text>
      <View style={styles.starContainer}>
        <View style={styles.starImageContainer}>
          {renderEmojis()}
        </View>
        <View style={styles.circlesContainer}>
          <View style={styles.circle}>
            <Text style={styles.circleText}>{correctAnswers}</Text>
            <Text style={styles.circleText}>Correctas</Text>
          </View>
          <View style={styles.circle}>
            <Text style={styles.circleText}>{totalQuestions}</Text>
            <Text style={styles.circleText}>Preguntas</Text>
          </View>
        </View>
        <TouchableOpacity onPress={handleGetPosition} style={styles.positionButton}>
          <Text style={styles.positionButtonText}>REGRESAR</Text>
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

    backgroundColor: '#FFFFFF'
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
    backgroundColor: '#FFFFFF'
  },
  starImageContainer: {
    position: 'relative',
    width: 200, // Ajusta el ancho según sea necesario
    height: 200, // Ajusta el alto según sea necesario
  },
  emojiImage: {
    flex: 1,
    width: undefined,
    height: undefined,
    resizeMode: 'contain',
  
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
    maxWidth: '100%', // Establecer el ancho máximo para evitar desbordamiento
  },
  circle: {
    flex: 1, // Ocupa espacio igual
    maxWidth: 200, // Ajusta el ancho según sea necesario
    height: 200, // Ajusta el alto según sea necesario
    borderRadius: 100, // Para hacer un círculo
    backgroundColor: 'white',
    borderColor: '#4951FF',
    borderWidth: 15,
    marginHorizontal: 10, // Ajusta el espaciado entre los círculos
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleText: {
    fontSize: 20,
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

export default ResultPreQuizScreen;
