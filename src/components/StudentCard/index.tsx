import React from 'react';
import { View, Text, Image } from 'react-native';

export default function CardStudent() {
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 20 }}>
            <View style={{ width: 75, height: 75, borderRadius: 100 / 2, marginRight: 10 }}>
                <Image
                    source={require("../../../assets/images/perfil.jpg")}
                    style={{ width: '100%', height: '100%', borderRadius: 100 / 2 }}
                />
            </View>
            <View style={{ flex: 1, paddingRight: 10 }}>
                <Text style={{ fontWeight: 'bold', fontSize: 15 }}>Student1 Prueba</Text>
                <Text style={{ fontSize: 15 }}>student1@test.com</Text>
                <Text style={{ fontWeight: '300', fontSize: 13 }}>2 cursos inscritos</Text>
            </View>
            <Text style={{ color: '#4951FF', fontSize: 15 }}>Ver perfil</Text>
        </View>
    );
}
