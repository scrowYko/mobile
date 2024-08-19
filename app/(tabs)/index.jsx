import {React, useState} from "react";
import { Text, View, TextInput, Pressable, FlatList, Image } from "react-native";
import Saldo from '../../components/Saldo'
import Input from '../../components/Input'

const style = function () {
  return {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
      width: 340,
      height: 80,
    },
    naConta:{
      color:'gray',
      fontWeight: 'bold',
      fontSize: 20
    },
    dindin:{
      width:120,
      height:200,
      fontSize:30,
    }
  };
};

export default function listaTarefas() {
    const [saldo, setSaldo] = useState(7320.92)
    const [value, onChangeValue] = useState(0)

  return (
    <View style={style().container}>
        <Image style={style().image} source={require('../../assets/images/santander2.png')} />
        <Text style={style().naConta}>SALDO ATUAL NA CONTA</Text>
        <Saldo style={style().dindin}saldo={saldo}/>
        <Text>Digite o valor abaixo e escolha uma das operações bancárias:</Text>
        <Input value={value} onChangeValue={onChangeValue}/>
    </View>
  );
}
