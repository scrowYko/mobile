import React from "react";
import { Text, View, TextInput, Pressable, Button } from "react-native";
import {
  Soma,
  Subtracao,
  Multiplicacao,
  Divisao,
  atualizarDisplay,
  mostrarResultado,
} from "../../scripts/Calcular.js";
const style = function () {
  return {
    container: {
      flex: 1,

      justifyContent: "center",
      alignItems: "center",
    },
    containerNumber: {
      flex: 1,
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "center",
      alignItems: "center",
    },
    Button: {
      height: 70,
      width: 70,
      margin: 12,
      borderWidth: 1,
      padding: 4,
      justifyContent: "center",
      alignItems: "center",
    },
    Text: {
      fontSize: 55,
    },
    display: {
      width: '90%',
      height: 100,
      backgroundColor: '#eee',
      justifyContent: 'center',
      alignItems: 'flex-end',
      padding: 10,
      marginBottom: 20,
    },
    displayText: {
      fontSize: 36,
    },
  };
};

export default PrimeiraFuncao = function () {
  const [memory, setMemory] = React.useState("");
  const [display, setDisplay] = React.useState(0);
  const [lastOperation, setOperation] = React.useState("");
  return (
    <View style={style().container}>
      <View style={style().display}>
        <Text style={style().displayText}>{display}</Text>
      </View>
      <View style={style().containerNumber}>
        <Pressable
          onPress={() => atualizarDisplay(display, 1, setDisplay)}
          style={style().Button}
        >
          <Text style={style().Text}>1</Text>
        </Pressable>
        <Pressable
          onPress={() => atualizarDisplay(display, 2, setDisplay)}
          style={style().Button}
        >
          <Text style={style().Text}>2</Text>
        </Pressable>
        <Pressable
          onPress={() => atualizarDisplay(display, 3, setDisplay)}
          style={style().Button}
        >
          <Text style={style().Text}>3</Text>
        </Pressable>
        <Pressable
          style={style().Button}
          onPress={() =>
            Soma(memory, display, setMemory, setDisplay, setOperation)
          }
        >
          <Text style={style().Text}>+</Text>
        </Pressable>
        <Pressable
          onPress={() => atualizarDisplay(display, 4, setDisplay)}
          style={style().Button}
        >
          <Text style={style().Text}>4</Text>
        </Pressable>
        <Pressable
          onPress={() => atualizarDisplay(display, 5, setDisplay)}
          style={style().Button}
        >
          <Text style={style().Text}>5</Text>
        </Pressable>
        <Pressable
          onPress={() => atualizarDisplay(display, 6, setDisplay)}
          style={style().Button}
        >
          <Text style={style().Text}>6</Text>
        </Pressable>
        <Pressable
          style={style().Button}
          onPress={() =>
            Subtracao(display, setDisplay, setMemory, setDisplay, setOperation)
          }
        >
          <Text style={style().Text}>-</Text>
        </Pressable>
        <Pressable
          onPress={() => atualizarDisplay(display, 7, setDisplay)}
          style={style().Button}
        >
          <Text style={style().Text}>7</Text>
        </Pressable>
        <Pressable
          onPress={() => atualizarDisplay(display, 8, setDisplay)}
          style={style().Button}
        >
          <Text style={style().Text}>8</Text>
        </Pressable>
        <Pressable
          onPress={() => atualizarDisplay(display, 9, setDisplay)}
          style={style().Button}
        >
          <Text style={style().Text}>9</Text>
        </Pressable>
        <Pressable
          style={style().Button}
          onPress={() =>
            Multiplicacao(
              display,
              setDisplay,
              setMemory,
              setDisplay,
              setOperation
            )
          }
        >
          <Text style={style().Text}>x</Text>
        </Pressable>
        <Pressable
          style={style().Button}
          onPress={() =>
            mostrarResultado(
              display,
              memory,
              setMemory,
              lastOperation,
              setDisplay,
              setOperation
            )
          }
        >
          <Text style={style().Text}>=</Text>
        </Pressable>
        <Pressable
          onPress={() => atualizarDisplay(display, 0, setDisplay)}
          style={style().Button}
        >
          <Text style={style().Text}>0</Text>
        </Pressable>
        <Pressable
          style={style().Button}
          onPress={() =>
            Multiplicacao(
              display,
              setDisplay,
              setMemory,
              setDisplay,
              setOperation
            )
          }
        >
          <Text style={style().Text}>,</Text>
        </Pressable>
        <Pressable
          style={style().Button}
          onPress={() =>
            Multiplicacao(
              display,
              setDisplay,
              setMemory,
              setDisplay,
              setOperation
            )
          }
        >
          <Text style={style().Text}>÷</Text>
        </Pressable>
      </View>
    </View>
  );
};
