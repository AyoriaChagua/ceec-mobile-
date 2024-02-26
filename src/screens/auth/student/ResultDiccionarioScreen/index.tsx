import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity ,ScrollView  } from 'react-native';
import { useRoute, RouteProp, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../../../navigation/StudentDrawer';

type ResultDiccionarioScreenRouteProp = RouteProp<RootStackParamList, 'ResultDiccionario'>;

const   ResultDiccionarioScreen : React.FC<{ navigation: NavigationProp<any> }> = ({ navigation }) => {
  const route = useRoute< ResultDiccionarioScreenRouteProp>();
  const { totalQuestions, correctAnswers } = route.params;
  const formatTime = (timeInSeconds: number) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  };
  const handleGetPosition = () => {
    navigation.navigate('Home');
  };


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Score - CEEC </Text>
      <View style={styles.starContainer}>
        <View style={styles.starImageContainer}>
          <Image
            source={require('./../../../../../assets/images/Star.png')}
            style={styles.starImage}
          />
        
        </View>
        <Text style={styles.title}> Mensaje  </Text>

          <Text style={styles.circleText}>{correctAnswers} / {totalQuestions} </Text>
            <Text style={styles.circleText}>Correctas</Text>
         
         
       
        
        <TouchableOpacity onPress={handleGetPosition} style={styles.positionButton}>
          <Text style={styles.positionButtonText}>REGRESAR</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    color: '#fff',
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
  circleText: {
    fontSize: 28,
    marginTop: 25,
    color: '#4951FF',
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

export default ResultDiccionarioScreen;