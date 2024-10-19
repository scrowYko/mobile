import React, { useContext, useState, useEffect } from "react";
import {
  View,
  Text,
  Pressable,
  Image,
  StyleSheet,
  FlatList,
  TextInput,
  Button,
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
    if (
      !formData.title ||
      !formData.description ||
      !formData.onde ||
      !formData.quando
    ) {
      alert("Por favor, preencha todos os campos obrigatórios.");
      return;
    } else
      try {
        const value = await AsyncStorage.getItem("lista_memorias");
        let listaMemorias = [formData];
        if (value !== null) {
          listaMemorias = JSON.parse(value);
          listaMemorias.push(formData);
        }
        const listaAtualizada = JSON.stringify(listaMemorias);
        console.log(listaMemorias);
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
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
  
    if (!result.canceled && result.assets && result.assets.length > 0) {
      const uri = result.assets[0].uri; // Obtém a URI da imagem
      console.log('URI da imagem selecionada:', uri); // Log da URI
      setFormData({ ...formData, img: uri }); // Atualiza o estado com a URI
    } else {
      console.log('Nenhuma imagem selecionada ou cancelada.');
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Link href={"../"}>
          <Image
            source={{ uri: "../../assets/images/voltar.png" }}
            style={styles.headerImage}
          />
        </Link>
        <Text style={styles.headerText}>Deposite suas memorias</Text>
      </View>
      <View style={styles.formContainer}>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            value={formData.title}
            placeholder="Titulo da memória"
            onChangeText={(e) => setFormData({ ...formData, title: e })}
          />
          <TextInput
            style={styles.input}
            value={formData.description}
            placeholder="Descrição da memória"
            onChangeText={(e) => setFormData({ ...formData, description: e })}
          />
          <TextInput
            style={styles.input}
            value={formData.onde}
            placeholder="Onde aconteceu a memória"
            onChangeText={(e) => setFormData({ ...formData, onde: e })}
          />
          <TextInput
            style={styles.input}
            value={formData.quando}
            placeholder="Quando aconteceu a memória"
            onChangeText={(e) => setFormData({ ...formData, quando: e })}
          />
          <Pressable onPress={pickImage}>
            {formData.img && formData.img.uri ? (
              <Image
                source={{ uri: formData.img }}
                style={styles.imagePicker}
              />
            ) : (
              <Image
                source={{
                  uri: "https://cdn3.iconfinder.com/data/icons/userinterface-1/100/ui-33-256.png",
                }}
                style={styles.imagePicker}
              />
            )}
          </Pressable>
          <Pressable style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Enviar</Text>
          </Pressable>
        </View>
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
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  headerText: {
    fontSize: 24,
    color: "#fff",
    flex: 1,
    textAlign: "center",
  },
  headerImage: {
    width: 30,
    height: 30,
  },
  formContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  form: {
    width: "100%",
    maxWidth: 400,
    backgroundColor: "#f0f0f0",
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  input: {
    height: 40,
    marginBottom: 20,
    padding: 10,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
  },
  imagePicker: {
    width: 120,
    height: 120,
    marginBottom: 20,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
  },
  button: {
    backgroundColor: "#6200EE",
    padding: 10,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
  },
});
