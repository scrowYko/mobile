import React from "react";
import { Text, View, TextInput, Pressable, FlatList } from "react-native";
import { novaTarefa, alterBoolean } from "../../scripts/listaTarefas";

const style = function () {
  return {
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    container2: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "row",
      gap: 20,
    },
    isDone: {
      textDecorationLine: "line-through",
      backgroundColor: '#F1F3F4', // Cinza um pouco mais escuro
      color: 'rgba(0, 0, 0, 0.5)', // Letra com opacidade reduzida
      width: 160,
      flex: 1,
      textAlign: 'center',
      justifyContent: 'center',
      height: 60,
      borderRadius: 8,
      border: 'solid #0077b6 3px',
    },
    notDone: {
      backgroundColor: '#FFFFFF', // Cinza bem claro
      textDecorationLine: 'none',
      color: 'rgba(0, 0, 0, 1)', // Letra com opacidade normal
      width: 160,
      flex: 1,
      textAlign: 'center',
      justifyContent: 'center',
      height: 60,
      borderRadius: 8,
      border: 'solid #35E0FF 3px',
    },
    input:{
      width:200,
      flex: 1,
      backgroundColor: '#F1F3F4',
      justifyContent: 'center',
      alignItems: 'center',
      height: 40,
      height: 60,
      borderRadius: 4,
      border: 'solid #000000 3px',
      padding: 6
    }
  };
};

export default function listaTarefas() {
  const [tarefas, atualizarTarefas] = React.useState([]);
  const [text, onChangeText] = React.useState("");

  React.useEffect(() => {
    console.log(tarefas);
  }, [tarefas]);

  return (
    <View style={style().container}>
      <View style={style().container2}>
        <TextInput
          onChangeText={onChangeText}
          placeholder="Digite aqui"
          value={text}
          style={style().input}
        />
        <Pressable onPress={() => novaTarefa(text, tarefas, atualizarTarefas)} style={style().input}>
          <Text>Adicionar</Text>
        </Pressable>
      </View>
      <FlatList
        data={tarefas}
        renderItem={({ item }) => {
          console.log(item);
          return (
            <Text >
              <Pressable style={item.isDone == true ? style().isDone : style().notDone}
                onPress={() => alterBoolean(item.id, tarefas, atualizarTarefas)}
              >
                {item.title}
              </Pressable>
            </Text>
          );
        }}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}
