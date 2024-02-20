import { Text, View } from 'react-native';
import { styles } from './styles';
import CustomButtonGroup from '../CustomButtonGroup';

interface Props {
    readonly moduleCount: number;
    readonly courseName: string;
    readonly createdAt: Date;
    readonly userCount: number;
    readonly courseId: number;
    readonly navigateToCreateModule: (courseId: number) => void
    readonly navigateToAddStudents: (courseId: number) => void
}

export default function CourseCardAdmin({ moduleCount, courseName, createdAt, userCount, courseId, navigateToCreateModule, navigateToAddStudents }: Props) {
    const dateObject = new Date(createdAt);

    return (
        <View style={styles.container}>
            <View style={styles.rightContainer}>
                <Text numberOfLines={2} style={styles.name}>{courseName}</Text>
                <Text style={styles.label}>{dateObject.toLocaleDateString()}</Text>
            </View>
            <View style={styles.leftContainer}>
                <CustomButtonGroup
                    courseId={courseId}
                    label={`${userCount} estudiante${userCount > 1 ? 's' : ''}`}
                    textButton='Agregar'
                    type='student'
                    navigateTo={navigateToAddStudents}
                />
                <CustomButtonGroup
                    courseId={courseId}
                    label={`${moduleCount} módulo${moduleCount > 1 ? 's' : ''}`}
                    textButton='Agregar'
                    type='module'
                    navigateTo={navigateToCreateModule}
                />
            </View>
        </View>
    )
}
