import { Alert, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Step } from '../../screens/auth/admin/CreateCourse';
import { windowWidth } from '../../utils/Dimentions';
import { getModuleInfoById } from '../../services/module.service';
import { useAuth } from '../../context/AuthContext';
import { Material } from '../../interfaces/ContentModuleInterface';
import CourseInput from '../CourseInput';
import { SubmitHandler, useForm } from 'react-hook-form';
import { rules } from '../../utils/Rules';
import { FlashCardRequest } from '../../interfaces/FlashCardInterfaces';
import { ToggleButton } from 'react-native-paper';
import CustomButton from '../CustomButton';
import { postFlashCard } from '../../services/flashcard.service';

interface Props {
  readonly step: Step
  readonly onFlashCardCreated: (created: boolean) => void
  readonly newModuleId: number
}

export default function FormFlashCard({ newModuleId, onFlashCardCreated, step }: Props) {
  const { userToken } = useAuth();
  const [module, setModule] = useState<null | Material>(null);
  const { control, handleSubmit, getValues } = useForm<any>();
  const [toggleValues, setToggleValues] = useState<any>({});

  const saveFlashCards: SubmitHandler<any> = async (data) => {
    const formData = getValues();
    const newData = { ...formData, toggleValues };
    const request = jsonFormater(newData);
    const response = await postFlashCard(request, userToken!);
    if (response.data.error) {
      Alert.alert("Error", `${response?.data.error}`);
      onFlashCardCreated(false);
    } else {
      Alert.alert("Éxito", `${response?.data.message}`);
      onFlashCardCreated(true);
    }
  }

  const handleToggleChange = (value: string, key: string) => {
    setToggleValues((prevState: Record<string, string>) => ({
      ...prevState,
      [key]: value
    }));
  };

  const jsonFormater = (json: any): FlashCardRequest => {
    const transformedJson: FlashCardRequest = {
      indication: json["flash-card"],
      correct_answer: [],
      incorrect_answer: [],
      module_id: newModuleId,
      quizztype_id: 2
    };
    for (let i = 1; i <= 9; i++) {
      const wordKey = `word-fc-${i}`;
      const toggleKey = `word-${i}`;

      if (json["toggleValues"][toggleKey] === "correct") {
        transformedJson["correct_answer"].push(json[wordKey] as never);
      } else {
        transformedJson["incorrect_answer"].push(json[wordKey] as never);
      }
    }

    return transformedJson;
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
        display: step !== 'flash-card' ? "none" : "flex",
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
        <View style={{ marginTop: 15 }}>
          <CourseInput
            control={control}
            name='flash-card'
            label='Indicación'
            inputType='text'
            rules={rules}
          />

          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(number => (
            <View key={number} style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center"
            }}>
              <View style={{ width: "75%" }}>
                <CourseInput
                  control={control}
                  name={`word-fc-${number}`}
                  label={`Palabra ${number}`}
                  inputType='text'
                  rules={rules}
                />
              </View>
              <View style={{ width: "25%" }}>
                <ToggleButton.Row
                  onValueChange={(value) => handleToggleChange(value, `word-${number}`)}
                  value={toggleValues[`word-${number}`]}
                >
                  <ToggleButton icon="check" value="correct" />
                  <ToggleButton icon="close" value="incorrect" />
                </ToggleButton.Row>
              </View>
            </View>
          ))}
        </View>
        <View>
          <CustomButton disabled={false} text='Guardar flash cards' onPress={handleSubmit(saveFlashCards)} />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>

  )
}

const styles = StyleSheet.create({

})