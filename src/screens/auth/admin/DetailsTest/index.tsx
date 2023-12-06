import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { RootStackParamList } from '../../../../interfaces/NavigationInterfaces';
import { RouteProp, useRoute } from '@react-navigation/native';

type DetailsTestScreenRouteProp = RouteProp<RootStackParamList, 'Details'>;

export default function DetailsTest() {
  const route = useRoute<DetailsTestScreenRouteProp>();
  console.log(route);
  const { params } = route;
  const userId = params ? params.userId : null;
  return (
    <View>
      <Text>test {userId}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})