import { View, Text, Image, Pressable, Platform } from 'react-native';
import React, { useEffect, useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import { Icon } from 'react-native-paper';
import { PostImage } from '../../services/image.service';

interface Props {
  readonly onImageSelected: (uri: string) => void;
  readonly name: string;
  readonly control: any;
}
export default function CustomImagePicker({ onImageSelected, name, control }: Props) {
  const [image, setImage] = useState<null | string>(null);

  
  useEffect(() => {
    control.register(name);
    return () => control.unregister(name);
  }, [control, name]);
  

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();

  }, [])


  const pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
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
    <View >
      <View style={{ marginLeft: 20, marginBottom: 10 }}>
        <Text>Selecciona una imagen</Text>
      </View>
      {image ? (
        <Pressable onPress={pickImage}>
          <Image source={{ uri: image }} style={{ width: "auto", height: 180, borderRadius: 5 }} />
        </Pressable>
      ) : (
        <Pressable style={{ width: "auto", height: 140, borderWidth: 1, borderColor: "#2B32CE", justifyContent: "center", alignItems: "center", borderRadius: 5 }} onPress={pickImage}>
          <Icon size={60} source={"camera"} color="#4951FF" />
        </Pressable>
      )}
    </View>
  );
}
