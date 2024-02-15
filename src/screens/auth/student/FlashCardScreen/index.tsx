import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View, Button, ScrollView } from "react-native";
import { FlashCard } from '../../../../components';
import { useGameLogic } from "./hooks/cardsHooks";
import { useRoute, RouteProp, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../../../navigation/StudentStack';
type FlashCardScreenRouteProp = RouteProp<RootStackParamList, 'FlashCard'>;

interface Card {
  flashcard_id: number;
  indication: string;
  answer: string;
  isCorrect: boolean;
  isTurnedOver: boolean;
}

const FlashCardScreen: React.FC<{ navigation: NavigationProp<any> }> = ({ navigation }) => {
  const route = useRoute<FlashCardScreenRouteProp>();
  const { moduleId } = route.params;
  const { board, selectedCard, matchedCards, score, handleTapCard, resetGame, didPlayerWin, loading } = useGameLogic(moduleId);

  return (
    <SafeAreaView style={styles.container}>
      {!loading && (
        <>
          <Text style={styles.title}>
            {didPlayerWin() ? "Finalizado 🎉" : "Voltea las cartas donde este la informacion correcta"}
          </Text>
          <Text style={styles.title}>{score} </Text>
          <ScrollView contentContainerStyle={styles.boardContainer}>
            {board.map(({ flashcard_id, indication, answer, isCorrect, isTurnedOver }: Card, index: number) => {
              return (
                <FlashCard
                  key={index}
                  isTurnedOver={isTurnedOver}
                  onPress={() => handleTapCard(index)}
                >
                  <ScrollView contentContainerStyle={styles.flashcardContainer}>
                    {isTurnedOver && (
                      <Text style={[styles.text, { textAlign: "center", flex: 1, maxWidth: 120 }]}>
                        {isCorrect ? "" : ""}
                        {answer}
                      </Text>
                    )}
                  </ScrollView>
                </FlashCard>
              );
            })}
          </ScrollView>
          {didPlayerWin() && <Button onPress={resetGame} title="Reiniciar" />}
        </>
      )}
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  boardContainer: {
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  flashcardContainer: {
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    color: "#4951FF",
    marginVertical: 0,
    textAlign: "center",
    textShadowColor: 'black',  // Color del borde
    textShadowOffset: { width: 1, height: 1 },  // Tamaño del borde
    textShadowRadius: 2,  // Radio del borde
  },
  
  text: {
    fontSize: 16, // Ajustar el tamaño del texto según sea necesario
    color: "#FFF",
  },
});

export default FlashCardScreen;
