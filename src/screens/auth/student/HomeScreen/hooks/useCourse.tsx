import { useEffect, useState } from 'react';
import { useAuth } from '../../../../../context/AuthContext';
import { getCourseByIdUser } from '../../../../../services/courses.service';
import { CampaignCoursesData } from '../../../../../interfaces/CourseInterfaces';

export const useCourse = () => {
  const { userInfo, userToken, profileInfo } = useAuth();
  const [courseData, setCourseData] = useState<CampaignCoursesData>({ campaignCourses: [] });
  const [firstName, setFirstName] = useState<string>('');

  useEffect(() => {
    const fetchCourseData = async () => {
      if (userInfo && typeof userInfo !== 'string' && userInfo.id && userToken) {
        try {
          const courses = await getCourseByIdUser(userInfo.id, userToken);
          console.log(courses);
          setCourseData(courses);
        } catch (error) {
          console.error('Error while fetching course data:', error);
        }
      }
    };

    if (profileInfo && 'first_name' in profileInfo) { 
      setFirstName(profileInfo.first_name);
    }

    fetchCourseData();
  }, [userInfo, userToken, profileInfo]);

  return { courseData, firstName }; 
};
