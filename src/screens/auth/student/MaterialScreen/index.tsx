import React , { useEffect, useState } from 'react';
import { StyleSheet, Text, View ,  } from 'react-native';
import { useRoute, RouteProp } from '@react-navigation/native';
import { RootStackParamList }  from '../../../../navigation/StudentStack';
import WebView from 'react-native-webview';
import { getModuleInfoById } from '../../../../services/module.service';
import { Material } from "../../../../interfaces/ContentModuleInterface";
import { useAuth } from '../../../../context/AuthContext';
type MaterialScreenRouteProp = RouteProp<RootStackParamList, 'Material'>;
const  MaterialScreen: React.FC = () => {
  const route = useRoute<MaterialScreenRouteProp>();
  const { moduleId } = route.params;
  const { userInfo, userToken } = useAuth();
  const [material, setMaterial] = useState<Material []>([]);
   
  
  const pptURL = 'https://docs.google.com/presentation/d/10QZ1I-Pqv5D4b9fhRF4fidKE3qFK9bHb/edit?usp=sharing&ouid=101448759285435625061&rtpof=true&sd=true';
  
  return (
    <View style={styles.container}>
  
        <WebView source={{ uri: pptURL }}   />
      
    </View>
  );
};


  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F5F5F5',
    },
    wrapper: {
      // Estilos personalizados para el deslizador si es necesario
    },
  });
  

export default MaterialScreen;