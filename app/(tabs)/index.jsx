import { React, useState } from "react";
import {
  Text,
  View,
  TextInput,
  Pressable,
  FlatList,
  Image,
} from "react-native";
import Saldo from "../../components/Saldo";
import Input from "../../components/Input";

const style = function () {
  return {
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    image: {
      width: 340,
      height: 80,
    },
    naConta: {
      color: "gray",
      fontWeight: "bold",
      fontSize: 20,
    },
    dindin: {
      width: 120,
      height: 200,
      fontSize: 30,
    },
    button: {
      width: 160,
      height: 40,
    },
    container2: {
      flex: 1,
      height: 75,
      gap: 12,
    },
    containerLogo: {
      height: 200,
    },
  };
};

const deposito = (saldo, setSaldo, value, onChangeValue) => {
  value = parseFloat(value);
  let valorComBonus = value + value * (1 / 100);
  let novoSaldo = saldo + valorComBonus;
  setSaldo(novoSaldo);
  onChangeValue(0);
};

const saque = (saldo, setSaldo, value, onChangeValue) => {
  value = parseFloat(value);
  let taxeHaddad = value + value * (2.5 / 100);
  let novoSaldo = saldo - taxeHaddad;
  setSaldo(novoSaldo);
  onChangeValue(0);
};

export default function listaTarefas() {
  const [saldo, setSaldo] = useState(7320.92);
  const [value, onChangeValue] = useState(0);

  return (
    <View style={style().container}>
      <View style={style().containerLogo}>
        <Image
          style={style().image}
          source={require("../../assets/images/santander2.png")}
        />
      </View>

      <Text style={style().naConta}>SALDO ATUAL NA CONTA</Text>
      <Saldo style={style().dindin} saldo={saldo} />
      <Text>Digite o valor abaixo e escolha uma das operações bancárias:</Text>
      <View style={style().container2}>
        <Input value={value} onChangeValue={onChangeValue} />
      </View>
      <View style={style().container2}>
        <Pressable
          onPress={() => deposito(saldo, setSaldo, value, onChangeValue)}
          style={style().button}
        >
          <Text>Depositar valor do campo</Text>
        </Pressable>
        <Pressable
          onPress={() => saque(saldo, setSaldo, value, onChangeValue)}
          style={style().button}
        >
          <Text>Sacar valor do campo</Text>
        </Pressable>
      </View>
    </View>
  );
}
