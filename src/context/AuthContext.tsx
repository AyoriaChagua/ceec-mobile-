import { createContext, useContext, useState, useMemo, useEffect } from "react";
import { AuthProps } from "../interfaces/ContextInterfaces";
import * as SecureStore from 'expo-secure-store';
import { loginService } from "../services/auth.service";
import axios from "axios";
import jwtDecode from "jwt-decode";
import { LoginResponse } from "../interfaces/AuthInterfaces";
import { io } from 'socket.io-client';
import { API_SOCKET_URL } from '../utils/Endpoints';

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

    const emitLogin = (token: string) => {
        socket.emit('login', { token });
        console.log('emitido');
        socket.on('active-users', (data: []) => {
            console.log(data);
        });
    }
    const login = async (email: string, password: string) => {
        setIsLoading(true);
        try {
            const response: LoginResponse = await loginService({ email, password });
            if (response.token) {
                const decodedToken: { id: number; role: number; email: string; } = jwtDecode(response.token);
                setUserToken(response.token);
                setUserInfo({ id: decodedToken.id, role: decodedToken.role, email: decodedToken.email });
                SecureStore.setItemAsync('userToken', response.token);
                SecureStore.setItemAsync('userInfo', JSON.stringify(userInfo));
                emitLogin(response.token);
                axios.defaults.headers.common['Authorization'] = response.token;
            } else {
                setError(response.msg ?? 'Hubo un problema al iniciar sesión. Por favor, inténtalo de nuevo.');
            }
        } catch (error) {
            console.error('Error en el proceso de inicio de sesión:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const logout = () => {
        setIsLoading(true);
        setUserToken(null);
        setUserInfo(null);  
        SecureStore.deleteItemAsync('userToken');
        SecureStore.deleteItemAsync('userInfo');
        socket.emit('logout');
        setIsLoading(false);
    }

    useEffect(() => {
        (async () => {
            try {
                setIsLoading(true);
                const storedUserToken = await SecureStore.getItemAsync('userToken');
                const storedUserInfo = await SecureStore.getItemAsync('userInfo');
                if (storedUserInfo) {
                    const parsedUserInfo = JSON.parse(storedUserInfo);
                    setUserToken(storedUserToken);
                    setUserInfo(parsedUserInfo);
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
        };
    }, [login, logout, isLoading, userToken, error, userInfo]);

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}
