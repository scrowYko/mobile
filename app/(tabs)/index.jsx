import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { SafeAreaView } from "react-native-safe-area-context";

import backgroundImage from "../../assets/images/bg.jpg";

const style = StyleSheet.create({
  viewContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  picker: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 200,
    height: 15,
    backgroundColor: "#075EBD",
    borderRadius: 5,
    color: "white",
    marginBottom: 20,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  text: {
    justifyContent: 'center',
    height: 120,
    padding: 10,
    width: 220,
    color: 'white',
    textTransform: 'uppercase',
    fontSize: 24,
    borderRadius: 5,
    backgroundColor: 'red',
    textAlign: 'center'
  }
});

export default function Pokemon() {
  const [pokemons, setPokemons] = useState([]);
  const [types, setTypes] = useState([]);
  //   const listaPokemon = [
  //     { id: 1, nome: "Charizard" },
  //     { id: 2, nome: "Blastoise" },
  //     { id: 3, nome: "Venusaur" },
  //   ];
  const [pokemon, handlePokemon] = useState("");
  const [typeSelected, handleType] = useState("");

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/type")
      .then((res) => res.json())
      .then((data) => {
        setTypes(data.results);
        console.log(data.results);
      })
      .catch((error) => console.log("404 not found"));
  }, []);

  useEffect(() => {
    if (typeSelected) {
      fetch(typeSelected)
        .then((res) => res.json())
        .then((data) => {;
          setPokemons(data.pokemon);
          console.log(data.pokemon)
        })
        .catch((error) => console.log("404 not found"));
    }
  }, [typeSelected]);

  return (
    <ImageBackground source={backgroundImage} style={style.backgroundImage}>
      <SafeAreaView style={style.viewContainer}>
        <Text style={style.text}>Selecione</Text>
        <Picker
          selectedValue={typeSelected}
          onValueChange={(item) => handleType(item)}
          style={style.picker}
        >
          <Picker.Item label="Selecione um tipo" />
          {types.map((item, index) => (
            <Picker.Item key={index} label={item.name} value={item.url} />
          ))}
        </Picker>
        <Picker
          selectedValue={pokemon}
          onValueChange={(item) => handlePokemon(item)}
          style={style.picker}
        >
          <Picker.Item label="Selecione um pokemon" />
          {pokemons.map((item, index) => (
            <Picker.Item
              key={index}
              label={item.pokemon.name}
              value={item.pokemon.name}
            />
          ))}
        </Picker>
        {pokemon ? <Text style={style.text}> Você selecionou {pokemon}</Text> : ""}
      </SafeAreaView>
    </ImageBackground>
  );
}
