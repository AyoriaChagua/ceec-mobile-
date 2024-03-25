
import React, { useState } from 'react'; 
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Asegúrate de importar la biblioteca de íconos correcta

import {getRankingExcelCourse} from '../../../../services/ranking.service';
import { useAuth } from '../../../../context/AuthContext';
import { CardStudent, CustomButton, CustomSearcher, LoadIndicator } from '../../../../components'
import { windowHeight } from '../../../../utils/Dimentions'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamListAdmin } from '../../../../interfaces/NavigationInterfaces';
import { ListItem} from '@rneui/themed'; // Import ListItem and Icon from your UI library

type Props = {
  readonly navigation: NativeStackNavigationProp<RootStackParamListAdmin, 'DescargaDatos'>;
};

export default function DescargaDatos({ navigation }: Props) {
  const url = ''; // URL del archivo que quieres descargar
  const campaigns = [
    { name: "Contactados", campaignId: 1, icon: "file-text-o" },
    { name: "Blindaje Prepago", campaignId: 2, icon: "file-text-o" }
  ];

  const courses = [
    { name: "La Comunicación", courseId: 2, icon: "file-text-o" },
    { name: "Retenciones", campaignId: 4, icon: "file-text-o" },
    { name: "Workforce-Managment", campaignId: 1, icon: "file-text-o" }
  ];

  
  const [expanded, setExpanded] = useState(false); 
  const [expanded2, setExpanded2] = useState(false); 
  const {  userToken } = useAuth();

  return (
    <View style={styles.container}>
       <ScrollView>
      <View style={styles.row}>
        <Text style={styles.texto}>Descarga Data General</Text>
        <TouchableOpacity style={styles.button} onPress={async () => { 
    const courseId = 1; 

    if (typeof  'string' && userToken) {
      try {
    await getRankingExcelCourse(courseId, userToken);
  } catch (error) {
    console.error('Error fetching module notas:', error);
    // Manejo de errores
  }

}

}}>
    <Icon name="download" size={30} color="#fff" />
</TouchableOpacity>
      </View>
      <View style={styles.row2}>
       
       {/* Descarga por Campaña */}
        <ListItem.Accordion
          content={
            <>
              {/*<Icon name="book" size={30} color="#4951FF" />*/}
              <View style={{ flex: 1 }}>
                <Text numberOfLines={1} ellipsizeMode="tail" style={styles.texto}>Descarga por Campaña</Text>
              </View>
            </>
          }
          isExpanded={expanded}
          onPress={() => {
            setExpanded(!expanded);
          }}
        >
          <ScrollView>
            {expanded &&
              campaigns.map((campaign) => (
                <TouchableOpacity key={campaign.campaignId} onPress={() => { /* Handle campaign download */ }}>
                  <ListItem key={campaign.campaignId} bottomDivider>
                    <Icon name={campaign.icon} size={24} color="#4951FF" />
                    <ListItem.Content>
                      <ListItem.Title>{campaign.name}</ListItem.Title>
                    </ListItem.Content>
                    <ListItem.Chevron />
                  </ListItem>
                </TouchableOpacity>
              ))}
          </ScrollView>
        </ListItem.Accordion>
      </View>

      
      <View style={styles.row2}>
       
       {/* Descarga por Curso */}
        <ListItem.Accordion
          content={
            <>
              {/*<Icon name="book" size={30} color="#4951FF" />*/}
              <View style={{ flex: 1 }}>
                <Text numberOfLines={1} ellipsizeMode="tail" style={styles.texto}>Descarga por Curso</Text>
              </View>
            </>
          }
          isExpanded={expanded2}
          onPress={() => {
            setExpanded2(!expanded2);
          }}
        >
          <ScrollView>
            {expanded2 &&
              courses.map((course) => (
                <TouchableOpacity key={course.courseId} onPress={() => { /* Handle campaign download */ }}>
                  <ListItem key={course.courseId} bottomDivider>
                    <Icon name={course.icon} size={24} color="#4951FF" />
                    <ListItem.Content>
                      <ListItem.Title>{course.name}</ListItem.Title>
                    </ListItem.Content>
                    <ListItem.Chevron />
                  </ListItem>
                </TouchableOpacity>
              ))}
          </ScrollView>
        </ListItem.Accordion>
      </View>

      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop:50,
    padding: 20,
    backgroundColor : '#F5F5F5'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 40,
    padding: 20,
    borderWidth: 2,
    borderColor: '#6885F8',
    borderRadius: 10,
    backgroundColor: '#fff',
  },

  row2: {
    marginBottom: 40,
    padding: 15,
    borderWidth: 2,
    borderColor: '#6885F8',
    borderRadius: 10,
    backgroundColor: '#fff',
  },
  texto: {
    textAlign: 'center',
    color: '#6885F8',
    fontSize: 20,
    width: 250,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal:10
  },
  button: {
    backgroundColor: '#6885F8',
    borderRadius: 10,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20
  },
});