import { ModuleCard } from '../../../../components';
import React , { useState }from 'react';
import { ScrollView, Text, View, Image   } from 'react-native';
import { useRoute, RouteProp,  NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../../../navigation/StudentStack';
import { Icon } from '@rneui/themed';
import { useModuleScreen } from './hooks/useModule';
import { moduleScreenStyles as styles  } from './style'; 
import { Module } from "../../../../interfaces/CourseInterfaces";

type ModuleScreenRouteProp = RouteProp<RootStackParamList, 'Module'>;

const  ModuleScreen : React.FC<{ navigation: NavigationProp<any> }> = ({ navigation }) => {
  const route = useRoute<ModuleScreenRouteProp>();
  const { course_id } = route.params;
  const { courseData, modules } = useModuleScreen(course_id);
 
  const [selectedModule, setSelectedModuleId] = useState<number | null>(null);
  
  const content_list: Module[] = [
    {
      numbertype:1,
      module_id: selectedModule || 0, // Si selectedModule es null, asigna 0
      contentName: "Diccionario",
      icon: <Icon name="book" size={30} color="#4951FF" />,
    },
    {
      numbertype:2,
      module_id: selectedModule || 0,
      contentName: "Material de clase",
      icon: <Icon name="star"  size={30} color="#4951FF" />,
    },
    {
      numbertype:3,
      module_id: selectedModule || 0,
      contentName: "FlashCard",
      icon: <Icon name="book" size={30} color="#4951FF" />,
    },
    {
      numbertype:4,
      module_id: selectedModule || 0,
      contentName: "Evaluación",
      icon: <Icon name="star" size={30} color="#4951FF" />,
    },
  ];
  const handleModuleClick = (moduleId: number , numbertype :number) => {
    setSelectedModuleId(moduleId);
   
    switch (numbertype) {
      case 1:
        navigation.navigate('Diccionario', { moduleId });
        break;
      case 2:
        navigation.navigate('Material', { moduleId });
        break;
      case 3:
        navigation.navigate('FlashCard', { moduleId });
        break;
      case 4:
        navigation.navigate('Evaluacion', { moduleId });
        break;
      default:
        // Manejo para casos adicionales
        break;
    }
  };

    return (
        <ScrollView style={styles.container}>
         
         {courseData ? (
       <View style={styles.containercourse}>
       <View style={styles.courseInfo}>
         <Text style={styles.courseTitle}>{courseData.name}</Text>
         <View style={styles.divider} />
         <Image source={{ uri: courseData.image }} style={styles.courseImage} />
       </View>

       <View style={styles.courseInfo}>
         <Text style={styles.subtitulo}>Sobre el Curso</Text>
         <Text style={styles.courseDescription}>{courseData.description}</Text>
       </View>
     </View>
   ) : null}

<Text style={styles.subtitulo}>Contenido del Curso</Text>
          {modules.map((module) => (
            <React.Fragment key={module.module_id}>
               
               <ModuleCard modules={content_list} namemodulo={` ${module.name}`} handleModuleClick={handleModuleClick} />

             
              <View style={styles.divider} />
            </React.Fragment>
          ))}
        </ScrollView>
        
      );
    };

  export default ModuleScreen;