import { useEffect, useState } from 'react';
import { useFlashCard } from './useFlashCards'; // Importamos el hook useFlashCard para obtener las tarjetas de flash
import { shuffle } from './suffle'; // Importamos la función shuffle para mezclar las respuestas de las tarjetas

interface Card {
  flashcard_id: number;
  indication: string;
  answer: string;
  isCorrect: boolean;
  isTurnedOver: boolean;
}

export function useGameLogic(moduleId: number) {
  const { flashCards, loading } = useFlashCard(moduleId); // Obtenemos las tarjetas de flash y el estado de carga desde el hook useFlashCard

  const [board, setBoard] = useState<Card[]>([]); // Estado para almacenar el tablero de tarjetas
  const [selectedCard, setSelectedCard] = useState<number | null>(null); // Estado para almacenar la tarjeta seleccionada
  const [matchedCards, setMatchedCards] = useState<number[]>([]); // Estado para almacenar las tarjetas que se han emparejado
  const [score, setScore] = useState(0); // Estado para almacenar la puntuación del jugador

  // Efecto para inicializar el tablero cuando las tarjetas estén cargadas y no haya errores
  useEffect(() => {
    const initializeBoard = async () => {
      const mixedAnswers: Card[] = [];

      for (let i = 0; i < flashCards.length; i++) {
        const { flashcard_id, indication, correct_answer, incorrect_answer } = flashCards[i];

        const shuffledIncorrectAnswers = shuffle([...incorrect_answer]);
        const shuffledCorrectAnswers = shuffle([...correct_answer]);

        // Creamos tarjetas para cada respuesta, mezclando las respuestas correctas e incorrectas
        shuffledIncorrectAnswers.forEach((incorrect: string) => {
          mixedAnswers.push({ flashcard_id, indication, answer: incorrect, isCorrect: false, isTurnedOver: false });
        });

        shuffledCorrectAnswers.forEach((correct: string) => {
          mixedAnswers.push({ flashcard_id, indication, answer: correct, isCorrect: true, isTurnedOver: false });
        });
      }

      setBoard(mixedAnswers); // Establecemos el tablero de tarjetas mezclado
    };

    if (!loading && flashCards.length > 0) {
      initializeBoard(); // Inicializamos el tablero cuando las tarjetas estén cargadas y no haya errores
    }
  }, [loading, flashCards]);

  // Efecto para manejar la lógica del juego cuando se selecciona una tarjeta
  useEffect(() => {
    if (selectedCard === null) return;

    const isMatch = board[selectedCard].isCorrect;

    if (isMatch) {
      // Si la tarjeta seleccionada es correcta, la añadimos a las tarjetas emparejadas
      setMatchedCards([...matchedCards, selectedCard]);
      setSelectedCard(null);

      const allCorrectTurnedOver = board.filter(card => card.isCorrect).every(card => card.isTurnedOver);
      if (allCorrectTurnedOver) {
        // Si todas las tarjetas correctas están volteadas, el juego ha terminado
        // Aquí puedes agregar lógica adicional o mostrar un mensaje de victoria
      }
    } else {
      // Si la tarjeta seleccionada no es correcta, la volvemos a girar después de un tiempo
      const timeoutId = setTimeout(() => {
        const updatedBoard = [...board];
        updatedBoard[selectedCard] = { ...board[selectedCard], isTurnedOver: false };
        setBoard(updatedBoard);

        setSelectedCard(null);
      }, 1000);
      return () => clearTimeout(timeoutId);
    }
  }, [selectedCard, board, matchedCards]);

  // Función para manejar el tap en una tarjeta
  const handleTapCard = (index: number) => {
    if (selectedCard !== null || matchedCards.includes(index) || board[index].isTurnedOver) return;

    const updatedBoard = [...board];
    updatedBoard[index] = { ...board[index], isTurnedOver: true };
    setBoard(updatedBoard);

    setSelectedCard(index);
    setScore(score + 1);
  };

  // Función para verificar si el jugador ha ganado el juego
  const didPlayerWin = () => matchedCards.length === board.filter(card => card.isCorrect).length;

  // Función para reiniciar el juego
  const resetGame = () => {
    setMatchedCards([]);
    setScore(0);
    setSelectedCard(null);

    const newShuffledBoard = shuffle(generateShuffledBoard());
    setBoard(newShuffledBoard);
  };

  // Función para generar un nuevo tablero de tarjetas mezclado
  function generateShuffledBoard() {
    const mixedAnswers: Card[] = [];

    for (let i = 0; i < flashCards.length; i++) {
      const { flashcard_id, indication, correct_answer, incorrect_answer } = flashCards[i];

      const shuffledIncorrectAnswers = shuffle([...incorrect_answer]);
      const shuffledCorrectAnswers = shuffle([...correct_answer]);

      // Creamos tarjetas para cada respuesta, mezclando las respuestas correctas e incorrectas
      shuffledIncorrectAnswers.forEach((incorrect: string) => {
        mixedAnswers.push({ flashcard_id, indication, answer: incorrect, isCorrect: false, isTurnedOver: false });
      });

      shuffledCorrectAnswers.forEach((correct: string) => {
        mixedAnswers.push({ flashcard_id, indication, answer: correct, isCorrect: true, isTurnedOver: false });
      });
    }

    return mixedAnswers;
  }

  return {
    board,
    selectedCard,
    matchedCards,
    score,
    handleTapCard,
    resetGame,
    didPlayerWin,
    loading,
  };
}
