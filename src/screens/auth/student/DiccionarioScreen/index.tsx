
import React, { useEffect, useState, useCallback } from 'react';
import { StyleSheet, View, Text, TouchableOpacity , Image } from 'react-native';
import { useRoute, RouteProp, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../../../navigation/StudentStack';
import { quizScreenStyles as styles  } from './style'; 
import { useDiccionario } from './hooks/useDiccionarioLogic';


type QuizScreenRouteProp = RouteProp<RootStackParamList, 'Diccionario'>;

const QuizScreen: React.FC<{ navigation: NavigationProp<any> }> = ({ navigation }) => {
  const route = useRoute< QuizScreenRouteProp>();
  const { moduleId } = route.params;
  const {
    questions,
    ques,
    options,
    score,
    isLoading,
    selectedOption,
    isCorrect,
    totalScore,
    formatTime,
    handleNextPress,
    handlSelectedOption,
    totalQuestions,
    calculateEffectiveness,
  } = useDiccionario(moduleId);

  const [elapsedTime, setElapsedTime] = useState<number>(0);


  
  useEffect(() => {
    const interval = setInterval(() => {
      setElapsedTime((prevTime) => prevTime + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);
 
  
  const handleShowResult = () => {
    navigation.navigate('ResultDiccionario', {
      totalQuestions: totalQuestions, 
      correctAnswers: score 
    });
  };
  
  return (
    
    <View style={styles.container}>
      
  
      {isLoading ? (
        <View style={styles.loadingContainer}>
          <Text style={styles.loadingText}>CARGANDO...</Text>
        </View>
      ) : questions && ques < questions.length ? (
        <View style={styles.parent}>
        <View style={styles.top}>
  {/* Agregar el tiempo transcurrido */}
  <Text style={styles.elapsedTimeText}>{`Tiempo: ${elapsedTime}`}</Text>

  {/* Agregar la imagen encima de la pregunta */}
  <Image
    source={{ uri: questions[ques].word }}
    style={styles.questionImage}
  />
</View>

          <View style={styles.options}>
          {options.map((opt, index) => (
  <TouchableOpacity
    key={index}
    style={[
      styles.optionButton,
      (selectedOption !== null && !isCorrect && opt !== questions[ques].correct_answer) ? styles.incorrectOption : null,
      selectedOption === opt && (isCorrect ? styles.correctOption : null),
    ]}
    onPress={() => handlSelectedOption(opt)}
    disabled={selectedOption !== null}
  >
    <Text style={styles.optionText}>{decodeURIComponent(opt)}</Text>
  </TouchableOpacity>
))}

          </View>
          <View style={styles.bottom}>
            {ques === questions.length - 1 && selectedOption !== null && (
              <TouchableOpacity
                style={styles.button}
                onPress={handleShowResult}
                disabled={selectedOption === null}
              >
                <Text style={styles.buttonText}>Finalizar</Text>
              </TouchableOpacity>
            )}
            {ques < questions.length - 1 && selectedOption !== null && (
              <TouchableOpacity style={styles.button} onPress={handleNextPress} disabled={selectedOption === null}>
                <Text style={styles.buttonText}>Siguiente</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      ) : (
        <View style={styles.noQuestionsContainer}>
          <Text>No hay preguntas disponibles.</Text>
        </View>
      )}
    </View>
  );
};
export default QuizScreen;
