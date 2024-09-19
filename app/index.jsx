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

            <Link href="/Pages/cadastro">
                <Text style={styles.texto}>Cadastro</Text>
            </Link>

            <Link href="/Pages/Calculadora">
                <Text style={styles.texto}>Calculadora</Text>
            </Link>

            <Link href="/Pages/Gradiente">
                <Text style={styles.texto}>Gradiente</Text>
            </Link>

            <Link href="/Pages/Lista">
                <Text style={styles.texto}>Lista</Text>
            </Link>

            <Link href="/Pages/Modal">
                <Text style={styles.texto}>Modal</Text>
            </Link>

            <Link href="/Pages/Pokemon">
                <Text style={styles.texto}>Pokemon</Text>
            </Link>
            <Link href="/Pages/pag1/Sobre">
                <Text style={styles.texto}>Sobre mim</Text>
            </Link>
        </View>
    );
}
