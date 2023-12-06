import { useEffect, useState } from 'react';
import { GetCoursesWithModules } from '../../../../../services/courses.service';
import { CoursesWithModules } from '../../../../../interfaces/CoursesInterfaces';


const useCoursesWithModules = () => {
  const [coursesWithModules, setCoursesWithModules] = useState<CoursesWithModules[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await GetCoursesWithModules();
        setCoursesWithModules(data);
      } catch (error) {
        console.error('Error fetching courses with modules:', error);
        setError('Error fetching courses with modules. Check the console for details.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { coursesWithModules, loading, error };
};

export default useCoursesWithModules;
