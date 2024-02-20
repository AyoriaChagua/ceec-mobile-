import { View, Text, SafeAreaView, KeyboardAvoidingView, Platform } from 'react-native';
import { useForm, SubmitHandler } from 'react-hook-form';
import { NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../../interfaces/NavigationInterfaces';
import { styles } from './styles';
import { AuthInput, CustomButton } from '../../../components';
import Ebook from '../../../../assets/images/ebook.svg';
import Logo from '../../../../assets/images/logo.svg';
import { useAuth } from '../../../context/AuthContext';
import { LoginRequest } from '../../../interfaces/UserInterfaces';
import { ScrollView } from 'react-native-gesture-handler';
import { windowWidth } from '../../../utils/Dimentions';

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
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{
        flex: 1,
        justifyContent: 'center',
      }}
    >
      <ScrollView style={{
        flex: 1,
        width: windowWidth,
        backgroundColor: '#fff',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        paddingTop: Platform.OS === "ios" ? 40 : 0,
      }}>
        <View style={{paddingHorizontal: 20}}>
        <View style={styles.header}>
          <Logo height={25} />
          <Ebook height={200} style={styles.ebook} />
        </View>
        <View>
          <Text style={styles.h1}>INICIA SESIÓN</Text>
          <Text style={styles.text}>Centro de Excelencia en Experiencia del Cliente</Text>
        </View>
        <View style={styles.form}>
          <AuthInput label="Email" isEmail control={control} name="email" />
          <AuthInput label="Password" isSecure control={control} name="password" />
          {error && <Text style={{ color: 'red', fontWeight: '400' }}>{error}</Text>}
          <CustomButton
            text="Ingresar"
            onPress={handleSubmit(onLoginPressed)}
            disabled={isLoading!}
          />
        </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;