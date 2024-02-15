// useQuiz.tsx
import { useEffect, useState, useCallback } from 'react';
import { useAuth } from '../../../../../context/AuthContext';
import { Diccionario } from '../../../../../interfaces/DiccionarioInterface';

export const useDiccionario = (moduleId: number) => {
  const [questions, setQuestions] = useState<Diccionario[] | null>(null);
  const [ques, setQues] = useState<number>(0);
  const [options, setOptions] = useState<string[]>([]);
  const [score, setScore] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const { userToken } = useAuth();
  const [totalScore, setTotalScore] = useState<number>(0); // estado para la puntuación total
  const [totalQuestions, setTotalQuestions] = useState<number>(0); //cantidad total de preguntas

// Función para obtener el cuestionario
  const getDiccionario = useCallback(async () => {
    setIsLoading(true);
    const url = `http://192.168.18.3:4100/dictionary/by-module/${moduleId}`;
    try {
      const headers = {
        Authorization: userToken || '',
      };
      const res = await fetch(url, { headers });
      const data = await res.json();
      console.log("DICCIONARIO", data)
       // Almacenar el cuestionario y generar opciones de respuesta
      setQuestions(data);
      setTotalQuestions(data.length); // Establecer la cantidad total de preguntas
      setOptions(generateOptionsAndShuffle(data[0]));
    } catch (error) {
      console.error('Error fetching quiz:', error);
    } finally {
      setIsLoading(false);
    }
  }, [userToken, moduleId]);

  useEffect(() => {
    getDiccionario();
  }, [getDiccionario]);
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
  const generateOptionsAndShuffle = (_question: Diccionario) => {
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
        setScore(score +1); // Sumar los puntos de la pregunta correcta
        setIsCorrect(true);
        setTotalScore(totalScore + questions[ques].points); // Actualizar la puntuación total
    } else {
      setIsCorrect(false);
// Mostrar la respuesta correcta después de un segundo
      setTimeout(() => {
        setSelectedOption((questions ?? [])[ques]?.correct_answer ?? null);
        setIsCorrect(true); // Set isCorrect to true to highlight the correct answer in green
      }, 1000);
    }
  };
   // Función para calcular la efectividad en base a las preguntas respondidas
  const calculateEffectiveness = () => {
    if (totalQuestions === 0) {
      return 0; // Evitar dividir por cero
    }
    const effectiveness = (score / 20) * 100;
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
    setIsCorrect,
   setSelectedOption,
  };
};
