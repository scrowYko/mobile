import React, { useContext, useState, useEffect } from "react";
import {
  View,
  Text,
  Pressable,
  Image,
  StyleSheet,
  FlatList,
  TextInput,
  Button
} from "react-native";
import { Link } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as ImagePicker from "expo-image-picker";


export default function App() {
  const [formData, setFormData] = useState({
    title: "",
    img: "",
    description: "",
    quando: "",
    onde: "",
  });

  const handleSubmit = async () => {
    try {
      const value = await AsyncStorage.getItem("lista_memorias");
      let listaMemorias = [formData];
      if (value !== null) {
        listaMemorias = JSON.parse(value);
        listaMemorias.push(formData);
      }
      const listaAtualizada = JSON.stringify(listaMemorias);
      await AsyncStorage.setItem("lista_memorias", listaAtualizada);
      setFormData({
        title: "",
        img: "",
        description: "",
        quando: "",
        onde: "",
      });
    } catch (e) {
      console.log(e);
    }
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.canceled) {
      setFormData({ ...formData, img: result });
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Deposite suas memorias</Text>
      </View>
      <View style={styles.carrinho}>
        <Link href={"./index.jsx"}>
          <Image
            source={{ uri: "../../assets/images/cart.png" }}
            style={styles.carrinhoImagem}
          />
        </Link>
        <TextInput
          value={formData.title}
          placeholder="Titulo da memória"
          onChangeText={(e) => setFormData({ ...formData, title: e })}
        />
        <TextInput
          value={formData.description}
          placeholder="Descrição da memória"
          onChangeText={(e) => setFormData({ ...formData, description: e })}
        />
        <TextInput
          value={formData.onde}
          placeholder="Onde aconteceu a memória"
          onChangeText={(e) => setFormData({ ...formData, onde: e })}
        />
        <TextInput
          value={formData.quando}
          placeholder="Quando aconteceu a memória"
          onChangeText={(e) => setFormData({ ...formData, quando: e })}
        />
        <Pressable onPress={() => pickImage}>
          {formData.img ? (
            <Image source={formData.img} />
          ) : (
            <Image source={{ uri: "https://placehold.co/120x120/png" }} />
          )}
        </Pressable>
        <Button onPress={() => handleSubmit} title='Enviar'/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#6200EE",
  },
  headerText: {
    fontSize: 24,
    color: "#fff",
  },
  carrinho: {
    display: "flex",
    flexDirection: "row",
    padding: 10,
    backgroundColor: "#f0f0f0",
    justifyContent: "flex-end",
  },
  carrinhoImagem: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  carrinhoTexto: {
    fontSize: 16,
  },
  flatList: {
    marginTop: 10,
  },
  produtoContainer: {
    flexDirection: "row",
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    alignItems: "center",
  },
  produtoImagem: {
    width: 100,
    height: 100,
    marginRight: 15,
  },
  produtoInfo: {
    flex: 1,
  },
  produtoNome: {
    fontSize: 18,
    fontWeight: "bold",
  },
  produtoEstabelecimento: {
    fontSize: 14,
    color: "#666",
  },
  produtoPreco: {
    fontSize: 16,
    color: "#000",
    marginVertical: 5,
  },
  comprarButton: {
    backgroundColor: "#6200EE",
    padding: 10,
    borderRadius: 5,
  },
  comprarButtonText: {
    color: "#fff",
    textAlign: "center",
  },
});
