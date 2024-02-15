
import { useEffect, useState } from 'react';
import { getFlashCardInfoById } from '../../../../../services/flashcard.service';
import { FlashCard } from '../../../../../interfaces/ContentModuleInterface';
import { useAuth } from '../../../../../context/AuthContext';

export const useFlashCard = (moduleId: number) => {
  const { userToken } = useAuth();
  const [flashCards, setFlashCards] = useState<FlashCard[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFlashCardData = async () => {
      if (moduleId && userToken) {
        try {
          const flashCardData = await getFlashCardInfoById(moduleId, userToken);
          console.log('FlashCard Data:', flashCardData);
    
          setFlashCards(Array.isArray(flashCardData) ? flashCardData : [flashCardData].filter(Boolean));
        } catch (error) {
          console.error('Error fetching flashcard data:', error);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchFlashCardData();
  }, [moduleId, userToken]);

  return { flashCards, loading };
};
