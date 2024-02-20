import { Text, View, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { Icon } from 'react-native-paper';
import { styles } from './styles';
import { useAuth } from '../../context/AuthContext';
import Account from '../../../assets/images/account.svg';


export default function CustomDrawer(props: any) {
    const { onLogout } = useAuth();
    const handleLogout = () => {
        onLogout!();
    };
    return (
        <View style={styles.container}>
            <DrawerContentScrollView
                contentContainerStyle={{ backgroundColor: '#2B32CE' }}
                {...props}>
                <View style={styles.header}>
                    {props.uri_picture ? <Image source={{ uri: props.uri_picture }} style={{
                        width: 80,
                        height: 80,
                        borderRadius: 1000
                    }} /> : <Account width={80} height={80} />}
                    <Text style={styles.textTitle}>{props.fullname.toUpperCase()}</Text>
                    <Text style={styles.text}>{props.email}</Text>
                </View>

                <View style={styles.body}>
                    <DrawerItemList
                        {...props}
                    />
                </View>
            </DrawerContentScrollView>
            <View style={styles.footer}>
                <TouchableOpacity
                    onPress={handleLogout}>
                    <View style={styles.button}>
                        <Icon source={'logout'} size={22} />
 
                        <Text style={{ marginLeft: 30 }}>Salir</Text>

                        <Text style={{ marginLeft: 30 }}>Cerrar sesión</Text>

                    </View>
                </TouchableOpacity>
                <Text style={{ fontSize: 12 }}>v. 1.0.0</Text>
            </View>
        </View>
    )
}

