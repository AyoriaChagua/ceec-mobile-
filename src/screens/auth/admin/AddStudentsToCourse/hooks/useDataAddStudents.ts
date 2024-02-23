import { useEffect, useState } from "react"
import { GetStudentsForCourse } from "../../../../../services/course-student.service";
import { Student } from "../../../../../interfaces/StudentInterfaces";

export const useDataAddStudents = (course_id: number) => {
    const [students, setStudents] = useState<Student[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [searchedText, setSearchedText] = useState('');
    const [filteredData, setFilteredData] = useState(students);
    const [selectedStudents, setSelectedStudents] = useState<Student[]>([]);
    const fetchData = async () => {
        try {
            setIsLoading(true);
            const response = await GetStudentsForCourse(course_id);
            if (response) {
                setStudents(response);
            } else {
                throw new Error("No data found for this course");
            }
        } catch (error) {
            console.error(error);
            throw error;
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
        setSelectedStudents([]);
    }, []);

    useEffect(() => {
        const filtered = students.filter(student => {
            const lowerCaseQuery = searchedText.toLowerCase();
            return (
                (student.Profile?.first_name!.toLowerCase().includes(lowerCaseQuery) ??
                    student.Profile?.last_name!.toLowerCase().includes(lowerCaseQuery)
                ) ?? student.email.toLowerCase().includes(lowerCaseQuery)
            );
        });
        setFilteredData(filtered);
    }, [searchedText, students]);

    return {
        fetchData,
        students,
        isLoading,
        searchedText,
        setSearchedText,
        filteredData,
        selectedStudents,
        setSelectedStudents
    }
}