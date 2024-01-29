import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DashboardScreen from '../screens/auth/admin/DashboardScreen';
import CustomDrawer from '../components/CustomDrawer';
import Logo from '../../assets/images/logo.svg';
import { Icon } from 'react-native-paper';
import { createStackNavigator } from '@react-navigation/stack';
import DetailsTest from '../screens/auth/admin/DetailsTest';
import { RootStackParamListAdmin } from '../interfaces/NavigationInterfaces';
import ProfileScreen from '../screens/auth/profile/ProfileScreen';
import { useAuth } from '../context/AuthContext';
import CoursesScreen from '../screens/auth/admin/CoursesScreen';
import CourseScreen from '../screens/auth/admin/CourseScreen';
import UsersScreen from '../screens/auth/admin/UsersScreen/inde';
import CreateCourse from '../screens/auth/admin/CreateCourse';

const Drawer = createDrawerNavigator<RootStackParamListAdmin>();
const Stack = createStackNavigator<RootStackParamListAdmin>();

const AdminDrawer = () => {
    const { profileInfo, userInfo } = useAuth();
    const email = userInfo as { email: string };
    let defaultScreen: 'Profile' | 'Dashboard' = 'Profile'
    let fullname = 'Actualiza tu perfil '
    if (profileInfo) {
        defaultScreen = 'Dashboard';
        fullname = `${profileInfo.first_name} ${profileInfo.last_name}`
    }
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
            <Drawer.Screen
                name="Dashboard"
                component={DashboardScreen}
                options={{
                    headerTitle: '',
                    drawerIcon: ({ color }) => (
                        <Icon source="collage" color={color} size={22} />
                    ),
                }}
            />
            <Drawer.Screen
                name="Courses"
                component={CoursesScreen}
                options={{
                    headerTitle: '',
                    drawerIcon: ({ color }) => (
                        <Icon source="book-open" color={color} size={22} />
                    ),
                }}
            />
            <Drawer.Screen
                name="Users"
                component={UsersScreen}
                options={{
                    headerTitle: 'account-group',
                    drawerIcon: ({ color }) => (
                        <Icon source="account-group" color={color} size={22} />
                    ),
                }}
            />
            <Drawer.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    headerTitle: '',
                    drawerIcon: ({ color }) => (
                        <Icon source="account-circle" color={color} size={22} />
                    ),
                }}
            />

        </Drawer.Navigator>
    )
};

const AdminNav = () => (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
            name="AdminDrawer"
            component={AdminDrawer}
        />
        <Stack.Screen
            name="Details"
            component={DetailsTest}
            initialParams={{ itemId: 1 }}
            options={{
                headerShown: true
            }}
        />
        <Stack.Screen
            name="Course"
            component={CourseScreen}
            initialParams={{ courseId: 1 }}
            options={{
                headerRight: () => <Logo width={60} style={{ marginHorizontal: 15 }} />,
                title: "",
                headerShown: true
            }}
        />
        <Stack.Screen
            name="CreateCourse"
            component={CreateCourse}
            options={{
                headerRight: () => <Logo width={60} style={{ marginHorizontal: 15 }} />,
                title: "",
                headerShown: true
            }}
        />
    </Stack.Navigator>
);

export default AdminNav;
