import { View, Text } from 'react-native';
import { styles } from './styles';
import {  FormCourse,  FormModule } from '../../../../components'; //AnimatedButton, FormEvaluation,
import React, { useState } from 'react';
//import { windowHeight } from '../../../../utils/Dimentions';
export default function CreateCourse() {
  /*
    const [isVisibleFormCourse, setIsVisibleFormCourse] = useState(true);
    
    const handlePressButtonCurso = () => {
      setIsVisibleFormModule(false);
      setIsVisibleFormEvaluation(false);
      setIsVisibleFormCourse(true);
    };
  
    const [isVisibleFormModule, setIsVisibleFormModule] = useState(false);
    const handlePressButtoModule = () => {
      setIsVisibleFormCourse(false);
      setIsVisibleFormModule(true);
      setIsVisibleFormEvaluation(false);
    };
  
    const [isVisibleFormEvaluation, setIsVisibleFormEvaluation] = useState(false);
    const handlePressButtoEvaluation = () => {
      setIsVisibleFormCourse(false);
      setIsVisibleFormModule(false);
      setIsVisibleFormEvaluation(true);
    };
  */
  const [createdCourse, setCreatedCourse] = useState({
    created: false,
    newCourseId: 0
  });
  const handleCreatedCourse = (course_id: number) => {
    setCreatedCourse({ created: true, newCourseId: course_id });
  };
  return (
    <View style={styles.container}>
      {/*<View style={{ height: windowHeight * 0.08 }}>
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <View>
            <AnimatedButton
              icon='book-plus'
              text='Curso'
              widthText={105}
              onPress={handlePressButtonCurso}
              isVisible={isVisibleFormCourse}
            />
          </View>
          <View>
            <AnimatedButton
              icon='view-module'
              text='Módulos'
              widthText={120}
              onPress={handlePressButtoModule}
              isVisible={isVisibleFormModule}
            />
          </View>
          <View>
            <AnimatedButton
              icon='file'
              text='Evaluación'
              widthText={135}
              onPress={handlePressButtoEvaluation}
              isVisible={isVisibleFormEvaluation}
            />
          </View>
        </View>
      </View>
       <View style={{ height: windowHeight * 0.75 }}>
        {isVisibleFormCourse && (<FormCourse />)}
        {isVisibleFormModule && (<FormModule />)}
        {isVisibleFormEvaluation && (<FormEvaluation />)}
      </View> */}
      <Text style={styles.title}>Creando nuevo <Text style={styles.b}>Curso</Text></Text>
      <FormCourse onCourseCreated={handleCreatedCourse} hidden={createdCourse.created} />
      {createdCourse.created && (<FormModule newCourseId={createdCourse.newCourseId} />)}
    </View>
  )
}