import { createContext, useContext, useState, useMemo, useEffect } from "react";
import { AuthProps } from "../interfaces/ContextInterfaces";
import * as SecureStore from 'expo-secure-store';
import { loginService } from "../services/auth.service";
import axios from "axios";
import  jwtDecode  from "jwt-decode";
import { LoginResponse, Profile } from "../interfaces/UserInterfaces";
import { io } from 'socket.io-client';
import { API_SOCKET_URL } from '../utils/Endpoints';
import { validateToken } from "../helpers/helper-token";
import { AppState } from 'react-native';
import { GetProfile } from "../services/profile.service";

const socket = io(API_SOCKET_URL);
const AuthContext = createContext<AuthProps>({});
export const useAuth = () => {
    return useContext(AuthContext);
}
export const AuthProvider = ({ children }: any) => {
    const [isLoading, setIsLoading] = useState(false);
    const [userToken, setUserToken] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [userInfo, setUserInfo] = useState<{
        id: number,
        role: number,
        email: string
    } | string | null>(null);
    const [profileInfo, setProfileInfo] = useState<Profile | null>(null);

    const login = async (email: string, password: string) => {
        setIsLoading(true);
        try {
            const response: LoginResponse = await loginService({ email, password });
            if (response.token) {
                axios.defaults.headers.common['Authorization'] = response.token;
                const decodedToken: { id: number; role: number; email: string } = jwtDecode(response.token);
                setUserToken(response.token);

                setUserInfo({ id: decodedToken.id, role: decodedToken.role, email: decodedToken.email });

                await SecureStore.setItemAsync('userToken', response.token);
                await SecureStore.setItemAsync('userInfo', JSON.stringify({
                    id: decodedToken.id,
                    role: decodedToken.role,
                    email: decodedToken.email,
                }));
                const profile = await GetProfile(decodedToken.id);
                if (profile) {
                    setProfileInfo(profile);
                    await SecureStore.setItemAsync('profileInfo', JSON.stringify(profile));
                }

                if (decodedToken.role === 1){
                    socket.emit('login', { userToken: response.token });
                }
            } else {
                setError(response.msg ?? 'Hubo un problema al iniciar sesión. Por favor, inténtalo de nuevo.');
            }
        } catch (error) {
            console.error('Error en el proceso de inicio de sesión:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const logout = async () => {
        const storedUserInfo = await SecureStore.getItemAsync('userInfo');
        const { role } = JSON.parse(storedUserInfo!);
        if (role === 1)
            socket.emit('logout');
        setIsLoading(true);
        setUserToken(null);
        setUserInfo(null);
        setProfileInfo(null);
        await SecureStore.deleteItemAsync('userToken');
        await SecureStore.deleteItemAsync('userInfo');
        await SecureStore.deleteItemAsync('profileInfo');
        setIsLoading(false);
    }

    useEffect(() => {
        const handleAppStateChange = async (nextAppState: string) => {
            if (nextAppState === 'background')
                socket.emit('logout');
        };
        const appStateSubscription = AppState.addEventListener('change', handleAppStateChange);
        return () => {
            appStateSubscription.remove();
        };
    }, []);

    useEffect(() => {
        (async () => {
            try {
                setIsLoading(true);
                const storedUserToken = await SecureStore.getItemAsync('userToken');
                const storedUserInfo = await SecureStore.getItemAsync('userInfo');
                const isValid = await validateToken(storedUserToken);
                if (storedUserInfo && isValid) {
                    const storedProfileInfo = await SecureStore.getItemAsync('profileInfo');
                    if (storedProfileInfo)
                        setProfileInfo(JSON.parse(storedProfileInfo));
                    const { id, role, email } = JSON.parse(storedUserInfo);
                    setUserToken(storedUserToken);
                    setUserInfo({ id, role, email });
                    if (role === 1)
                        socket.emit('login', { userToken: storedUserToken });
                } else {
                    setUserToken(null);
                    setUserInfo(null);
                }

                setIsLoading(false);
            } catch (error) {
                console.error(error);
                throw error;
            } finally {
                setIsLoading(false);
            }
        })();
    }, []);

    const value = useMemo(() => {
        return {
            onLogin: login,
            onLogout: logout,
            isLoading,
            userToken,
            error,
            userInfo,
            profileInfo
        };
    }, [login, logout, isLoading, userToken, error, userInfo, profileInfo]);

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}