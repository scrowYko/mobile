import React from "react";
import { Text, View, TextInput, Pressable, FlatList } from "react-native";
import { novaTarefa } from "../../scripts/listaTarefas";

const style = function () {
  return {
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    isDone: {
      textDecoration: "lineThrough",
    },
    notDone: {
      backgroundColor: "red",
    },
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
      <View>
        <TextInput
          onChangeText={onChangeText}
          placeholder="Digite aqui"
          value={text}
        />
        <Pressable onPress={() => novaTarefa(text, tarefas, atualizarTarefas)}>
          <Text>Adicionar</Text>
        </Pressable>
      </View>
      <FlatList
        data={tarefas}
        renderItem={({ item }) => {
          console.log(item)
           return item.isDone == false ? (
            <Text style={style().notDone}>{item.title}</Text>
          ) : (
            <Text style={style().isDone}>{item.title}</Text>
          );
        }}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}
