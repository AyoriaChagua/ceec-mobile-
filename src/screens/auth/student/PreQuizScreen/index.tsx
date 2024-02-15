import React, { useEffect, useState, useCallback } from 'react';
import { StyleSheet, View, Text, TouchableOpacity , Image, ScrollView } from 'react-native';
import { useRoute, RouteProp, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../../../navigation/PreQuizStack';
import { quizScreenStyles as styles  } from './style'; 
import { usePreQuiz } from './hooks/usePreQuizLogic';

type PreQuizScreenRouteProp = RouteProp<RootStackParamList, 'PreQuiz'>;

const PreQuizScreen: React.FC<{ navigation: NavigationProp<any> }> = ({ navigation }) => {
  const route = useRoute< PreQuizScreenRouteProp>();
  const { course_id } = route.params;
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
  } = usePreQuiz(course_id);

  const handleShowResult = () => {
    navigation.navigate('ResultPreQuiz', {
      totalQuestions: totalQuestions, 
      correctAnswers: score 
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
        {isLoading ? (
          <View style={styles.loadingContainer}>
            <Text style={styles.loadingText}>CARGANDO...</Text>
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
      </View>
    </ScrollView>
  );
};
export default PreQuizScreen;
