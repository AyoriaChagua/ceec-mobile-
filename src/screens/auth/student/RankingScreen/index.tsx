import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useRoute, RouteProp, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../../../navigation/StudentStack';

type RankingScreenRouteProp = RouteProp<RootStackParamList, 'Ranking'>;

const   RankingScreen : React.FC<{ navigation: NavigationProp<any> }> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>RANKING DE</Text>
      <Text style={styles.subtitle}>PARTICIPANTES</Text>
      <View style={styles.rectangle}>
        <View style={styles.topCircleContainer}>
          <View style={styles.circleContainer}>
            <Image
              source={require('./../../../../../assets/images/perfil.jpg')}
              style={styles.circleImage}
            />
            <Text style={styles.circleText}>Alejandra Feranadez</Text>
            <View style={styles.pointsContainer}>
              <Text style={styles.pointsText}>18 puntos</Text>
            </View>
          </View>
        </View>
        <View style={styles.bottomCircleContainer}>
          <View style={[styles.circleContainer, styles.leftCircle]}>
            <Image
              source={require('./../../../../../assets/images/perfil.jpg')}
              style={styles.circleImage}
            />
            <Text style={styles.circleText}>Maria Fernandez</Text>
            <View style={styles.pointsContainer}>
              <Text style={styles.pointsText}>20 puntos</Text>
            </View>
          </View>
          <View style={[styles.circleContainer, styles.rightCircle]}>
            <Image
              source={require('./../../../../../assets/images/perfil.jpg')}
              style={styles.circleImage}
            />
            <Text style={styles.circleText}>Claudia Villanueva</Text>
            <View style={styles.pointsContainer}>
              <Text style={styles.pointsText}>20 puntos</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.extraRectangle}>
        <Text style={styles.extraText1}>17 </Text>
        <Text style={styles.extraText2}>
          Estuviste cerca de entrar en el podio!! {"\n"}
          Tendrás más suerte a la próxima
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4951FF',
    marginTop: 20,
  },
  subtitle: {
    marginTop: 5,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4951FF',
  },
  rectangle: {
    width: '90%',
    height: 450,
    backgroundColor: '#D5D7FF',
    marginTop: 25,
    borderRadius: 20,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  extraRectangle: {
    width: '90%',
    height: 150,
    backgroundColor: '#88D4FF',
    margin: 15,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  extraText1: {
    fontSize: 40,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  extraText2: {
   fontWeight: 'bold',
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
  },
  topCircleContainer: {
    alignItems: 'center',
  },
  bottomCircleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  circleContainer: {
    alignItems: 'center',
  },
  leftCircle: {
    marginRight: 22,
  },
  rightCircle: {
    marginLeft: 22,
  },
  circleImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  circleText: {
    fontSize: 14,
    color: '#000000',
    fontWeight: 'bold',
  },
  pointsContainer: {
    backgroundColor: '#4951FF',
    borderRadius: 5,
    marginTop: 9,
    width: 120,
    padding: 5,
  },
  pointsText: {
    fontSize: 14,
    color: 'white',
    textAlign: 'center',
  },
});

export default RankingScreen;
