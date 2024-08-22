import React from "react";
import { TextInput, Image, View } from "react-native";

export default function InputValor({ value, onChangeValue }) {
  const style = () => {
    return {
      image: {
        width: 30,
        height: 30,
      },
      flex:{
        flex: 1,
        flexDirection: 'row',
        gap: 5,
        justifyContent: 'center',
        alignContent: 'center',
      },
      input: {
        height: 40, // Altura do campo de entrada
        fontSize: 14, // Tamanho do texto digitado
        borderColor: 'gray',
        borderWidth: 1,
        paddingHorizontal: 10,
        width: 220, // Largura do campo de entrada
      },
    };
  };

  return (
    <>
      <View style={style().flex}>
        <Image
          style={style().image}
          source={require("../assets/images/money.png")}
        />
        <TextInput
          value={value}
          placeholder="Digite o valor da transação"
          keyboardType="numeric"
          onChangeText={onChangeValue}
          style={style().input}
        />
      </View>
    </>
  );
}
