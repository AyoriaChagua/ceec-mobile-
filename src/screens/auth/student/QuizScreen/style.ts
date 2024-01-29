// moduleScreenStyles.ts
import { StyleSheet } from 'react-native';

export const quizScreenStyles = StyleSheet.create({
    container: {
        paddingTop: 40,
        paddingHorizontal: 20,
        height: '100%',
      },
      questionImage: {
        width: '100%', // Ocupar el 100% del ancho del contenedor
        height: 150,   // Ajustar el tamaño según sea necesario
        marginBottom: 10,
        borderRadius: 12, 
      },
    
      questionContainer: {
        backgroundColor: '#7849FF',
        borderRadius: 12,
        padding: 10,
        position: 'relative', // Agregar posición relativa
      },
      elapsedTimeText: {
        fontSize: 14,
        color: 'white',
        marginTop: 5,
      },
            
    
      loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      loadingText: {
        fontSize: 32,
        fontWeight: '700',
      },
      top: {
        marginVertical: 16,
      },
      options: {
        marginVertical: 16,
        flex: 1,
      },
      optionButton: {
        paddingVertical: 12,
        marginVertical: 6,
        paddingHorizontal: 12,
        borderRadius: 12,
        backgroundColor: '#D9D9D9',
        alignItems: 'flex-start', 
      },
      correctOption: {
        backgroundColor: '#4CAF50',
      },
      incorrectOption: {
        backgroundColor: '#FF5733',
      },
      optionText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#000000',
        textAlign: 'left', // alinear el texto a la izquierda
      },
      bottom: {
        marginBottom: 12,
        paddingVertical: 16,
        justifyContent: 'center',
        flexDirection: 'row',
      },
      button: {
        backgroundColor: '#7849FF',
        padding: 12,
        width:150,
        paddingHorizontal: 16,
        borderRadius: 10,
        alignItems: 'center', 
        marginBottom: 30,
      },
      buttonText: {
        fontSize: 18,
        fontWeight: '600',
        color: 'white',
      },
      question: {
        fontSize: 18,
        color:'white',
        margin:10,
        fontWeight: 'bold'
      },
      parent: {
        height: '100%',
      },
      noQuestionsContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
});
