import { Link, useLocalSearchParams } from 'expo-router';
import React from 'react';
import { View, StyleSheet, Text, Image, ScrollView, FlatList, Pressable } from 'react-native';

const Detalhes = () => {

    const { id, item } = useLocalSearchParams();
    const jogo = JSON.parse(item);
    console.log(jogo)
    return (
        <View style={style.container}>
            <View style={style.navb}>
                <Text style={style.textoT}>Detalhes</Text>
            </View>
            <View style={style.box2}>
                <Pressable>
                    <Image style={style.img} source={{ uri: jogo.img }} />
                </Pressable>
                <View style={style.boxT}>
                    <Text style={style.P1}>{jogo.nome}</Text>
                    <Text style={style.P2}>Estúdio: {jogo.estudio}</Text>
                    <Text style={style.P2}>Ultima vez jogado: {jogo.lastPlay}</Text>
                    <Text style={style.P2}>{jogo.detalhe}</Text>
                </View>
            </View>
        </View >
    );
}

export default Detalhes

const style = StyleSheet.create({
    container: {
        flex: 1,
    },
    navb: {
        width: '100%',
        height: 60,
        backgroundColor: '#315978',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    textoT: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        flex: 1,
    },
    box: {
        flex: 1,
        padding: 20,
    },
    box2: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: 10,
        width: '100%',
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        marginBottom: 20,
    },
    box3: {
        marginBottom: 20
    },
    img: {
        width: 320,
        height: 200,
        borderRadius: 20,
        objectFit: 'cover',
        marginRight: 5,
        alignSelf:'center',
        marginLeft: '5%'
    },
    boxT: {
        flexDirection: 'column',
        justifyContent: 'center',
    },
    P1: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 20,
    },
    P2: {
        color: 'black',
        fontSize: 15,
        marginTop: 5,
    },
});