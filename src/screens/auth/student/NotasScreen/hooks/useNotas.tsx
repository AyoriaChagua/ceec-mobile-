// useModuleScreen.tsx
import { useEffect, useState } from 'react';
import { useAuth } from '../../../../../context/AuthContext';
import { Nota} from '../../../../../interfaces/EvaluationInterface';
import {getNotas } from '../../../../../services/notas.service';


export const useNotas = (courseId: number) => {
  const { userInfo, userToken } = useAuth();
  const [notas, setNotas] = useState<Nota[]>([]);
 

  useEffect(() => {
    const fetchModuleData = async () => {
      if (courseId && typeof userInfo !== 'string' && userToken) {
        try {
         const user = userInfo as { id: number; role: number; email: string };
          // Obtener NOTAS del curso
          const notas_curso = await getNotas(courseId, user.id ,userToken);
          console.log(notas_curso)
          setNotas(notas_curso);
        } catch (error) {
          console.error('Error fetching module notas:', error);
          // Manejo de errores
        }
      }
    };
    fetchModuleData();
  }, [courseId, userToken]);

  return { notas };
};