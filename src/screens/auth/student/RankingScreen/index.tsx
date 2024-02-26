import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useRoute, RouteProp, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../../../navigation/StudentDrawer';
import { useRankingEvaluation } from './hooks/useRankingEvaluation';

type RankingScreenRouteProp = RouteProp<RootStackParamList, 'Ranking'>;

const RankingScreen: React.FC<{ navigation: NavigationProp<any> }> = ({ navigation }) => {
  const route = useRoute<RankingScreenRouteProp>();
  const { totalScore, evaluationId } = route.params;
  const { ranking, loading } = useRankingEvaluation(evaluationId);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>RANKING DE</Text>
      <Text style={styles.subtitle}>PARTICIPANTES</Text>
      <View style={styles.rectangle}>
        {loading ? (
          <Text>Loading...</Text>
        ) : (
          <>
            {ranking.map((student, index) => (
              <View key={index} style={index === 0 ? styles.topCircleContainer : styles.bottomCircleContainer}>
                <View style={styles.circleContainer}>
                  <Image source={require('./../../../../../assets/images/perfil.jpg')} style={styles.circleImage} />
                  <Text style={styles.circleText}>{student.User.Profile.first_name}</Text>
                  <View style={styles.pointsContainer}>
                    <Text style={styles.pointsText}>{student.total_score} puntos</Text>
                  </View>
                </View>
              </View>
            ))}
          </>
        )}
      </View>
      <View style={styles.extraRectangle}>
        <Text style={styles.extraText1}>{totalScore} </Text>
        <Text style={styles.extraText2}>Ingresaste en el podio!!</Text>
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
