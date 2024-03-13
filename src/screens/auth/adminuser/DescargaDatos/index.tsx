
import React, { useCallback } from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { CardStudent, CustomButton, CustomSearcher, LoadIndicator } from '../../../../components'
import { windowHeight } from '../../../../utils/Dimentions'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamListAdmin } from '../../../../interfaces/NavigationInterfaces';

type Props = {
  readonly navigation: NativeStackNavigationProp<RootStackParamListAdmin, 'DescargaDatos'>;
};

export default function DescargaDatos({ navigation }: Props) {
  return (
    <View>
      <Text>DescargaDatos</Text>
    </View>
  )

}

const styles = StyleSheet.create({})