import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';



const Pokemon = () => {
    const [pokemon, setPokemon] = useState('');
    const [pokemonTypes, setPokemonTypes] = useState([]);
    const [selectedType, setSelectedType] = useState('');
    const [filteredPokemons, setFilteredPokemons] = useState([]);

    useEffect(() => {

        fetch('https://pokeapi.co/api/v2/type')
            .then(response => response.json())
            .then(data => setPokemonTypes(data.results))
            .catch(error => console.log('Error fetching Pokémon types:', error));


        fetch('https://pokeapi.co/api/v2/pokemon?limit=1000')
            .then(response => response.json())
            .then(data => setFilteredPokemons(data.results))
            .catch(error => console.log('Error fetching Pokémon list:', error));
    }, []);

    useEffect(() => {
        if (selectedType) {

            fetch(`https://pokeapi.co/api/v2/type/${selectedType}`)
                .then(response => response.json())
                .then(data => {
                    const pokemonOfType = data.pokemon.map(p => p.pokemon);
                    setFilteredPokemons(pokemonOfType);
                })
                .catch(error => console.log('Error fetching Pokémon by type:', error));
        } else {

            fetch('https://pokeapi.co/api/v2/pokemon?limit=1000')
                .then(response => response.json())
                .then(data => setFilteredPokemons(data.results))
                .catch(error => console.log('Error fetching Pokémon list:', error));
        }
    }, [selectedType]);

    return (
    
        <View style={styles.container}>
        <View style={styles.container2}>
            <Text>Selecione o Tipo</Text>
            <Picker
                style={styles.pix}
                selectedValue={selectedType}
                onValueChange={(itemValue) => setSelectedType(itemValue)}
            >
                <Picker.Item label="Todos os Tipos" value="" />
                {pokemonTypes.map(type => (
                    <Picker.Item key={type.name} label={type.name} value={type.name} />
                ))}
            </Picker>

            <Text>Selecione o Pokémon</Text>
            <Picker
                style={styles.pix}
                selectedValue={pokemon}
                onValueChange={(itemValue) => setPokemon(itemValue)}
            >
                <Picker.Item label="Selecione o Pokémon" value="" />
                {filteredPokemons.map((item, index) => (
                    <Picker.Item key={index} label={item.name} value={item.name} />
                ))}
            </Picker>

            {pokemon ? <Text>Você selecionou {pokemon}</Text> : null}
        </View>
        </View>
       
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor:'#FF6262',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
   
    pix: {
        width: 300,
        borderRadius: 10,
        marginBottom: 10,
    },
    Image: {
        marginBottom:180,
        marginTop:-150,
        width:300,
        height:110

    }
});

export default Pokemon;