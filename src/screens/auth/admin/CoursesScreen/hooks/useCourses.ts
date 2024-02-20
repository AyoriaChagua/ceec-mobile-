import { useEffect, useState } from 'react';
import { GetCoursesWithModules } from '../../../../../services/courses.service';
import { CoursesWithModules } from '../../../../../interfaces/CoursesInterfaces';


const useCoursesWithModules = () => {
  const [coursesWithModules, setCoursesWithModules] = useState<CoursesWithModules[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      const data = await GetCoursesWithModules();
      setCoursesWithModules(data);
    } catch (error) {
      console.error('Error fetching courses with modules:', error);
      setError('Error fetching courses with modules. Check the console for details.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { coursesWithModules, loading, error, fetchData };
};

export default useCoursesWithModules;
