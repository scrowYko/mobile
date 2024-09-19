import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button, StyleSheet, FlatList, TouchableOpacity, Alert } from "react-native";


const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    Tarefa: {
        padding: 15,
        fontSize: 20,
    },
    Opacidade: {
        backgroundColor: 'pink',
        margin: 10,
        borderRadius: 2,
    },
    input: {
        flex: 1,
        borderColor: 'gray',
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
        marginRight: 10,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 40,
    },
    traco: {
        textDecorationLine: 'line-through',
        color: 'white',
    }
});


const Tarefas = [
    { id: 1, descricao: 'Ir para academia', feito: false, dataCriacao: new Date() },
    { id: 2, descricao: 'Ir para a escola', feito: false, dataCriacao: new Date() },
    { id: 3, descricao: 'Ir para o trabalho', feito: false, dataCriacao: new Date() },
    { id: 4, descricao: 'Jogar', feito: false, dataCriacao: new Date() },
];


export default function Lista() {
    const [novaTarefa, setNovaTarefa] = useState('');
    const [tarefas, setTarefas] = useState(Tarefas);


    const Feito = (id) => {
        setTarefas(tarefas.map(tarefa =>
            tarefa.id === id ? { ...tarefa, feito: !tarefa.feito } : tarefa
        ));
    };


    const Adicionar = () => {
        if (novaTarefa.trim()) {
            const nova = {
                id: tarefas.length + 1,
                descricao: novaTarefa,
                feito: false,
                dataCriacao: new Date(),
            };
            setTarefas([...tarefas, nova]);
            setNovaTarefa('');
        } else {
            Alert.alert('Erro', 'A descrição da tarefa não pode estar vazia.');
        }
    };


    const Verificar = () => {
        const umaSemana = 7 * 24 * 60 * 60 * 1000;
        const agora = new Date();
        const tarefasAtualizadas = tarefas.filter(tarefa => agora - tarefa.dataCriacao < umaSemana);


        if (tarefasAtualizadas.length < tarefas.length) {
            Alert.alert("Aviso", "Algumas tarefas desapareceram porque foram criadas há mais de uma semana.");
        }


        setTarefas(tarefasAtualizadas);
    };


    useEffect(() => {
        const intervalo = setInterval(Verificar, 1000 * 60 * 60 * 24);
        return () => clearInterval(intervalo);
    }, [tarefas]);


    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Nova tarefa"
                    value={novaTarefa}
                    onChangeText={setNovaTarefa}
                />
                <Button title="Adicionar" onPress={Adicionar} />
            </View>
            <FlatList
                data={tarefas}
                keyExtractor={Tarefa => item.id.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={styles.Opacidade}
                        onPress={() => Feito(item.id)}
                    >
                        <Text style={[styles.item, item.feito && styles.traco]}>
                            {item.descricao}
                        </Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}



