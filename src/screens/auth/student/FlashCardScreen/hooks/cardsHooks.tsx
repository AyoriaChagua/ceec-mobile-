// useGameLogic.tsx
import { useEffect, useState } from 'react';
import { useFlashCard } from './useFlashCards';
import { shuffle } from './suffle';

interface Card {
  flashcard_id: number;
  indication: string;
  answer: string;
  isCorrect: boolean;
  isTurnedOver: boolean;
}

export function useGameLogic(moduleId: number) {
  const { flashCards, loading } = useFlashCard(moduleId);

  const [board, setBoard] = useState<Card[]>([]);
  const [selectedCard, setSelectedCard] = useState<number | null>(null);
  const [matchedCards, setMatchedCards] = useState<number[]>([]);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const initializeBoard = async () => {
      const mixedAnswers: Card[] = [];

      for (let i = 0; i < flashCards.length; i++) {
        const { flashcard_id, indication, correct_answer, incorrect_answer } = flashCards[i];

        const shuffledIncorrectAnswers = shuffle([...incorrect_answer]);
        const shuffledCorrectAnswers = shuffle([...correct_answer]);

        shuffledIncorrectAnswers.forEach((incorrect: string) => {
          mixedAnswers.push({ flashcard_id, indication, answer: incorrect, isCorrect: false, isTurnedOver: false });
        });

        shuffledCorrectAnswers.forEach((correct: string) => {
          mixedAnswers.push({ flashcard_id, indication, answer: correct, isCorrect: true, isTurnedOver: false });
        });
      }

      setBoard(mixedAnswers);
    };

    if (!loading && flashCards.length > 0) {
      initializeBoard();
    }
  }, [loading, flashCards]);

  useEffect(() => {
    if (board.length === 0) return;

    const flipAllCards = async () => {
      for (let i = 0; i < board.length; i++) {
        await new Promise(resolve => setTimeout(resolve, 1000));
        const updatedBoard = [...board];
        updatedBoard[i] = { ...board[i], isTurnedOver: true };
        setBoard(updatedBoard);
      }

      // Después de 10 segundos, volver a su posición inicial
      setTimeout(() => {
        const resetBoard = board.map(card => ({ ...card, isTurnedOver: false }));
        setBoard(resetBoard);
      }, 10000);
    };

    flipAllCards();
  }, [board]);

  useEffect(() => {
    if (selectedCard === null) return;

    const isMatch = board[selectedCard].isCorrect;

    if (isMatch) {
      setMatchedCards([...matchedCards, selectedCard]);
      setSelectedCard(null);

      const allCorrectTurnedOver = board.filter(card => card.isCorrect).every(card => card.isTurnedOver);
      if (allCorrectTurnedOver) {
        // El juego ha terminado
        // Puedes agregar lógica adicional o mostrar un mensaje de victoria aquí
      }
    } else {
      const timeoutId = setTimeout(() => {
        const updatedBoard = [...board];
        updatedBoard[selectedCard] = { ...board[selectedCard], isTurnedOver: false };
        setBoard(updatedBoard);

        setSelectedCard(null);
      }, 1000);
      return () => clearTimeout(timeoutId);
    }
  }, [selectedCard, board, matchedCards]);

  const handleTapCard = (index: number) => {
    if (selectedCard !== null || matchedCards.includes(index) || board[index].isTurnedOver) return;

    const updatedBoard = [...board];
    updatedBoard[index] = { ...board[index], isTurnedOver: true };
    setBoard(updatedBoard);

    setSelectedCard(index);
    setScore(score + 1);
  };

  const didPlayerWin = () => matchedCards.length === board.filter(card => card.isCorrect).length;

  const resetGame = () => {
    setMatchedCards([]);
    setScore(0);
    setSelectedCard(null);

    const newShuffledBoard = shuffle(generateShuffledBoard());
    setBoard(newShuffledBoard);
  };

  function generateShuffledBoard() {
    const mixedAnswers: Card[] = [];

    for (let i = 0; i < flashCards.length; i++) {
      const { flashcard_id, indication, correct_answer, incorrect_answer } = flashCards[i];

      const shuffledIncorrectAnswers = shuffle([...incorrect_answer]);
      const shuffledCorrectAnswers = shuffle([...correct_answer]);

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
