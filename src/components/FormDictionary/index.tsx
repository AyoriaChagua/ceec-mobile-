import { Alert, KeyboardAvoidingView, Platform, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Step } from '../../screens/auth/admin/CreateCourse'
import { windowWidth } from '../../utils/Dimentions'
import { getModuleInfoById } from '../../services/module.service'
import { useAuth } from '../../context/AuthContext'
import { Material } from '../../interfaces/ContentModuleInterface'
import { ScrollView } from 'react-native-gesture-handler'
import CourseInput from '../CourseInput'
import { SubmitHandler, useForm } from 'react-hook-form'
import CustomButton from '../CustomButton'
import { Icon } from 'react-native-paper'
import { rules } from '../../utils/Rules'
import { PostDictionary } from '../../services/dictionary.service'
import { DictionaryRequest } from '../../interfaces/DictionaryInterfaces'

interface Props {
    readonly step: Step
    readonly onDictionaryCreated: (created: boolean) => void
    readonly newModuleId: number
}

interface WordForm {
    word: string | string[];
    meaning: string | string[];
    id: number
}

export default function FormDictionary({ onDictionaryCreated, step, newModuleId }: Props) {
    const { userToken } = useAuth();
    const [module, setModule] = useState<null | Material>(null);
    const [wordForms, setWordForms] = useState<WordForm[] | null>(null);
    const { control, handleSubmit } = useForm<WordForm>();

    const addDictionary = () => {
        let index = 0;
        index = wordForms?.length ?? 0;
        const newDictionary: WordForm = { meaning: "", word: "", id: index }
        setWordForms([...(wordForms ?? []), newDictionary]);
    }

    const deleteForm = (index: number) => {
        control.unregister(`word[${index}]` as any);
        control.unregister(`meaning[${index}]` as any);
        const newForm = wordForms ? wordForms?.slice(0, index) : null;
        setWordForms(newForm);
    }

    const saveDictionary: SubmitHandler<WordForm> = async (data) => {
        const transformedData = Array.isArray(data.meaning) ? data.meaning.map((meaning, index) => {
            const newValue: DictionaryRequest = {
                meaning: meaning,
                word: Array.isArray(data.word) ? data.word[index] : null,
                module_id: newModuleId,
                quizztype_id: 3
            };
            return newValue
        }) : [];
        const response = await PostDictionary(transformedData);
        if (response.error) {
            Alert.alert("Error", `${response?.message}`);
            onDictionaryCreated(false);
        } else {
            Alert.alert("Éxito", `${response?.message}`);
            onDictionaryCreated(true);
        }

    }

    useEffect(() => {
        (async () => {
            const module = await getModuleInfoById(newModuleId, userToken!);
            setModule(module);
        })();
    }, []);

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{
                flex: 1,
                justifyContent: 'center',
                padding: 20,
                display: step !== 'dictionary' ? "none" : "flex",
            }}
        >
            <ScrollView style={{
                flex: 1,
                width: windowWidth,
                paddingVertical: 20,
                paddingHorizontal: 20,
                backgroundColor: '#fff',
                borderTopRightRadius: 20,
                borderTopLeftRadius: 20,
            }} >
                <View style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                    <Text style={{
                        color: "#4951FF",
                        fontWeight: "bold"
                    }}> Módulo: </Text>
                    <Text style={{
                        color: "#4951FF"
                    }}>
                        {module?.name}
                    </Text>

                </View>
                {
                    wordForms?.map(wordForm => (
                        <View key={wordForm.id}
                            style={{
                                marginTop: 20,
                                borderWidth: 1,
                                borderRadius: 5,
                                borderColor: "#9C9C9C",
                                paddingRight: 10,
                                paddingLeft: 10,
                                paddingTop: 5
                            }}>
                            <TouchableOpacity
                                style={{
                                    alignItems: 'flex-end',
                                    justifyContent: 'center',
                                }}
                                onPress={() => { deleteForm(wordForm.id) }}
                            >
                                <Icon size={25} source={"close-circle"} color='red' />
                            </TouchableOpacity>
                            <CourseInput control={control} inputType='text' label='Palabra' name={`word[${wordForm.id}]`} rules={rules} />
                            <CourseInput control={control} inputType='text' label='Significado' name={`meaning[${wordForm.id}]`} rules={rules} />
                        </View>
                    ))
                }
                <View>
                    <TouchableOpacity
                        style={{
                            marginVertical: 15,
                            alignItems: 'flex-end',
                            justifyContent: 'center',
                        }}
                        onPress={addDictionary}
                    >
                        <Icon size={40} source={"plus-circle"} color='#4951FF' />
                    </TouchableOpacity>
                </View>
                <View>
                    <CustomButton text='Crear Diccionario' onPress={handleSubmit(saveDictionary)} disabled={false} />
                </View>
            </ScrollView>
        </KeyboardAvoidingView>

    )
}
