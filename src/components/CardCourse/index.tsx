import { Text, View } from 'react-native';
import { styles } from './styles';
import { Icon } from 'react-native-paper';

interface Props {
    readonly moduleCount: number;
    readonly courseName: string;
    readonly createdAt: Date;
    readonly userCount: number
}

export default function CardCourse({ moduleCount, courseName, createdAt, userCount }: Props) {
    const dateObject = new Date(createdAt);
    return (
        <View style={styles.container}>
            <View style={styles.rightContainer}>
                <Text style={styles.label}>{moduleCount} módulos</Text>
                <Text numberOfLines={1} style={styles.name}>{courseName}</Text>
                <Text style={styles.label}>{dateObject.toLocaleDateString()}</Text>
            </View>
            <View style={styles.leftContainer}>
                <Text style={styles.label}>{userCount} estudiantes</Text>
                <Icon size={30} source={"play-box"} color='#4951FF' />
            </View>
        </View>
    )
}
