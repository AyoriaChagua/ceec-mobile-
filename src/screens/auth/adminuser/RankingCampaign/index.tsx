import { TouchableOpacity, Text, ScrollView, View, Image } from 'react-native';
import React, { useState } from 'react';
import { styles } from './styles';
import { useRoute, RouteProp, NavigationProp } from '@react-navigation/native';
import { CourseCardAdmin, LoadIndicator } from '../../../../components';
import { RootStackParamListAdmin } from '../../../../interfaces/NavigationInterfaces';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { CommonActions, useFocusEffect } from '@react-navigation/native';
import { Card, Icon } from '@rneui/themed';
import { useRankingCampaign} from './hooks/useRankingCampaign';
type RankingCampaignRouteProp = RouteProp<RootStackParamListAdmin, 'RankingCampaign'>;

const RankingCampaign: React.FC<{ navigation: NavigationProp<any> }> = ({ navigation }) => {
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const route = useRoute<RankingCampaignRouteProp>();
    const { params } = route;
    const { usersevaluations } = useRankingCampaign(params.campaign_id);

    const [showInfo, setShowInfo] = useState(false); // State to show or hide additional info

    return (
        <View style={styles.container}>
            <ScrollView>
                {usersevaluations.map((userEval, index) => (
                    <View key={index} style={styles.cardContainer}>
                        <Image source={{ uri: "https://res.cloudinary.com/dhfsbbos3/image/upload/v1711056243/CEEC/mvnegfqtwbqkjxtidtmx.png" }} style={styles.profileImage} />
                        <View style={styles.userDetails}>
                            <Text style={styles.userName}>Erika Vwntura</Text>
                            <Text>erika@test.com</Text>
                            <Text style={styles.score}> puntos</Text>
                            <Text style={{ fontSize: 16, color: 'red'  }}>status</Text>
                            <View style={styles.userDetails2}>
                            <TouchableOpacity onPress={() => setShowInfo(!showInfo)}>
                                <Icon name="chevron-down" type='font-awesome' size={24} color={"#4951FF"} />
                            </TouchableOpacity>
                           
                              </View>
                        </View>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
}
export default RankingCampaign;

