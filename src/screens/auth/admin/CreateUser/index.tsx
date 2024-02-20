import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { windowHeight } from '../../../../utils/Dimentions'
import { CustomButton } from '../../../../components'
import CourseInput from '../../../../components/CourseInput'
import { useForm } from 'react-hook-form'
import { RadioButton } from 'react-native-paper'

export default function CreateUser() {
    const { control, handleSubmit } = useForm();

    return (
        <View>
            <View style={{ height: windowHeight * 0.09, display: "flex", backgroundColor: "#fff", padding: 20 }}>
                <Text style={{
                    fontSize: 24,
                    fontWeight: 'bold',
                    color: '#333',
                }}>Nuevo usuario</Text>
                <Text style={{ fontSize: 15, fontWeight: '300' }}>Crea administradores o estudiantes</Text>
            </View>
            <ScrollView style={{ display: "flex", backgroundColor: "#fff", padding: 20, height: windowHeight * 0.70 }}>
                <CourseInput control={control} label='Email' name='email' inputType='text' />
                <CourseInput control={control} label='Contraseña' name='email' inputType='text' />
                <CourseInput control={control} label='Repetir contraseña' name='email' inputType='text' />
                <RadioButton.Group onValueChange={value => {}} value={"permanent"}>
                    <RadioButton.Item label="Permanente" value="permanent" />
                    <RadioButton.Item label="Por duración de curso" value="course-duration" />
                </RadioButton.Group>
            </ScrollView>
            <View style={{ padding: 20, display: "flex", backgroundColor: "#fff" }}>
                <CustomButton disabled={false} onPress={() => { }} text='Crear usuario' />

            </View>
        </View>
    )
}

const styles = StyleSheet.create({})