import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View , Button } from "react-native";
import { FlashCard } from '../../../../components';
import { cards } from './data';

import {useGameLogic } from "./hooks/cardsHooks";

const  FlashCardScreen = () => {
  const { board, selectedCards, matchedCards, score, handleTapCard, resetGame, didPlayerWin } = useGameLogic(cards);
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        {didPlayerWin() ? "Finalizado 🎉" : " "}
      </Text>
      <Text style={styles.title}>Score: {score}</Text>
      {/* iterando cada card con map , el index nos va identificar cada tarjeta */}
      <View style={styles.board}>
    
        {board.map((card, index) => {
          const isTurnedOver =
            selectedCards.includes(index) || matchedCards.includes(index);
          return (
            <FlashCard
              key={index}
              isTurnedOver={isTurnedOver}
              onPress={() => handleTapCard(index)}
            >
              {card}
            </FlashCard>
          );
        })}
      </View>
      {didPlayerWin() && <Button onPress={resetGame}title="Reiniciar" />}
      <StatusBar style="normal" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "start",
  },
  board: {
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  title: {
    fontSize: 32,
    fontWeight: "900",
    color: "#000",
    marginVertical: 15,
  },
});



export default FlashCardScreen;