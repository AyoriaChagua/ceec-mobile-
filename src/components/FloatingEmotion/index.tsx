import React, { useEffect, useState } from 'react';
import { Animated, Easing, StyleSheet, Dimensions } from 'react-native';

interface FloatingEmotionProps {
  type: 'happy' | 'sad'; // Especificar que el tipo solo puede ser 'happy' o 'sad'
}

const { height } = Dimensions.get('window');

const FloatingEmotion: React.FC<FloatingEmotionProps> = ({ type }) => {
  const [position] = useState(new Animated.Value(height)); // Comenzar desde la parte inferior de la pantalla

  useEffect(() => {
    Animated.timing(position, {
      toValue: -height, // Mover el emoji arriba y fuera de la pantalla
      duration: 4000,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start();
  }, []);

  return (
    <Animated.Text style={[styles.emoji, { transform: [{ translateY: position }] }]}>
      {type === 'happy' ? '👏' : '😰'}
    </Animated.Text>
  );
};

const styles = StyleSheet.create({
  emoji: {
    fontSize: 48, // Ajustar el tamaño del emoji
    position: 'absolute',
    zIndex: 9999,
    alignSelf: 'center', // Centrar horizontalmente
  },
});

export default FloatingEmotion;
