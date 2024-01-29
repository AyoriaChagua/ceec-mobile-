import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Controller } from 'react-hook-form';
import { TextInput } from 'react-native-paper';

interface CourseInputProps {
    readonly label: string;
    readonly control: any;
    readonly name: "name" | "description" | "image" | "limit_date";
    readonly inputType: 'text' | 'number' | 'date';
    readonly rules?: any;
}

export default function CourseInput({ label, control, name, inputType, rules }: CourseInputProps) {
    const keyboardType = inputType === 'number' ? 'numeric' : 'default';
    return (
        <View style={styles.container}>
            <Controller
                rules={rules}
                control={control}
                render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
                    <View style={{}}>
                        <TextInput 
                            label={label}
                            value={value}
                            onChangeText={onChange}
                            onBlur={onBlur}
                            mode={name === "description" ? "outlined": "flat"}
                            style={{ backgroundColor: '#fff', padding: 3, fontSize: 15 }}
                            underlineColor="#2B32CE"
                            selectionColor="#2B32CE"
                            activeUnderlineColor="#2B32CE"
                            outlineColor="#2B32CE"
                            activeOutlineColor="#2B32CE"
                            keyboardType={keyboardType}
                            maxLength={rules?.maxLength?.value || undefined}
                            multiline={name === "description"}
                            numberOfLines={name === "description" ? 6 : 1 }
                            
                        />
                        {error && (
                            <Text style={styles.span}>{error.message ?? 'Error'}</Text>
                        )}
                    </View>
                )}
                name={name}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 20
    },
    span: {
        color: 'red',
        fontWeight: '400'
    }
});