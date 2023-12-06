import * as React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { StudentFlashcardProps } from "../../interfaces/ContentModuleInterface";

export default function Flashcard({
  onPress,
  isTurnedOver,
  children,
}: StudentFlashcardProps) {
  return (
    <Pressable
      style={isTurnedOver ? styles.cardUp : styles.cardDown}
      onPress={onPress}
    >
        {/* validaciòn paramostrar texto*/}
      {isTurnedOver ? (
        <Text style={styles.text}>{children}</Text>
      ) : (
        <Text style={styles.text}>?</Text>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  cardUp: {
    width: 100,
    height: 100,
    margin: 10,
    borderColor: "#8086F9",
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#8086F9",
  },
  cardDown: {
    width: 100,
    height: 100,
    margin: 10,
    borderWidth: 10,
    borderColor: "#8086F9",
    borderRadius: 25,
    backgroundColor: "#4951FF",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 46,
    color: "#FFF",
  },
});
