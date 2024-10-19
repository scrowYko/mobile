import React, { useContext, useState, useEffect, memo } from "react";
import {
  View,
  Text,
  Pressable,
  Image,
  StyleSheet,
  FlatList,
} from "react-native";
import { Link } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function App() {
  const [lista_memorias, setMemorias] = useState([]);

  const getData = async () => {
    try {
      const memoriaJson = await AsyncStorage.getItem("lista_memorias");
      const storedMemories = memoriaJson != null ? JSON.parse(memoriaJson) : [];
      setMemorias(storedMemories);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.cardContainer}>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri:
              item.img ||
              "https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-image-256.png",
          }}
          style={styles.cardImage}
        />
        <Text style={styles.cardTitle}>{item.title}</Text>
      </View>
      <View style={styles.cardInfo}>
        <Text style={styles.cardDescription}>{item.description}</Text>
        <Text style={styles.cardDate}>{item.quando}</Text>
        <Text style={styles.cardLocation}>{item.onde}</Text>
      </View>
    </View>
  );

  const clearCache = async () => {
    try {
      await AsyncStorage.removeItem("lista_memorias");
      console.log("Cache limpo com sucesso!");
    } catch (error) {
      console.log("Erro ao limpar cache:", error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.addButton}>
          <Link href={"./criarMemorias"}>
            <Image
              source={{
                uri: "https://cdn3.iconfinder.com/data/icons/user-interface-169/32/plus-256.png",
              }}
              style={styles.headerImage}
            />
            <Text style={styles.addText}>Adicionar Memórias</Text>
          </Link>
        </View>
        <Text style={styles.headerText}>Memórias</Text>
      </View>
      <View style={styles.flatListContainer}>
        {lista_memorias != null ? (
          <FlatList
            data={lista_memorias}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            style={styles.flatList}
          />
        ) : (
          <View> </View>
        )}
      </View>
      <Pressable onPress={ clearCache}>
        <Text>Limpar Memorias </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#6200EE",
    flexDirection: "row",
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  headerImage: {
    width: 30,
    height: 30,
    marginRight: 15,
  },
  addButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  addText: {
    color: "#fff",
    fontSize: 16,
  },
  headerText: {
    fontSize: 24,
    color: "#fff",
    flex: 1,
    textAlign: "center",
    fontWeight: "bold",
  },
  flatListContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  flatList: {
    width: "100%",
    maxWidth: 400,
  },
  cardContainer: {
    backgroundColor: "#fff",
    borderRadius: 10,
    overflow: "hidden",
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  imageContainer: {
    position: "relative",
  },
  cardImage: {
    width: "100%",
    height: 150,
    opacity: 0.6,
  },
  cardTitle: {
    position: "absolute",
    top: 10,
    left: 0,
    right: 0,
    color: "#fff",
    fontSize: 24,
    fontWeight: "condensedBold",
    textAlign: "center",
    textShadowColor: "#4361ee",
    textShadowOffset: { width: 3, height: 2 },
    textShadowRadius: 3,
    padding: 5,
    backgroundColor: "rgba(0, 0, 0, 0.1)",
  },
  cardInfo: {
    padding: 15,
  },
  cardDescription: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  cardDate: {
    fontSize: 14,
    color: "#666",
  },
  cardLocation: {
    fontSize: 14,
    color: "#666",
  },
});
