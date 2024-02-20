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
  const [totalScore, setTotalScore] = useState<number>(0);
  const [totalQuestions, setTotalQuestions] = useState<number>(0);
  const [isIncorrectSelected, setIsIncorrectSelected] = useState<boolean>(false);

  const getDiccionario = useCallback(async () => {
    setIsLoading(true);
    const url = `https://ceec-web-api.onrender.com/api/dictionary/by-module/${moduleId}`;
    try {
      const headers = {
        Authorization: userToken || '',
      };
      const res = await fetch(url, { headers });
      const data = await res.json();
      setQuestions(data);
      setTotalQuestions(data.length);
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

  const handleNextPress = () => {
    if (questions && ques < questions.length - 1) {
      setQues(ques + 1);
      setOptions(generateOptionsAndShuffle(questions[ques + 1]));
      setSelectedOption(null);
      setIsCorrect(null);
    }
  };

  const generateOptionsAndShuffle = (_question: Diccionario) => {
    const options = [..._question.incorrect_answer];
    options.push(_question.correct_answer);

    for (let i = options.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [options[i], options[j]] = [options[j], options[i]];
    }

    return options;
  };

  const handlSelectedOption = (_option: string) => {
    setSelectedOption(_option);
    if (questions && questions[ques] && _option === questions[ques].correct_answer) {
      setScore(score + 1);
      setIsCorrect(true);
      setTotalScore(totalScore + questions[ques].points);
    } else {
      setIsIncorrectSelected(true);
      setIsCorrect(false);
      setTimeout(() => {
        setSelectedOption((questions ?? [])[ques]?.correct_answer ?? null);
        setIsCorrect(true);
      }, 1000);
    }
  };

  const calculateEffectiveness = () => {
    if (totalQuestions === 0) {
      return 0;
    }
    const effectiveness = (score / 20) * 100;
    return Math.round(effectiveness);
  };

  const formatTime = (timeInSeconds: number) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  };

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
    isIncorrectSelected,
  };
};