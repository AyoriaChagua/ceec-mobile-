import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { CustomImagePicker } from '../../../../components'
import { useProfile } from '../ProfileScreen/hooks/useProfile';
import { useAuth } from '../../../../context/AuthContext';

export default function UpdateProfile() {
  const [selectedImage, setSelectedImage] = useState("");
  const { userInfo } = useAuth();
  const user = userInfo as { id: number };
  const { documentTypes, error, loading, profile } = useProfile(user.id);

  const handleImageSelected = (image: string) => {
    setSelectedImage(image);
}
  return (
    <View style={[styles.container, { backgroundColor: '#fff' }]}>
      <View style={[styles.container, styles.cardInfo]}>
        <View style={[styles.container, { justifyContent: "center",
        alignItems: "center"}]}>
          <CustomImagePicker onImageSelected={handleImageSelected} image_type='profile' image_uri={profile && profile.Profile?.profile_picture as any} />
        </View>
      </View>
      <View style={[styles.container, { backgroundColor: '#fff' }]}>
        <Text>UpdateProfile</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  cardInfo: {
    backgroundColor: '#4951FF', borderBottomRightRadius: 20, borderBottomLeftRadius: 20
  }
})