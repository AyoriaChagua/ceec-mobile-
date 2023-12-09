import React from 'react';
import { Text, SafeAreaView, ScrollView } from 'react-native';
import { useForm, SubmitHandler } from 'react-hook-form';
import { NavigationProp } from '@react-navigation/native';
import { RootStackParamListAdmin } from '../../../../interfaces/NavigationInterfaces';
import { styles } from './styles';
import { DocumentType, ProfileRequest } from '../../../../interfaces/UserInterfaces';
import { ProfileInput, CustomButton, CustomAccordionList, LoadIndicator } from '../../../../components';
import { useProfile } from './hooks/useProfile';
import { PostProfile } from '../../../../services/profile.service';
import { useAuth } from '../../../../context/AuthContext';

export type Props = {
    readonly navigation: NavigationProp<RootStackParamListAdmin, 'Dashboard'>;
};

const ProfileScreen = () => {
    const { userInfo } = useAuth();
    const id = userInfo as { id: number };
    const { documentTypes, error, loading, } = useProfile();
    const { control, handleSubmit } = useForm<ProfileRequest>();
    const [selectedDocumentType, setSelectedDocumentType] = React.useState<DocumentType | null>(null);
    if (loading) {
        return <LoadIndicator animating={true} size='large' />
    }
    const onCreateProfilePressed: SubmitHandler<ProfileRequest> = async (data) => {
        try {
            const dataForm: ProfileRequest = {
                first_name: data.first_name,
                last_name: data.last_name,
                document_id: selectedDocumentType!.document_id,
                document_number: data.document_number,
                phone: data.phone,
            };
            const savedProfile = await PostProfile(id.id, dataForm);
            if (savedProfile) {
                console.log(savedProfile);
            }
        } catch (error) {
            console.error('Error al procesar el inicio de sesión:', error);
            alert('Hubo un problema al iniciar sesión. Por favor, inténtalo de nuevo.');
        }
    };

    const handleDocumentTypeSelect = (selectedType: DocumentType = { document_id: 1, name: "DNI" }) => {
        setSelectedDocumentType(selectedType);
        console.log('Selected Document Type:', selectedType.document_id);
    };    

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.content}>
                <Text style={styles.h1}>CREA TU PERFIL!</Text>
                <ProfileInput
                    inputType='text'
                    label="Nombre"
                    control={control}
                    name="first_name"
                    rules={{
                        required: {
                            value: true,
                            message: 'Este campo es obligatorio'
                        },
                        maxLength: {
                            value: 15,
                            message: 'La longitud de la entrada es muy corta'
                        },
                    }}
                />
                <ProfileInput
                    inputType="text"
                    label="Apellido"
                    control={control}
                    name="last_name"
                    rules={{
                        required: {
                            value: true,
                            message: 'Este campo es obligatorio'
                        },
                        maxLength: {
                            value: 15,
                            message: 'La longitud de la entrada es muy corta'
                        },
                    }}
                />
                <CustomAccordionList
                    title='Tipo de documento de identidad'
                    documentTypes={documentTypes}
                    selectedItem={selectedDocumentType!}
                    onSelect={(documentType) => {
                        handleDocumentTypeSelect(documentType);
                    }}
                />
                <ProfileInput
                    inputType='number'
                    label="Número de Documento"
                    control={control}
                    name="document_number"
                    rules={{
                        required: {
                            value: true,
                            message: 'Este campo es obligatorio'
                        },
                        maxLength: {
                            value: 8,
                            message: 'La longitud de la entrada es muy corta'
                        },
                    }}
                />
                <ProfileInput
                    inputType='number'
                    label="Teléfono móvil"
                    control={control}
                    name="phone"
                    rules={{
                        required: {
                            value: true,
                            message: 'Este campo es obligatorio'
                        },
                        maxLength: {
                            value: 9,
                            message: 'La longitud de la entrada es muy corta'
                        },
                    }}
                />
                {error && <Text style={{ color: 'red', fontWeight: '400' }}>{error}</Text>}

                <CustomButton
                    text="Guardar Cambios"
                    onPress={handleSubmit(onCreateProfilePressed)}
                    disabled={loading}
                />
            </ScrollView>
        </SafeAreaView>
    );
};

export default ProfileScreen;
