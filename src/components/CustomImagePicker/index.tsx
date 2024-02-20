import { View, Text, Image, Pressable, Platform } from 'react-native';
import React, { useEffect, useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import { Icon } from 'react-native-paper';

type ImageType = "profile" | "course"

interface Props {
  readonly onImageSelected: (uri: string) => void;
  readonly image_type?: ImageType,
  readonly image_uri?: string
}
export default function CustomImagePicker({ onImageSelected, image_type, image_uri }: Props) {
  const [image, setImage] = useState<null | string>(null);
  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, image_type === "profile" ? 4 : 3],
        quality: 1,
      });

      if (!result.canceled) {
        setImage(result.assets[0].uri);
        onImageSelected(result.assets[0].uri);
      }
    } catch (error) {
      console.error('Error al seleccionar la imagen:', error);
    }
  };

  return (
    <View  style={{ marginBottom: 20}}>
      <View style={{ marginLeft: 20, marginBottom: 10, display: image_type === "profile" ? "none" : "flex" }}>
        <Text>Selecciona una imagen</Text>
      </View>
      {image ? (
        <Pressable onPress={pickImage}>
          <Image source={{ uri: image }} style={{
            width: image_type === "profile" ? 155 : "auto",
            height: image_type === "profile" ? 155 : 180,
            borderRadius: image_type === "profile" ? 1000 : 5
          }} />
        </Pressable>
      ) : (
        <Pressable style={{
          width: image_type === "profile" ? 155 : "auto",
          height: image_type === "profile" ? 155 : 180, borderWidth: 1,
          borderColor: "#2B32CE",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: image_type === "profile" ? 1000 : 5
        }}
          onPress={pickImage}>

          {image_uri ?
            <Image source={{ uri: image_uri }} style={{
              width: image_type === "profile" ? 155 : "auto",
              height: image_type === "profile" ? 155 : 180,
              borderRadius: image_type === "profile" ? 1000 : 5
            }} /> : <Icon size={60} source={"camera"} color="#4951FF"
            />}
        </Pressable>
      )}
    </View>
  );
}


/*
SELECT evaluation_id, quizz_type, name, module_id, is_complete
	FROM public.evaluations;
	
SELECT * FROM COURSES
SELECT * FROM MODULES
SELECT * FROM DICTIONARYQUIZZES
SELECT * FROM FLASHCARDS

DELETE FROM COURSES WHERE COURSE_ID = 
DELETE FROM MODULES WHERE MODULE_ID = 
DELETE FROM DICTIONARYQUIZZES WHERE MODULE_ID = 
DELETE FROM FLASHCARDS WHERE MODULE_ID = 
*/