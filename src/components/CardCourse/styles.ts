import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FAFAFF",
        justifyContent: "space-between",
        flexDirection: "row",
        padding: 20,
        borderLeftWidth: 7,
        borderLeftColor: "#4951FF",
        borderRadius: 7,
        overflow: "hidden",
    },
    leftContainer: {
        width: "15%",
        alignSelf: 'flex-start',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        height: 100,
      },
    rightContainer: {
        width: "80%",
        alignSelf: 'flex-start',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        height: 100,
    },
    name: {
        color: "#4951FF",
        fontWeight: "bold",
        fontSize: 16,
    },
    label: {
        color: "#555555",
        fontWeight: "400",
        fontSize: 13,
    }
})
