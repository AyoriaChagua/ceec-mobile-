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
import LoadIndicator from '../LoadIndicator';
import ColorPicker from '../ColorPicker';
import CustomDatePicker from '../CustomDatePicker';


interface Props {
  readonly step: Step
  readonly onCourseCreated: (course_id: number, course_name: string) => void
}

export default function FormCourse({ onCourseCreated, step }: Props) {
  const { control, handleSubmit, setValue } = useForm<CourseRequest>();
  const [courseColor, setCourseColor] = useState('#00C70F');
  const [expiredDate, setExpiredDate] = useState<string | null>(null);
  const [errorImageRequire, setErrorImageRequire] = useState<null | string>(null);
  const [selectedImage, setSelectedImage] = useState("");
  const [isLoading, setIsLoading] = useState(false);



  const handleImageSelected = (image: string) => {
    setSelectedImage(image);
    setValue("image", image);
  }

  const createCourse: SubmitHandler<CourseRequest> = async (data) => {
    try {
      if (selectedImage !== "") {
        setIsLoading(true);
        const formData = new FormData();
        formData.append('image', {
          uri: selectedImage,
          type: 'image/jpeg',
          name: 'image.jpg'
        } as any);
        const response = await PostImage(formData);
        if (response) {
          const newCourse: CourseRequest = {
            description: data.description,
            image: response.imageUrl,
            name: data.name,
            background_color: courseColor,
            limit_date: expiredDate
          };
          const responseCreatedCourse = await PostNewCourse(newCourse);
          setIsLoading(false);
          Alert.alert("Éxito", `${responseCreatedCourse?.message}`);
          onCourseCreated(responseCreatedCourse?.newCourse.course_id ?? 0, responseCreatedCourse?.newCourse.name ?? "");
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


  if (isLoading) return <View style={styles.scrollContainer}><LoadIndicator animating size='large' /></View>

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
      <ScrollView style={styles.scrollContainer} >
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
            image_type='course'
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
          <CustomDatePicker onDateChange={setExpiredDate} />
          <ColorPicker onColorSelected={setCourseColor} />
        </View>
        <View style={{ display: "flex" }}>
          <CustomButton text='Crear curso' onPress={handleSubmit(createCourse)} disabled={false} />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>

  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    width: windowWidth,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
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
