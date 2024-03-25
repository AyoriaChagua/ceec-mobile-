
import React, { useState, useEffect } from 'react';
import { View, Dimensions, Text, ScrollView, Image, TouchableOpacity, FlatList } from 'react-native';
import { BarChart } from 'react-native-chart-kit';
import { styles } from './styles';

const UsabilidadScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
    const userData = [
        { name: 'Wolfang Jimenez', usage: 15, correo: 'wolfang@test.com', image: 'https://res.cloudinary.com/dk2red18f/image/upload/v1709222369/CEEC/PERFIL/xdwcsdlpxi2isg83d30v.jpg', frequency: 'February', fre:3 },
        { name: 'Wolfang Jimenez', usage: 10, correo: 'wolfang@test.com', image: 'https://res.cloudinary.com/dk2red18f/image/upload/v1709222369/CEEC/PERFIL/xdwcsdlpxi2isg83d30v.jpg', frequency: 'March', fre:4 },
        { name: 'Wolfang Jimenez', usage: 0, correo: 'wolfang@test.com', image: 'https://res.cloudinary.com/dk2red18f/image/upload/v1709222369/CEEC/PERFIL/xdwcsdlpxi2isg83d30v.jpg', frequency: 'January', fre:0 },
        

        { name: 'Juan Castro', usage: 50, correo: 'student1@test.com', image: 'https://res.cloudinary.com/dcxg13hqx/image/upload/v1708447903/ceec/tik2hpecr67lgoexampm.png', frequency: 'March' , fre:15},
        { name: 'Juan Castro', usage: 40, correo: 'student1@test.com', image: 'https://res.cloudinary.com/dcxg13hqx/image/upload/v1708447903/ceec/tik2hpecr67lgoexampm.png', frequency: 'January' , fre:18},
        { name: 'Juan Castro', usage: 40, correo: 'student1@test.com', image: 'https://res.cloudinary.com/dcxg13hqx/image/upload/v1708447903/ceec/tik2hpecr67lgoexampm.png', frequency: 'February' , fre:40},

        { name: 'Kelly Cadellinas', usage: 30, correo: 'kelly@test.com', image: 'https://res.cloudinary.com/dhfsbbos3/image/upload/v1708711935/CEEC/cbkcoo3kt91tnxng1tmo.jpg', frequency: 'February' , fre : 4},
        { name: 'Kelly Cadellinas', usage: 40, correo: 'kelly@test.com', image: 'https://res.cloudinary.com/dhfsbbos3/image/upload/v1708711935/CEEC/cbkcoo3kt91tnxng1tmo.jpg', frequency: 'January' , fre : 2},
        { name: 'Kelly Cadellinas', usage: 0, correo: 'kelly@test.com', image: 'https://res.cloudinary.com/dhfsbbos3/image/upload/v1708711935/CEEC/cbkcoo3kt91tnxng1tmo.jpg', frequency: 'March' , fre : 6},


       

        { name: 'Erika Shiroma Castro', usage: 0, correo: 'eshiroma@a365.com', image: 'https://res.cloudinary.com/dhfsbbos3/image/upload/v1708727600/CEEC/gebajksaqzerqgldatrl.jpg', frequency: 'January' , fre : 0},

        { name: 'Erika Shiroma Castro', usage: 0, correo: 'eshiroma@a365.com', image: 'https://res.cloudinary.com/dhfsbbos3/image/upload/v1708727600/CEEC/gebajksaqzerqgldatrl.jpg', frequency: 'February' , fre : 2},
        { name: 'Erika Shiroma Castro', usage: 0, correo: 'eshiroma@a365.com', image: 'https://res.cloudinary.com/dhfsbbos3/image/upload/v1708727600/CEEC/gebajksaqzerqgldatrl.jpg', frequency: 'March' , fre : 3},

    ];

    userData.sort((a, b) => b.usage - a.usage);

    const [selectedMonth, setSelectedMonth] = useState<string | null>('March'); // Selected month state
    const [filteredData, setFilteredData] = useState(userData); // Initialize with all data

    useEffect(() => {
        let filteredUserData = userData;
        if (selectedMonth) {
            filteredUserData = userData.filter(user => user.frequency === selectedMonth);
        }
        setFilteredData(filteredUserData);
    }, [selectedMonth]);

  
const currentDate = new Date();
const currentMonth = currentDate.toLocaleString('default', { month: 'long' });
useEffect(() => {
    setSelectedMonth(currentMonth);
}, []);

    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const labels = filteredData.slice(0, 3).map(user => `${user.name} `);
    const data2 = filteredData.slice(0, 3).map(user => user.usage);
    const data = {
        labels: labels,
        datasets: [
            {
                data: data2,
                color: (opacity = 1) => `rgba(73, 81, 255, ${opacity})`, // optional
            }
        ]
    };    
    return (
        <View style={{ flex: 1, backgroundColor: "#fff" }}>
            <View style={{ padding: 20, backgroundColor: 'white' }}>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
                    <Text style={{ color: "#4951FF" }}>Select Month: </Text>
                    <FlatList
                        horizontal
                        data={months}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item: month }) => (
                            <TouchableOpacity onPress={() => setSelectedMonth(month)}>
                                <Text style={{ paddingHorizontal: 5, fontWeight: selectedMonth === month ? 'bold' : 'normal', color: "#4951FF" }}>{month}</Text>
                            </TouchableOpacity>
                        )}
                    />
                </View>
                <BarChart
                    data={data}
                    width={Dimensions.get('window').width - 14}
                    height={220}
                    yAxisLabel={'Uso:'}
                    yAxisSuffix={'m'}
                    chartConfig={{
                        backgroundColor: 'white',
                        backgroundGradientFrom: 'white',
                        backgroundGradientTo: 'white',
                        decimalPlaces: 0,
                        color: (opacity = 1) => `rgba(73, 81, 255, ${opacity})`,
                        labelColor: (opacity = 1) => `rgba(73, 81, 255, ${opacity})`,
                        style: {
                            borderRadius: 16
                        },
                        propsForLabels: {
                            fontSize: '12',
                            fontFamily: 'Arial',
                            fontWeight: 'bold'
                        }
                    }}
                    style={{
                        marginVertical: 8,
                        borderRadius: 16
                    }}
                />
            </View>
            <ScrollView>
                {filteredData.map((user, index) => (
                    <View key={index} style={styles.cardContainer}>
                        <Image source={{ uri: user.image }} style={styles.profileImage} />
                        <View style={styles.userDetails}>
                            <Text style={styles.userName}>{user.name}</Text>
                            <Text>{user.correo}</Text>
                            <Text style={styles.score}>{user.fre} veces ingreso al app </Text>
                        </View>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
};

export default UsabilidadScreen;