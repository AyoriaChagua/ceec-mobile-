// useHomeScreen.tsx
import { useEffect, useState } from 'react';
import { useAuth } from '../../../../../context/AuthContext';
import { getCourseByIdUser } from '../../../../../services/courses.service';
import { Course } from '../../../../../interfaces/CourseInterfaces';

export const useCourse = () => {
  const { userInfo, userToken } = useAuth();
  const [courseData, setCourseData] = useState<Course[]>([]);

  useEffect(() => {
    const fetchCourseData = async () => {
      if (userInfo && typeof userInfo !== 'string' && userInfo.id && userToken) {
        try {
          const courses = await getCourseByIdUser(userInfo.id, userToken);
          console.log(courses)
          setCourseData(courses);
        } catch (error) {
          // Manejo de errores
        }
      }
    };
    fetchCourseData();
  }, [userInfo, userToken]);

  return { courseData };
};
