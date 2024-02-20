import { Text, View } from 'react-native'
import React, { useState } from 'react'
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamListAdmin } from '../../../../interfaces/NavigationInterfaces';
import { CustomStepIndicator, FormCourse, FormDictionary, FormEvaluation, FormFlashCard, FormModule } from '../../../../components';
import { styles } from './styles'

export type Step = 'module' | 'dictionary' | 'flash-card' | 'evaluation';

//import { windowHeight } from '../../../../utils/Dimentions';
type CreateModuleScreenProps = RouteProp<RootStackParamListAdmin, 'CreateModule'>;
export default function CreateModule() {
    const route = useRoute<CreateModuleScreenProps>();
    const { params } = route;
    console.log(params.courseId);

    const [currentStep, setCurrentStep] = useState<Step>('module');

    const [createdModule, setCreatedModule] = useState({
        created: false,
        newModuleId: 0
    });
    const [createdFlashCard, setCreatedFlashCard] = useState({
        created: false,
        newModuleId: 0
    });
    const [createdDictionary, setCreatedDictionary] = useState({
        created: false,
        newModuleId: 0
    })

    const [currentPosition, setCurrentPosition] = useState(0);


    const handleCreatedModule = (module_id: number) => {
        if (module_id != 0) {
            setCreatedModule({ created: true, newModuleId: module_id });
            setCurrentPosition(2);
            setCurrentStep("dictionary")
        }
    }

    const handleCreatedDictionary = (created: boolean) => {
        if (created) {
            setCreatedDictionary({
                created: true,
                newModuleId: createdModule.newModuleId
            });
            setCurrentPosition(3);
            setCurrentStep("flash-card")
        }
    }

    const handleCreatedFlashCards = (created: boolean) => {
        if (created) {
            setCreatedFlashCard({
                created: true,
                newModuleId: createdModule.newModuleId
            });
            setCurrentPosition(4);

            setCurrentStep("evaluation")
        }
    }

    const handleCreatedEvaluation = () => {
        setCurrentPosition(5);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Creando nuevo <Text style={styles.b}>Módulo</Text></Text>
            <CustomStepIndicator currentPosition={currentPosition} labels={["Módulo", "Diccionario", "Flash Cards", "Evaluación"]} />
            <FormModule
                step={currentStep}
                newCourseId={params.courseId}
                onModuleCreated={handleCreatedModule} />
            {createdModule.created && (
                <FormDictionary
                    step={currentStep}
                    newModuleId={createdModule.newModuleId}
                    onDictionaryCreated={handleCreatedDictionary} />
            )}

            {createdDictionary.created && (
                <FormFlashCard
                    step={currentStep}
                    newModuleId={createdDictionary.newModuleId}
                    onFlashCardCreated={handleCreatedFlashCards}
                />
            )}

            {createdFlashCard.created && (
                <FormEvaluation
                    newModuleId={createdDictionary.newModuleId}
                    onEvaluationCreated={handleCreatedEvaluation}
                    step={currentStep}
                />
            )}
        </View>
    )
}