// PreQuizScreen.tsx
import React, { useEffect, useState, useCallback } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, ScrollView, ActivityIndicator } from 'react-native';
import { useRoute, RouteProp, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../../../navigation/StudentDrawer';
import { quizScreenStyles as styles } from './style';
import { usePreQuiz } from './hooks/usePreQuizLogic';
import FloatingEmotion from './../../../../components/FloatingEmotion';


type PreQuizScreenRouteProp = RouteProp<RootStackParamList, 'PreQuiz'>;

const PreQuizScreen: React.FC<{ navigation: NavigationProp<any> }> = ({ navigation }) => {
  const route = useRoute<PreQuizScreenRouteProp>();
  const [elapsedTime, setElapsedTime] = useState<number>(0);
  
  const { course_id } = route.params;
  const { questions, ques, options, score, isLoading, selectedOption, isCorrect, totalScore, formatTime, handleNextPress, handlSelectedOption, totalQuestions, calculateEffectiveness, showHappyEmoji , } = usePreQuiz(course_id);

  useEffect(() => {
    const interval = setInterval(() => {
      setElapsedTime((prevTime) => prevTime + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);


  
  const handleShowResult = () => {
    navigation.navigate('ResultPreQuiz', {
      totalQuestions: totalQuestions,
      correctAnswers: score,
      tiempo: elapsedTime, 
      effectiveness: calculateEffectiveness(),
    });
  };

  const renderOptionText = (opt: string) => {
    const words = decodeURIComponent(opt).split(' ');
    return words.length > 2 ? (
      <Text style={styles.optionTextLeft}>{decodeURIComponent(opt)}</Text>
    ) : (
      <Text style={styles.optionTextCenter}>{decodeURIComponent(opt)}</Text>
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.container}>

      <Text style={styles.elapsedTimeText}>{`Tiempo: ${elapsedTime}`}</Text>
        {isLoading ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator />
          </View>
        ) : questions && ques < questions.length ? (
          <View style={styles.parent}>
            <View style={styles.top}>
              {/* Agregar la imagen encima de la pregunta */}
              <Image
                source={{ uri: questions[ques].image_url }}
                style={styles.questionImage}
              />
              {questions[ques].question ? (
                <Text style={styles.question}>{decodeURIComponent(questions[ques].question)}</Text>
              ) : null}
            </View>

            <ScrollView style={styles.options}>
              {options.map((opt, index) => (
                <TouchableOpacity
                  key={index}
                  style={[
                    styles.optionButton,
                    selectedOption === opt && (isCorrect ? styles.correctOption : styles.incorrectOption),
                  ]}
                  onPress={() => handlSelectedOption(opt)}
                  disabled={selectedOption !== null}
                >
                  {renderOptionText(opt)}
                </TouchableOpacity>
              ))}
            </ScrollView>

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
     {isCorrect === false && selectedOption !== null && <FloatingEmotion gifSource={require('../../../../../assets/images/prequizz/triste_2.gif')} />}
{showHappyEmoji && selectedOption !== null && <FloatingEmotion gifSource={require('../../../../../assets/images/prequizz/feliz.gif')} />}

      </View>
    </ScrollView>
  );
};
export default PreQuizScreen;
