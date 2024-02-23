import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import { CardStudent, CustomButton } from '../../../../components'
import { windowHeight } from '../../../../utils/Dimentions'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamListAdmin } from '../../../../interfaces/NavigationInterfaces';
import { CommonActions } from '@react-navigation/native';
type Props = {
  readonly navigation: NativeStackNavigationProp<RootStackParamListAdmin, 'Users'>;
};
export default function UsersScreen({ navigation }: Props) {
  const navigateToCreateCourse = () => {
    navigation.dispatch(
      CommonActions.navigate({
        name: "CreateUser"
      })
    )
  }
  return (
    <View>
      <View style={{ height: windowHeight * 0.09, display: "flex", backgroundColor: "#fff", padding: 20 }}>
        <Text style={{
          fontSize: 24,
          fontWeight: 'bold',
          color: '#333',
        }}>Estudiantes</Text>
        <Text style={{ fontSize: 15, fontWeight: '300' }}>Ahora cuenta con 1 estudiantes</Text>
      </View>
      <ScrollView style={{ display: "flex", backgroundColor: "#fff", padding: 20, height: windowHeight * 0.70 }}>


        <CardStudent cardType='user'/>
        
      </ScrollView>
      <View style={{ padding:20,  display: "flex", backgroundColor: "#fff" }}>
        <CustomButton disabled={false} onPress={()=>navigateToCreateCourse()} text='Agregar usuario'/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({})