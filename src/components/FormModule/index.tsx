import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { windowWidth } from '../../utils/Dimentions'
import StepIndicator from '../StepIndicator'

interface Props {
  readonly newCourseId: number
}
export default function FormModule({ newCourseId }: Props) {
  console.log(newCourseId)
  return (
    <View style={{
      flex: 1,
      width: windowWidth,
      paddingVertical: 10,
      paddingHorizontal: 20,
      backgroundColor: '#fff',
      borderTopRightRadius: 20,
      borderTopLeftRadius: 20,
    }} >
      <StepIndicator />
      <Text>Módulos del curso</Text>
    </View>
  )
}

const styles = StyleSheet.create({})