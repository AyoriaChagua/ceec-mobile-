import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const  EvaluacionScreen: React.FC = () => {


  return (
    <View style={styles.container}>
      <Text>Evaluacions Screen</Text>
      
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default EvaluacionScreen;