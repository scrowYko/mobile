import React from 'react';
import { View, StyleSheet, Text} from 'react-native';
import { Link } from 'expo-router';

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20,
    },
    box: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 50,
    },
    textoT: {
        color: 'white',
        fontSize: 30,
    },
    texto: {
        color: 'white',
    },
});

export default function Home() {
    return (
        <View style={styles.container}>
            <View style={styles.box}>
                <Text style={styles.textoT}>Selecione a Atividade:</Text>
            </View>
            <Link href="/Pages/pag1/Sobre">
                <Text style={styles.texto}>Sobre mim</Text>
            </Link>
            <Link href="/Pages/iFome/home">
                <Text style={styles.texto}>iFome</Text>
            </Link>
            <Link href="/Pages/galeria">
                <Text style={styles.texto}>Software: Galeria</Text>
            </Link>
            <Link href="/Pages/camera">
                <Text style={styles.texto}>Hardware: Câmera</Text>
            </Link>
        </View>
    );
}
