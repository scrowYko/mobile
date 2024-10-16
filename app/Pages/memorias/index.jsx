import React, { useContext, useState, useEffect, memo } from "react";
import {
  View,
  Text,
  Pressable,
  Image,
  StyleSheet,
  FlatList,
} from "react-native-web";
import { Link } from "expo-router";
import azamiImage from './assets/images/azami.png';

export default function App() {
  const [memorias, setMemorias] = useState([
    {
      title: "as",
      img: azamiImage,
      description: "teste",
      quando: "ontem",
      onde: "lá",
    },
  ]);

  const renderItem = ({ item }) => (
    <View style={styles.produtoContainer}>
      <Text>{item.title}</Text>
      <Image source={{ uri: item.img }} style={styles.produtoImagem} />
      <View style={styles.produtoInfo}>
        <Text style={styles.produtoNome}>{item.description}</Text>
        <Text style={styles.produtoEstabelecimento}>{item.quando}</Text>
        <Text style={styles.produtoEstabelecimento}>{item.onde}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>iFome</Text>
      </View>
      <View style={styles.carrinho}>
        <Link href={"./memorias.jsx"}>
          <Image
            source={{ uri: "../../assets/images/cart.png" }}
            style={styles.carrinhoImagem}
          />
        </Link>

        <Text style={styles.carrinhoTexto}>Ola</Text>
      </View>
      {memorias && 
        <FlatList
        data={memorias}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={styles.flatList}
      />
      }
      
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
