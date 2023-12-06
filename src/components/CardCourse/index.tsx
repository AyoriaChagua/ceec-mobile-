import {  Text, View } from 'react-native';
import { styles } from './styles';
import { Icon } from 'react-native-paper';

export default function CardCourse() {
    return (
        <View style={styles.container}>
            <View style={styles.rightContainer}>
                <Text style={styles.label}>10 módulos</Text>
                <Text numberOfLines={1} style={styles.name}>M. 1: Visión General COPC y WFM</Text>
                <Text style={styles.label}>Puntaje promedio: 3.6</Text>
            </View>
            <View style={styles.leftContainer}>
                <Text style={styles.label}>CardCourses</Text>
                <Icon size={30} source={"play-box"} color='#4951FF'/>
            </View>
        </View>
    )
}
