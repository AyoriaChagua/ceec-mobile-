// useResultEva.tsx
import { NavigationProp } from '@react-navigation/native';
import { useQuiz } from './useQuizLogic';
import { useAuth } from '../../../../../context/AuthContext';
import { sendQuizResult } from '../../../../../services/evaluation.service';

export const useResultEva = (navigation: NavigationProp<any>, evaluationId: number , totalScore :number ,calculateEffectiveness: () => number , elapsedTime : number) => {
  const { userToken, userInfo } = useAuth();
 
  const handleShowResult = async () => {
    try {
      if (userInfo && typeof userInfo !== 'string') {
        const user = userInfo as { id: number; role: number; email: string };

        const quizResult = {
          evaluation_id: evaluationId,
          user_id: user.id,
          total_score: totalScore,
        };

        if (userToken) {
          await sendQuizResult(quizResult, userToken);

          navigation.navigate('Result', {
            totalScore,
            elapsedTime, 
            evaluationId,
            effectiveness: calculateEffectiveness(),
          });
        } else {
          console.error('User token is null or undefined.');
          // Handle this case accordingly
        }
      } else {
        console.error('User info is null or invalid.');
        // Handle this case accordingly
      }
    } catch (error) {
      // Handle errors or log them as needed
      console.error('Error while sending quiz result:', error);
    }
  };

  return { handleShowResult };
};
