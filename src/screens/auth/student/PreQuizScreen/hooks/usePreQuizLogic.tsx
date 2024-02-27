// useQuiz.tsx
import { useEffect, useState, useCallback } from 'react';
import { useAuth } from '../../../../../context/AuthContext';
import { Question } from '../../../../../interfaces/EvaluationInterface';

export const usePreQuiz = (courseId: number) => {
  const [questions, setQuestions] = useState<Question[] | null>(null);
  const [ques, setQues] = useState<number>(0);
  const [options, setOptions] = useState<string[]>([]);
  const [score, setScore] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const { userToken } = useAuth();
  const [totalScore, setTotalScore] = useState<number>(0); // estado para la puntuación total
  const [totalQuestions, setTotalQuestions] = useState<number>(0); //cantidad total de preguntas
  // Agregar un estado para controlar si se debe mostrar el emoji de aplausos
  const [showHappyEmoji, setShowHappyEmoji] = useState<boolean>(false);
  // Función para obtener el cuestionario
  const getQuiz = useCallback(async () => {
    setIsLoading(true);
    const url = `https://ceec-web-api.onrender.com/api/prequizz/by-course/${courseId}`;
    //const url = `http://192.168.0.11:4100/api/prequizz/by-course/${courseId}`;
    console.log(url)
    try {
      const headers = {
        Authorization: userToken || '',
      };
      const res = await fetch(url, { headers });
      const data = await res.json();
      console.log("QUIZ", data)
      // Almacenar el cuestionario y generar opciones de respuesta
      setQuestions(data);
      setTotalQuestions(data.length); // Establecer la cantidad total de preguntas
      setOptions(generateOptionsAndShuffle(data[0]));
    } catch (error) {
      console.error('Error fetching quiz:', error);
    } finally {
      setIsLoading(false);
    }
  }, [userToken, courseId]);

  useEffect(() => {
    getQuiz();
  }, [getQuiz]);
  // Función para manejar el avance a la siguiente pregunta
  const handleNextPress = () => {
    if (questions && ques < questions.length - 1) {
      setQues(ques + 1);
      setOptions(generateOptionsAndShuffle(questions[ques + 1]));
      setSelectedOption(null);
      setIsCorrect(null);
    }
  };
  // Función para generar opciones de respuesta y mezclarlas
  const generateOptionsAndShuffle = (_question: Question) => {
    const options = [..._question.incorrect_answer];
    options.push(_question.correct_answer);

    for (let i = options.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [options[i], options[j]] = [options[j], options[i]];
    }

    return options;
  };
  // Función para manejar la selección de una opción de respuesta
  const handlSelectedOption = (_option: string) => {
    setSelectedOption(_option);
    if (questions && questions[ques] && _option === questions[ques].correct_answer) {
      setScore(score + 1);
      setIsCorrect(true);
      setTotalScore(totalScore + questions[ques].points);
      setShowHappyEmoji(true); // Mostrar emoji de aplausos solo si la respuesta es correcta
    } else {
      setIsCorrect(false);
      setShowHappyEmoji(false); // Ocultar emoji de aplausos si la respuesta es incorrecta
      setTimeout(() => {
        setSelectedOption((questions ?? [])[ques]?.correct_answer ?? null);
        setIsCorrect(true);
      }, 1500);
    }
  };

  // Función para calcular la efectividad en base a las preguntas respondidas
  const calculateEffectiveness = () => {
    if (totalQuestions === 0) {
      return 0; // Evitar dividir por cero
    }
    const effectiveness = (score / totalQuestions) * 100;
    return Math.round(effectiveness); // Redondear el resultado
  };
  const formatTime = (timeInSeconds: number) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  };
  // Retornar los estados y funciones necesarios para la pantalla del cuestionario
  return {
    questions,
    ques,
    options,
    totalScore,
    score,
    isLoading,
    selectedOption,
    isCorrect,
    totalQuestions,
    calculateEffectiveness,
    formatTime,
    handleNextPress,
    handlSelectedOption,
    showHappyEmoji, // Agregar showHappyEmoji al retorno
  };
};
