import { View, ScrollView } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { CardCourse } from '../../../../components'

export default function CoursesScreen() {
  return (
    <ScrollView style={styles.container}>
      <CardCourse />
    </ScrollView>
  )
}
