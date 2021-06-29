import React from 'react'
import {
    View,
    Text,
    Image,
} from 'react-native'

import { ButtonIcon } from '../../components/ButtonIcon';

import IllustationImg from '../../assets/illustration.png';

import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';



export function SingIn() {
    const navigation = useNavigation();

    function handleSingIn() {
        navigation.navigate("Home");
    }

    return (
        <View style={styles.container}>
            <Image
                source={IllustationImg}
                style={styles.image}
                resizeMethod="resize"
            />

            <View style={styles.content}>
                <Text style={styles.title}>
                    Conecte-se {'\n'}
                    e organize suas  {'\n'}
                    jogatinas
                </Text>

                <Text style={styles.subTitle}>
                    Crie grupos para jogar seus games {'\n'}
                    favoritos com seus amigos
                </Text>

                <ButtonIcon
                    title='Entrar com Discord'
                    onPress={handleSingIn}
                />

            </View>


        </View>
    )
}