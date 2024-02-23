import { View, Text, Image,  ImageBackground ,SafeAreaView, KeyboardAvoidingView, Platform } from 'react-native';

import { useForm, SubmitHandler } from 'react-hook-form';
import { NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../../interfaces/NavigationInterfaces';
import { styles } from './styles';
import { AuthInput, CustomButton } from '../../../components';
import Ebook from '../../../../assets/images/login/user.png';
import Logo from '../../../../assets/images/login/logo_blanco.png';
import { useAuth } from '../../../context/AuthContext';
import { LoginRequest } from '../../../interfaces/UserInterfaces';
import { ScrollView } from 'react-native-gesture-handler';
import { windowWidth } from '../../../utils/Dimentions';
import backgroundImage from '../../../../assets/images/login/fondo.png'; 

export type Props = {
  readonly navigation: NavigationProp<RootStackParamList, 'Login'>;
};

const LoginScreen = () => {
  const { control, handleSubmit } = useForm<LoginRequest>();
  const { onLogin, isLoading, error } = useAuth();

  const onLoginPressed: SubmitHandler<LoginRequest> = async (data) => {
    try {
      const dataForm = { email: data.email.toLowerCase(), password: data.password };
      await onLogin?.(dataForm.email, dataForm.password);
    } catch (error) {
      console.error('Error al procesar el inicio de sesión:', error);
      alert('Hubo un problema al iniciar sesión. Por favor, inténtalo de nuevo.');
    }
  };

  return  (
    <SafeAreaView style={{ flex: 1 }}>
    <ImageBackground
    source={backgroundImage}
    style={styles.backgroundImage}
  >
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
     <ScrollView
            contentContainerStyle={styles.scrollViewContent}
          >
        <View style={{paddingHorizontal: 20}}>
        <View style={styles.header}>
          <Image source={Logo}   style={styles.logo} />
          <Text style={styles.h1}>Iniciar sesión</Text>
          <Image source={Ebook} style={styles.ebook} />
        </View>
      
        <View style={styles.form}>
          <AuthInput label="Usuario " isEmail control={control} name="email" />
          <AuthInput label="Contraseña " isSecure control={control} name="password" />
          {error && <Text style={{ color: 'red', fontWeight: '400' }}>{error}</Text>}
          <View style={{  marginTop: 70 }}>
          <CustomButton
            text="Ingresar"
            onPress={handleSubmit(onLoginPressed)}
            disabled={isLoading!}
            
          />
          </View>
        </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
    </ImageBackground>
    </SafeAreaView>
  );
};

export default LoginScreen;