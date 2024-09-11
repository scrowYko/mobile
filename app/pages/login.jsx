import React from "react";
import { View, Pressable, TextInput, Text, StyleSheet } from "react-native";
import { useState } from "react";

const style = StyleSheet.create({
  input: {
    width: 200,
    height: 30,
    fontSize: 18,
    borderColor: "black",
    borderWidth: 1,
    padding: 3,
  },
  view: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "column",
  },
  inputContainer: {
    gap: 5,
    borderColor: "black",
    borderRadius: 5,
    borderWidth: 1,
    padding: 10,
    marginBottom: 5,
  },
  inputContainer2: {
    borderColor: "black",
    borderRadius: 25,
    padding: 10,
  },
  inputText: {
    fontSize: 17,
  },
  button: {
    width: 90,
    height: 30,
    backgroundColor: "#075EBF",
    textColor: "#FFFFFF",
    flex:1,
    justifyContent: 'center',
    alignContent: 'center',
    padding:5,
    borderRadius: 5,
  },
  inputsContainer: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    flexDirection: "column",
  },
  text: {
    textColor: "#FFFFFF",
    alignSelf:'center'
  },
  header:{
    marginTop: 20,
  },
  title:{
    fontSize: 21,
    fontWeight:'bold',
    alignSelf:'center'
  }
});

export default function signUp() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [message, setMessage] = useState(null);

  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.password) {
      alert("Todos os campos devem ser preenchidos");
    }
    try {
      const response = await fetch(
        "https://taskhub-s37f.onrender.com/auth/signup",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      switch (response.status) {
        case 200:
          alert('Registro bem sucedido')
          break;
        case 496:
          alert('Falta informação')
          break;
        case 409:
          alert('Email já existente')
          break;
        default:
          alert('Erro!')
          break;
      }
    } catch (error) {
      console.error(error);
    }
    
  };
  return (
    <>
      <View style={style.view}>
        <View style= {style.header}>
          <Text style={style.title}>Task Hub</Text>
          <Text>Crie seu usuário enviando nome, email e senha</Text>
        </View>
        <View style={style.inputsContainer}>
          <View style={style.inputContainer}>
            <Text style={style.inputText}>Name</Text>
            <TextInput
              value={formData.name}
              onChangeText={(text) => setFormData({ ...formData, name: text })}
              placeholder="Enter your name here"
              style={style.input}
              inlineImageLeft="user.png"
            />
          </View>
          <View style={style.inputContainer}>
            <Text style={style.inputText}>Email</Text>
            <TextInput
              value={formData.email}
              onChangeText={(text) => setFormData({ ...formData, email: text })}
              placeholder="Enter your email here"
              style={style.input}
            />
          </View>
          <View style={style.inputContainer}>
            <Text style={style.inputText}>Password</Text>
            <TextInput
              value={formData.password}
              onChangeText={(text) =>
                setFormData({ ...formData, password: text })
              }
              placeholder="Enter your password here"
              style={style.input}
            />
          </View>
        </View>
        <View style={style.inputContainer2}>
          <Pressable style={style.button} onPress={() => handleSubmit()}>
            <Text style={style.text}>Sign Up</Text>
          </Pressable>
        </View>
      </View>
    </>
  );
}
