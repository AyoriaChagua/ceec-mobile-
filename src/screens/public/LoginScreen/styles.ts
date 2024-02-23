import { StyleSheet } from 'react-native';

import { windowWidth } from '../../../utils/Dimentions';
export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        justifyContent: 'center',
    },
    header: {
        alignItems: 'center',
        marginTop: 20,
    },
    text: {
        fontSize: 15,
        fontWeight: '400',
        color: "#8689CD",
        textAlign: 'center', 
    },
    h1: {
        marginTop:25,
        fontSize: 25,
        fontWeight: '600',
        color: "#fff",
        marginVertical: 15,
        textAlign: 'center', 
    },
    form: {
        marginVertical: 20,
        rowGap: 30,
        width: windowWidth * 0.8, 
    },
    ebook: {
        top: 0, 
        right: 0, 
        height:120,
        width: 120,
        marginBottom: 0, 
    },
    logo: { 
        height:90,
        width: 220,
        marginBottom: 20, 
        marginTop:0,
    },
    backgroundImage: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },
    scrollViewContent: {
        flexGrow: 1,
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    errorText: {
        color: 'red',
        fontWeight: '400',
        textAlign: 'center',
    },
});
