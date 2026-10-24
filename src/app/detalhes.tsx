
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';

export default function Detalhes() {
    const {nome, imagem} = useLocalSearchParams()

    return (
        <View style={estile.container}>
            <Image
                source={{uri: String(imagem)}}
                style={{height: 200, width: 200}}
            />
            <Text>{nome}</Text>
            <TouchableOpacity onPress={() => router.replace('/')}>
                <Text style={{color: 'white'}}>Voltar</Text>
            </TouchableOpacity>
        </View>
    )
}

const estile = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#3e464b'
    }
})
