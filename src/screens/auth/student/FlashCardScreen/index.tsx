import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, Dimensions, ScrollView, TouchableOpacity, Modal, Button, useWindowDimensions } from "react-native";
import { useRoute, RouteProp, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../../../navigation/StudentStack';
import shuffle from './hooks/suffle'; // Importar la función shuffle desde el archivo shuffle.js
import { useFlashCard } from './hooks/useFlashCards';

type FlashCardScreenRouteProp = RouteProp<RootStackParamList, 'FlashCard'>;

const flashcardData = {
  flashcard_id: 4,
  indication: "¿Cuáles son las características de la comunicación?",
  correct_answer: [
    "https://res.cloudinary.com/dcxg13hqx/image/upload/v1707793450/ceec/flashcards/comunicacion/modulo1/jm7img1zxp6wddeu2ukj.png",
    "https://res.cloudinary.com/dcxg13hqx/image/upload/v1707793477/ceec/flashcards/comunicacion/modulo1/n8bglamymhw6utvbhsml.png",
    "https://res.cloudinary.com/dcxg13hqx/image/upload/v1707793499/ceec/flashcards/comunicacion/modulo1/d351stogfokc4ccatrlr.png"
  ],
  incorrect_answer: [
    "https://res.cloudinary.com/dcxg13hqx/image/upload/v1707793465/ceec/flashcards/comunicacion/modulo1/wycwi0cnjkwsdysblfwy.png",
    "https://res.cloudinary.com/dcxg13hqx/image/upload/v1707793491/ceec/flashcards/comunicacion/modulo1/pushvsav0a8sr8ycrvd5.png",
    "https://res.cloudinary.com/dcxg13hqx/image/upload/v1707793507/ceec/flashcards/comunicacion/modulo1/pdyph6awrantg4totfi0.png"
  ]
};

const FlashCardScreen: React.FC<{ navigation: NavigationProp<any> }> = ({ navigation }) => {
  const route = useRoute<FlashCardScreenRouteProp>();
  const { moduleId } = route.params;
  const [selectedCorrectAnswers, setSelectedCorrectAnswers] = useState<string[]>([]);
  const [selectedIncorrectAnswers, setSelectedIncorrectAnswers] = useState<string[]>([]);
  const [gameFinished, setGameFinished] = useState(false);
  const [showRestartButton, setShowRestartButton] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [shuffledAnswers, setShuffledAnswers] = useState<string[]>([]);
  const windowWidth = useWindowDimensions().width;

  // Calcular el tamaño de las imágenes en función del ancho de la ventana
  const imageWidth = (windowWidth - 80) / 3; // 40 es el espacio total horizontal (padding)

  // Calcular el conteo de respuestas correctas e incorrectas
  const totalCorrectAnswers = flashcardData.correct_answer.length;
  const totalIncorrectAnswers = flashcardData.incorrect_answer.length;

  useEffect(() => {
    // Shuffle answers only when game starts or restarted
    setShuffledAnswers(shuffle([...flashcardData.correct_answer, ...flashcardData.incorrect_answer]));
  }, [gameFinished]);

  useEffect(() => {
    if (selectedCorrectAnswers.length === totalCorrectAnswers) {
      setGameFinished(true);
      setShowRestartButton(true);
    }
  }, [selectedCorrectAnswers]);

  useEffect(() => {
    if (gameFinished) {
      // Pintar las imágenes incorrectas de rojo
      setSelectedIncorrectAnswers(flashcardData.incorrect_answer);
    }
  }, [gameFinished]);

  const handleFinish = () => {
    // Reiniciar el juego
    setSelectedCorrectAnswers([]);
    setSelectedIncorrectAnswers([]);
    setGameFinished(false);
    setShowRestartButton(false);
    setShowErrorMessage(false); // Ocultar el mensaje de error al reiniciar

    // Barajar las respuestas nuevamente
    const shuffledAnswers = shuffle([...flashcardData.correct_answer, ...flashcardData.incorrect_answer]);
    setShuffledAnswers(shuffledAnswers);
  };

  const handleImagePress = (url: string) => {
    // Verificar si la imagen pertenece a las respuestas correctas o incorrectas
    if (flashcardData.correct_answer.includes(url)) {
      setSelectedCorrectAnswers(prevState => [...prevState, url]);
    } else if (flashcardData.incorrect_answer.includes(url)) {
      setSelectedIncorrectAnswers(prevState => [...prevState, url]);
      setShowErrorMessage(true); // Mostrar el mensaje de error si se selecciona una incorrecta
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{flashcardData.indication}</Text>
      <Text style={styles.score}>{` ${selectedCorrectAnswers.length}/${totalCorrectAnswers}  `}</Text>
      <Modal visible={showErrorMessage} animationType="slide" transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalMessage}>¡VUELVE A INTENTARLO!</Text>
            <Button title="Reiniciar" onPress={handleFinish} color="#4951FF" />
          </View>
        </View>
      </Modal>
      <ScrollView horizontal={false} showsVerticalScrollIndicator={false}>
        <View style={styles.row}>
          {/* Renderizar las imágenes */}
          {shuffledAnswers.slice(0, 3).map((url: string, index: number) => (
            <TouchableOpacity
              key={index}
              onPress={() => handleImagePress(url)}
              disabled={gameFinished}
            >
              <Image
                source={{ uri: url }}
                style={[
                  styles.image,
                  { width: imageWidth },
                  selectedCorrectAnswers.includes(url) && styles.selectedCorrectImage,
                  selectedIncorrectAnswers.includes(url) && styles.selectedIncorrectImage
                ]}
                resizeMode="contain"
              />
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.row}>
          {/* Renderizar las imágenes */}
          {shuffledAnswers.slice(3, 6).map((url: string, index: number) => (
            <TouchableOpacity
              key={index + 3}
              onPress={() => handleImagePress(url)}
              disabled={gameFinished}
            >
              <Image
                source={{ uri: url }}
                style={[
                  styles.image,
                  { width: imageWidth },
                  selectedCorrectAnswers.includes(url) && styles.selectedCorrectImage,
                  selectedIncorrectAnswers.includes(url) && styles.selectedIncorrectImage
                ]}
                resizeMode="contain"
              />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
      {showRestartButton && (
        <TouchableOpacity style={styles.restartButton} onPress={handleFinish}>
          <Text style={styles.restartButtonText}>Reiniciar</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  title: {
    color: "#4951FF",
    fontSize: 23,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  score: {
    color: "#4951FF",
    fontSize: 20,
    marginTop:20,
    marginBottom: 30,
    textAlign: "center",
    fontWeight: "bold",
  },
  row: {
    flexDirection: "row",
    marginBottom: 15,
  },
  image: {
    height: 200, // Height is not necessary as it's constrained by resizeMode
    marginHorizontal: 9,
  },
  selectedCorrectImage: {
    borderWidth: 6,
    borderColor: "#3AB23F",
  },
  selectedIncorrectImage: {
    borderWidth: 6,
    borderColor: "#FF0000",
  },
  restartButton: {
    backgroundColor: "#4951FF",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignSelf: "center",
    marginTop: 20,
  },
  restartButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalMessage: {
    fontSize: 18,
    marginBottom: 10,
    color: "#4951FF",
  },
});

export default FlashCardScreen;
