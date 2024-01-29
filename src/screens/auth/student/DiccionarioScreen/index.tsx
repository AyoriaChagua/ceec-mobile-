import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';

const words = [
 { word: 'Apple', meaning: 'Manzana' },
 { word: 'Banana', meaning: 'Plátano' },
 { word: 'Grape', meaning: 'Uva' },
];

const WordMeaningBox: React.FC<{ word: string; meaning: string }> = ({
 word,
 meaning,
}) => {
 const wordBoxStyles = [styles.wordBox, word === 'Apple' ? styles.apple : styles.grape];
 const meaningBoxStyles = [styles.meaningBox, word === 'Banana' ? styles.banana : styles.default];

 return (
    <View style={styles.wordMeaningBox}>
      <View style={wordBoxStyles}>
        <Text style={styles.wordText}>{word}</Text>
      </View>
      <View style={meaningBoxStyles}>
        <Text style={styles.meaningText}>{meaning}</Text>
      </View>
    </View>
 );
};

const DiccionarioScreen = () => {
 return (
    <ScrollView style={styles.container}>
      {words.map((word, index) => (
        <WordMeaningBox key={index} word={word.word} meaning={word.meaning} />
      ))}
    </ScrollView>
 );
};

const styles = StyleSheet.create({
 container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 50,
 },
 wordMeaningBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
 },
 wordBox: {
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 10,
 },
 apple: {
    borderColor: 'red',
 },
 grape: {
    borderColor: 'purple',
 },
 meaningBox: {
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
 },
 banana: {
    borderColor: 'yellow',
 },
 default: {
    borderColor: 'black',
 },
 wordText: {
    fontSize: 16,
 },
 meaningText: {
    fontSize: 16,
 },
});

export default DiccionarioScreen;