// En el archivo App.js

import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/auth/student/HomeScreen';
import CustomDrawer from '../components/CustomDrawer';
import StudentStack from './StudentStack';  
const Drawer = createDrawerNavigator();

export default function StudentDrawer() {
    return (
        <Drawer.Navigator drawerContent={
            (props) => <CustomDrawer {...props}
                email={'test'}
                fullname={'test'}
            />}
            screenOptions={{
                drawerActiveBackgroundColor: '#2B32CE',
                drawerActiveTintColor: '#fff',
                headerTitleStyle: { fontSize: 18 }
            }} >
            <Drawer.Screen name="HomeStudent" component={StudentStack} />
        </Drawer.Navigator>
    );
}
