
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DashboarScreen from '../screens/auth/admin/DashboardScreen';
import CustomDrawer from '../components/CustomDrawer';
import Logo from '../../assets/images/logo.svg';
import { Icon } from 'react-native-paper';

const Drawer = createDrawerNavigator();

export default function AdminDrawer() {
    return (
        <Drawer.Navigator
            drawerContent={
                (props) =>
                    <CustomDrawer {...props}
                        email={'test'}
                        fullname={'test'}
                    />
            }
            screenOptions={{
                drawerActiveBackgroundColor: '#2B32CE',
                drawerActiveTintColor: '#fff',
                headerTitleStyle: { fontSize: 18 },
                headerRight: () => (
                    <Logo width={60} style={{ marginHorizontal: 15 }} />
                )
            }}
        >
            <Drawer.Screen 
            name="Dashboard" 
            component={DashboarScreen} 
            options={{ 
                headerTitle: '',
                drawerIcon: ({ color }) => (
                    <Icon source="collage" color={color} size={22} />
                  ), 
                }} />
        </Drawer.Navigator>
    );
}
