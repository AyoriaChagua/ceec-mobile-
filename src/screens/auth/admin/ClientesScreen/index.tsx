import { TouchableOpacity, Text, ScrollView, View } from 'react-native';
import React from 'react';
import { styles } from './style';
import { CampaignCardAdmin, LoadIndicator } from '../../../../components';
import {useUserAdmin }  from './hooks/useUserAdmin';
import { RootStackParamListAdmin } from '../../../../interfaces/NavigationInterfaces';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { CommonActions, useFocusEffect } from '@react-navigation/native';
import { Icon } from 'react-native-paper';
import { getCurrentDateAsString } from '../../../../utils/Dates';

type Props = {
  readonly navigation: NativeStackNavigationProp<RootStackParamListAdmin, 'Clients'>;
};

export default function ClientsScreen({ navigation }: Props) {
  const { loading, useradmin } = useUserAdmin(); 


  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView style={styles.container} >
        {useradmin.map((useradmin , index) => (
           <View key={index} style={styles.cardContainer}>
                
           <View style={styles.userDetails}>
               <Text style={styles.userName}>{useradmin.Profile.first_name || "Usuario"}  {useradmin.Profile?.last_name}</Text>
               <Text>{useradmin.email} </Text>
               <Text style={styles.score}>{useradmin.client.name} </Text>
              
           </View>
       </View>
       ))}
       </ScrollView>
   </View>
);
}