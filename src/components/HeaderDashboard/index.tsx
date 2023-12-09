import { Text, View } from 'react-native';
import { Icon } from 'react-native-paper';
import { styles } from './styles';

interface Props {
    readonly nStudents: number
}
export default function HeaderDashboard({ nStudents = 0 }: Props) {
    return (
        <View style={styles.container}>
            <View style={styles.containerHexagon}>
                <View style={styles.hexagon}>
                    <Icon source={"hexagon"} size={100} color='#2B32CE' />
                    <View style={styles.textContainer}>
                        <Text style={styles.headerText}>{nStudents}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.containerText}>
                <Text style={styles.title}>Hola, Erika</Text>
                <Text numberOfLines={3} style={styles.subHeaderText}>
                    Tienes a {nStudents} estudiantes inscritos en diferentes cursos,
                    list@ para hacerles un seguimiento?
                </Text>
            </View>
        </View>
    )
}

