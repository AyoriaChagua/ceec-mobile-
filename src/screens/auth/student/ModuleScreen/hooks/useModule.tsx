// useModuleScreen.tsx
import { useEffect, useState } from 'react';
import { useAuth } from '../../../../../context/AuthContext';
import { ModuleService } from '../../../../../interfaces/CourseInterfaces';
import { getModulesByIdCourse } from '../../../../../services/module.service';
import { getCourseInfoById } from '../../../../../services/courses.service';
import { Course  } from '../../../../../interfaces/CourseInterfaces';

export const useModuleScreen = (courseId: number) => {
  const { userInfo, userToken } = useAuth();
  const [modules, setModules] = useState<ModuleService[]>([]);
  const [courseData, setCourseData] = useState<Course | null>(null);

  useEffect(() => {
    const fetchModuleData = async () => {
      if (courseId && typeof userInfo !== 'string' && userToken) {
        try {
          // Obtener información del curso
          const course = await getCourseInfoById(courseId, userToken);
          setCourseData(course);

          // Obtener información de los módulos
          const modulesData = await getModulesByIdCourse(courseId, userToken);
          setModules(modulesData);
        } catch (error) {
          console.error('Error fetching module data:', error);
          // Manejo de errores
        }
      }
    };
    fetchModuleData();
  }, [courseId, userToken]);

  return { courseData, modules };
};