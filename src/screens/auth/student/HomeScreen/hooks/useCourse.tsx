// useHomeScreen.tsx
import { useEffect, useState } from 'react';
import { useAuth } from '../../../../../context/AuthContext';
import { getCourseByIdUser } from '../../../../../services/courses.service';
import { Course } from '../../../../../interfaces/CourseInterfaces';
export const useCourse = () => {
  const { userInfo, userToken, profileInfo } = useAuth();
  const [courseData, setCourseData] = useState<Course[]>([]);
  const [firstName, setFirstName] = useState<string>('');

  useEffect(() => {
    const fetchCourseData = async () => {
      if (userInfo && typeof userInfo !== 'string' && userInfo.id && userToken) {
        try {
          const courses = await getCourseByIdUser(userInfo.id, userToken);
          setCourseData(courses);
          
        } catch (error) {
          // Manejo de errores
        }
      }
    };

    if (profileInfo && 'first_name' in profileInfo) { // Verificar si 'first_name' está presente en profileInfo
      setFirstName(profileInfo.first_name);
    }

    fetchCourseData();
  }, [userInfo, userToken, profileInfo]);

  return { courseData, firstName }; // Devolver firstName junto con courseData
};