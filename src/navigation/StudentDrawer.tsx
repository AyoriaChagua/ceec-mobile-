// En el archivo App.js

import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/auth/student/HomeScreen';
import CustomDrawer from '../components/CustomDrawer';
import StudentStack from './StudentStack';  
const Drawer = createDrawerNavigator();
import Logo from '../../assets/images/logo.svg';
import ProfileScreen from '../screens/auth/profile/ProfileScreen';
import { useAuth } from '../context/AuthContext';

export default function StudentDrawer() {
    const { profileInfo, userInfo } = useAuth();
    const email = userInfo as { email: string };
    let defaultScreen: 'Profile' | 'Dashboard' = 'Profile'
    let fullname = 'Actualiza tu perfil '
    return (
        <Drawer.Navigator
            initialRouteName={defaultScreen}
            drawerContent={(props) => (
                <CustomDrawer {...props} email={email.email} fullname={fullname} />
            )}
            screenOptions={{
                drawerActiveBackgroundColor: '#2B32CE',
                drawerActiveTintColor: '#fff',
                headerTitleStyle: { fontSize: 18 },
                headerRight: () => <Logo width={60} style={{ marginHorizontal: 15 }} />,
            }}
        >
            <Drawer.Screen name=" " component={StudentStack} />
        </Drawer.Navigator>
    );
}
