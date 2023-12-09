import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { RootStackParamListAdmin } from '../../../../interfaces/NavigationInterfaces';
import { RouteProp, useRoute } from '@react-navigation/native';

type DetailsTestScreenRouteProp = RouteProp<RootStackParamListAdmin, 'Details'>;

export default function CourseScreen() {
  const route = useRoute<DetailsTestScreenRouteProp>();
  console.log(route);
  const { params } = route;
  console.log(params);
  return (
    <View>
      <Text>CourseScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({})