import { StyleSheet, View, Alert, Text, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import React, { useState } from 'react';
import CourseInput from '../CourseInput';
import { SubmitHandler, useForm } from 'react-hook-form';
import { CourseRequest } from '../../interfaces/CourseInterfaces';
import CustomImagePicker from '../CustomImagePicker';
import CustomButton from '../CustomButton';
import { windowWidth } from '../../utils/Dimentions';
import { PostImage } from '../../services/image.service';
import { PostNewCourse } from '../../services/courses.service';
import { Step } from '../../screens/auth/admin/CreateCourse';
import { rules } from '../../utils/Rules';


interface Props {
  readonly step: Step
  readonly onCourseCreated: (course_id: number) => void
}

export default function FormCourse({ onCourseCreated, step }: Props) {
  const { control, handleSubmit, setValue } = useForm<CourseRequest>();
  const [errorImageRequire, setErrorImageRequire] = useState<null | string>(null);
  const [selectedImage, setSelectedImage] = useState("");

  const handleImageSelected = (image: string) => {
    setSelectedImage(image);
    setValue("image", image);
  }

  const createCourse: SubmitHandler<CourseRequest> = async (data) => {
    try {
      if (selectedImage !== "") {
        const formData = new FormData();
        formData.append('image', {
          uri: selectedImage,
          type: 'image/jpeg',
          name: 'image.jpg'
        } as any);
        const response = await PostImage(formData);
        if (response) {
          const newCourse: CourseRequest = { description: data.description, image: response.imageUrl, name: data.name }
          const responseCreatedCourse = await PostNewCourse(newCourse);
          Alert.alert("Éxito", `${responseCreatedCourse?.message}`);
          onCourseCreated(responseCreatedCourse?.newCourse.course_id ?? 0);
        }
        setErrorImageRequire("");
      } else {
        setErrorImageRequire("Seleccione una imagen por favor");
      }
    } catch (error) {
      Alert.alert("Error", `${error}`);
      setValue("description", "");
      setValue("image", "");
      setValue("name", "");
      console.error(error);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        display: step !== 'course' ? "none" : "flex"
      }}
    >
      <ScrollView style={{
        flex: 1,
        width: windowWidth,
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: '#fff',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
      }} >
        <View style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", margin: 15 }}>
          <Text style={{ color: "#4951FF", fontSize: 17, fontWeight: "600" }}>INFORMACIÓN BÁSICA</Text>
        </View>
        <View style={{ display: "flex" }}>
          <CourseInput
            inputType='text'
            label="Nombre"
            control={control}
            name="name"
            rules={rules}
          />
          <CustomImagePicker
            onImageSelected={handleImageSelected}
          />
          <Text style={styles.span}>
            {errorImageRequire && errorImageRequire}
          </Text>
          <CourseInput
            inputType='text'
            label="Descripción"
            control={control}
            name="description"
            rules={rules}
          />
        </View>
        <View style={{ display: "flex" }}>
          <CustomButton text='Crear curso' onPress={handleSubmit(createCourse)} disabled={false} />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>

  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  hidden: {
    display: "none"
  },
  container: {
    flex: 1,
    width: windowWidth,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  span: {
    color: 'red',
    fontWeight: '400'
  }
});
