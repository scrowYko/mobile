import React from "react";
import { Text, View, Image, TextInput, Button, StyleSheet } from "react-native";
import { Link } from 'expo-router';

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    Image: {
        margin: 30,
        width: 150,
        height: 150,
        borderRadius: 100,
    },
    box: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

    },
    navbar: {
        backgroundColor: '#315978',
        padding: 20
    },
    title: {
        textAlign: 'center',
        fontSize: 40
    },
    desc: {
        margin: 20,
        textAlign: 'justify',
    },
    botao: {
        marginTop:50,
        textAlign:'center',
        borderRadius:10,
        padding:20,
        width:100,
        height: 'auto',
        backgroundColor: '#FFFFFF',
        borderColor: '#000000',
        borderWidth: 1,
    },
    box2:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-evenly'

    }


})

export default Sobre = function () {
    return (
        <View>
            <View style={style.navbar}>
                <Text style={style.title}>Sobre mim</Text>
            </View>
            <View style={style.box}>
                <Image
                    style={style.Image}
                    source={require('../../../assets/images/glaz.jpg')}
                />
                <Text style={style.desc}>
                    Meu nome é Davi e tenho 18 anos. Sou um grande fã de videogames, especialmente de Rainbow Six
                    Siege, onde gosto de me divertir e jogar com os amigos. Além de me dedicar
                    aos jogos, também me empenho bastante em trabalhar.
                </Text>
            </View>
            <View style={style.box2}>
                <Link href="/Pages/pag2/Agentes" style={style.botao}>
                    <Text>Logos que eu acho legais de Agentes do R6</Text>
                </Link>
                <Link href="/Pages/pag3/Jogos" style={style.botao}>
                    <Text >Jogos</Text>
                </Link>
            </View>
        </View>
    );
};