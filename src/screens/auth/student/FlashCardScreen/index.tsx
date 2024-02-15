import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, Dimensions, ScrollView, TouchableOpacity, Alert } from "react-native";
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
  
  useEffect(() => {
    if (selectedCorrectAnswers.length === flashcardData.correct_answer.length) {
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
  };

  const handleImagePress = (url: string) => {
    // Verificar si la imagen pertenece a las respuestas correctas o incorrectas
    if (flashcardData.correct_answer.includes(url)) {
      setSelectedCorrectAnswers(prevState => [...prevState, url]);
    } else if (flashcardData.incorrect_answer.includes(url)) {
      setSelectedIncorrectAnswers(prevState => [...prevState, url]);
    }
  };

  // Revolver las imágenes de forma aleatoria
  const shuffledCorrectAnswers = shuffle(flashcardData.correct_answer);
  const shuffledIncorrectAnswers = shuffle(flashcardData.incorrect_answer);

  // Combinar las listas de respuestas correctas e incorrectas
  const combinedAnswers = [...shuffledCorrectAnswers, ...shuffledIncorrectAnswers];

  // Mezclar la lista combinada para obtener un orden aleatorio
  const shuffledCombinedAnswers = shuffle(combinedAnswers);

  // Dividir la lista de respuestas en dos sublistas de tres imágenes cada una
  const firstRow = shuffledCombinedAnswers.slice(0, 3);
  const secondRow = shuffledCombinedAnswers.slice(3, 6);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{flashcardData.indication}</Text>
      <ScrollView horizontal={false} showsVerticalScrollIndicator={false}>
        <View style={styles.row}>
          {/* Primer fila de imágenes */}
          {firstRow.map((url: string, index: number) => (
            <TouchableOpacity
              key={index}
              onPress={() => !gameFinished && handleImagePress(url)}
              disabled={gameFinished}
            >
              <Image
                source={{ uri: url }}
                style={[
                  styles.image,
                  selectedCorrectAnswers.includes(url) && styles.selectedCorrectImage,
                  selectedIncorrectAnswers.includes(url) && styles.selectedIncorrectImage
                ]}
                resizeMode="contain"
              />
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.row}>
          {/* Segunda fila de imágenes */}
          {secondRow.map((url: string, index: number) => (
            <TouchableOpacity
              key={index + 3}
              onPress={() => !gameFinished && handleImagePress(url)}
              disabled={gameFinished}
            >
              <Image
                source={{ uri: url }}
                style={[
                  styles.image,
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
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 35,
    marginTop: 25,
    textAlign: "center",
  },
  row: {
    flexDirection: "row",
    marginBottom: 15,
  },
  image: {
    width: 320 / 3,
    height: 650 / 3,
    marginHorizontal: 10,
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
});

export default FlashCardScreen;
