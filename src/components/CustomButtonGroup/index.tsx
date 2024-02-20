import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Icon } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

interface Props {
    readonly label: string
    readonly textButton: string
    readonly disabled?: boolean
    readonly type: "module" | "student"
    readonly courseId: number
    readonly navigateTo: (courseId: number) => void
}

export default function CustomButtonGroup({ label, textButton, type, disabled = false, courseId, navigateTo }: Props) {
    return (
        <View style={styles.buttonContainer} >
            <TouchableOpacity onPress={() => { }} disabled={disabled}>
                <View style={[styles.left, { borderColor: type === "module" ? "#4951FF" : "#37B5B6" }]}>
                    <Text style={[styles.textLeft, { color: type === "module" ? "#4951FF" : "#37B5B6" }]}>{label}</Text>
                </View>

            </TouchableOpacity>
            <TouchableOpacity onPress={type === "module" ? () => navigateTo(courseId) : () => { }} disabled={disabled}>
                <View style={[styles.right, { backgroundColor: type === "module" ? "#4951FF" : "#37B5B6" }]}>
                    <Text style={styles.textRight}>{textButton}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        display: "flex",
        flexDirection: "row"
    },
    textLeft: {
        overflow: "hidden",
    },
    textRight: {
        color: "#fff"
    },

    left: {
        borderWidth: 1,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        padding: 5,

    },
    right: {
        display: "flex",
        flexDirection: "row",
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        padding: 6
    },
})