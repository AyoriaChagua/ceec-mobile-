import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Animated, { Easing, useSharedValue, withTiming, useAnimatedStyle } from 'react-native-reanimated';

interface Props {
  readonly steps?: number;
  readonly currentStep?: number;
}

export default function StepIndicator({ steps = 3, currentStep = 1 }: Props) {
  const progress = useSharedValue(1 / steps);

  const handleNextButtonClick = () => {
    if (progress.value < 1) {
      progress.value = withTiming(progress.value + 1 / steps, { duration: 2000, easing: Easing.linear });
    }
  };

  const handlePrevButtonClick = () => {
    if (progress.value > 0) {
      progress.value = withTiming(progress.value - 1 / steps, { duration: 2000, easing: Easing.linear });
    }
  };

  const lineStyle = useAnimatedStyle(() => {
    return {
      width: `${progress.value * 100}%`,
      height: 4,
      backgroundColor: 'blue',
      borderRadius: 5 / 2,
      position: 'absolute',
      left: 0,
      marginTop: 7,
    };
  });

  const circleStyle = (index: number) =>
    useAnimatedStyle(() => {
      const isFilled = progress.value >= (1 / steps) * (index + 1);
      return {
        backgroundColor: isFilled ? 'blue' : 'gray',
        width: 30,
        height: 30,
        borderRadius: 15,
        margin: 10,
      };
    });

  const renderCircles = () => {
    const circles = [];
    for (let i = 0; i < steps; i++) {
      circles.push(<Animated.View key={i} style={circleStyle(i)} />);
    }
    return circles;
  };

  return (
    <View style={{ alignItems: 'center', marginTop: 50 }}>
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        {renderCircles()}
      </View>
      <Animated.View style={lineStyle} />
      <View style={{ flexDirection: 'row', marginTop: 20 }}>
        <TouchableOpacity onPress={handlePrevButtonClick} style={styles.button}>
          <Text style={styles.buttonText}>Prev</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleNextButtonClick} style={styles.button}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 10,
    backgroundColor: 'green',
    borderRadius: 5,
    marginHorizontal: 5,
  },
  buttonText: {
    color: 'white',
  },
});
