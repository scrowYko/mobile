import { React, useState } from "react";
import {
  Text,
  View,
  TextInput,
  Pressable,
  FlatList,
  Image,
  Modal,
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
    modal: {
      position: "absolute",
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
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

const callModal = (
  operacao,
  setOperacao,
  saldo,
  setSaldo,
  value,
  onChangeValue,
  modalOpen,
  setModalOpen
) => {
  setModalOpen(true);
  if (operacao == "d") {
    setOperacao("d");
  } else if (operacao == "s") {
    setOperacao("s");
  }
};

const confirmaTransacao = (
  operacao,
  setOperacao,
  saldo,
  setSaldo,
  value,
  onChangeValue,
  modalOpen,
  setModalOpen
) => {
  if (operacao == "d") {
    deposito(saldo, setSaldo, value, onChangeValue);
    setModalOpen(false)
    setOperacao("default");
  } else if (operacao == "s") {
    saque(saldo, setSaldo, value, onChangeValue);
    setModalOpen(false)
    setOperacao("default");
  } else {
    setModalOpen(false)
    setOperacao("default");
  }
};

export default function listaTarefas() {
  const [saldo, setSaldo] = useState(7320.92);
  const [value, onChangeValue] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [operacao, setOperacao] = useState("default");
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
          onPress={() =>
            callModal(
              "d",
              setOperacao,
              saldo,
              setSaldo,
              value,
              onChangeValue,
              modalOpen,
              setModalOpen
            )
          }
          style={style().button}
        >
          <Text>Depositar valor do campo</Text>
        </Pressable>
        <Pressable
          onPress={() =>
            callModal(
              "s",
              setOperacao,
              saldo,
              setSaldo,
              value,
              onChangeValue,
              modalOpen,
              setModalOpen
            )
          }
          style={style().button}
        >
          <Text>Sacar valor do campo</Text>
        </Pressable>
      </View>
      <Modal animationType="slide" visible={modalOpen} style={style().modal}>
        <Pressable onPress={() => setModalOpen(false)}>
          Fechar
        </Pressable>
        <Text>Você confirma a transação?</Text>
        <Pressable
          onPress={() =>
            confirmaTransacao(
              operacao,
              setOperacao,
              saldo,
              setSaldo,
              value,
              onChangeValue
            )
          }
        >
          <Text>Confirma</Text>
        </Pressable>
      </Modal>
    </View>
  );
}
