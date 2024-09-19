import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Iconsenha from 'react-native-vector-icons/Ionicons';

export default function App() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    });

    const [showSenha, setShowSenha] = useState(false);
    const [mensagem, setMensagem] = useState('');

    const handleChange = (name, value) => {
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async () => {
        if (!formData.name || !formData.email || !formData.password) {
            Alert.alert("Todos os campos devem ser preenchidos");
            return;
        }
        try {
            const response = await fetch('https://taskhub-s37f.onrender.com/auth/signup', {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Erro na solicitação: ' + response.statusText);
            }

            const data = await response.json();
            setMensagem("Cadastro realizado com sucesso!");
           
            setFormData({
                name: '',
                email: '',
                password: '',
            });
        } catch (error) {
            console.error(error);
            setMensagem("Houve um erro ao realizar o cadastro.");
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.saldoContainer}>
                <Text style={styles.label}>Sign up</Text>
            </View>
            <View style={styles.saldoContainer}>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Digite o nome"
                        value={formData.name}
                        onChangeText={(text) => handleChange('name', text)}
                    />
                    <Icon style={styles.iconu} name='user' size={25} color="#fff" />
                </View>
            </View>
            <View style={styles.saldoContainer}>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        keyboardType="email-address"
                        placeholder="Digite o email"
                        value={formData.email}
                        onChangeText={(text) => handleChange('email', text)}
                    />
                    <Icon style={styles.iconm} name='mail' size={25} color="#fff" />
                </View>
            </View>
            <View style={styles.saldoContainer}>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Digite a senha"
                        value={formData.password}
                        onChangeText={(text) => handleChange('password', text)}
                        secureTextEntry={showSenha}
                    />
                    <TouchableOpacity style={styles.icon} onPress={() => setShowSenha(!showSenha)}>
                        <Iconsenha style={styles.icon} name={showSenha ? 'eye' : 'eye-off'} color="#FFF" size={30} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.formButton}>
                <Pressable style={styles.buttoncadastro} onPress={handleSubmit}>
                    <Text style={styles.cadastro}>Sign Up</Text>
                </Pressable>
                <Pressable style={styles.buttongoogle}>
                    <Text style={styles.google}>Continue with Google</Text>
                </Pressable>
            </View>
            {mensagem ? <Text style={styles.mensagem}>{mensagem}</Text> : null}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        height: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 20,
    },
    icon: {
        color: 'black',
        marginRight: 3,
    },
    iconu: {
        color: 'black',
        marginRight: 8,
    },
    iconm: {
        color: 'black',
        marginRight: 8,
    },
    label: {
        alignItems: 'center',
        fontSize: 30,
    },
    formButton: {
        marginTop: 110,
        flexDirection: 'column',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 300,
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 10,
        backgroundColor: '#C9C9C9',
    },
    input: {
        flex: 1,
        paddingHorizontal: 10,
        height: 40,
        borderRadius: 10,
    },
    buttoncadastro: {
        width: 300,
        height: 60,
        backgroundColor: 'black',
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
        elevation: 3,
    },
    buttonText: {
        fontSize: 30,
        textAlign: 'center',
    },
    cadastro: {
        fontSize: 20,
        textAlign: 'center',
        color: 'white',
    },
    buttongoogle: {
        width: 300,
        height: 60,
        backgroundColor: '#3426AC',
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
        elevation: 3,
    },
    google: {
        fontSize: 20,
        textAlign: 'center',
        color: 'black',
    },
    mensagem: {
        fontSize: 16,
        color: 'red',
        marginTop: 10,
    },
});
