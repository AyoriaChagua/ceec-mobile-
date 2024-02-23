// En el archivo App.js

import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/auth/student/HomeScreen';
import NotasScreen from '../screens/auth/student/NotasScreen';
import CourseQuizScreen from '../screens/auth/student/CourseQuizScreen';
import CustomDrawer from '../components/CustomDrawer';
import StudentStack from './StudentStack';  
import NotasStack from './NotasStack';
import PreQuizStack from './PreQuizStack';
const Drawer = createDrawerNavigator();
import Logo from '../../assets/images/logo-white.svg';
import ProfileScreen from '../screens/auth/profile/ProfileScreen';
import { useAuth } from '../context/AuthContext';
import { Profile } from '../interfaces/UserInterfaces';

export default function StudentDrawer() {
    const { profileInfo, userInfo } = useAuth();
    const email = userInfo as { email: string };
    let defaultScreen: 'Profile' | 'Dashboard' = 'Profile'
    let fullname = 'Actualiza tu perfil ';
    let uri_picture = ''
    if (profileInfo) {
        const profile = profileInfo as Profile
        defaultScreen = 'Dashboard';
        fullname = `${profile.first_name} ${profile.last_name}`
        uri_picture = profile.profile_picture!
    }
  
    return (
        <Drawer.Navigator
            initialRouteName={defaultScreen}
            drawerContent={(props) => (
                <CustomDrawer {...props} email={email.email} fullname={fullname} uri_picture={uri_picture} />
            )}
            screenOptions={{
                drawerActiveBackgroundColor: '#3C63FF',
                drawerActiveTintColor: '#fff',
                headerTitleStyle: { fontSize: 18 },
                headerRight: () => <Logo width={60} style={{ marginHorizontal: 15 }} />,
                headerStyle: { backgroundColor: '#3C63FF' }, 
            }}
        >
            <Drawer.Screen name="Cursos" component={StudentStack}  />
            <Drawer.Screen name=" Notas / Estado de curso " component={NotasStack} />
            <Drawer.Screen name="PreQuiz " component={PreQuizStack}/>
        </Drawer.Navigator>
    );
}
