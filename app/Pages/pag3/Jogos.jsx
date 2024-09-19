import { Link, useLocalSearchParams } from 'expo-router';
import React from 'react';
import { View, StyleSheet, Text, Image, ScrollView, FlatList, Pressable } from 'react-native';

const Jogos = () => {

    const jogo = [
        { id: 1, nome: 'Rainbow Six', estudio: 'Ubisoft', img: 'https://s2-ge.glbimg.com/Mn4MpbfOftUzZYusjMjY6ucisp4=/0x0:1920x1080/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2023/b/d/MsAo0RQq25hzLuK95lew/r6-thumb.jpg', lastPlay: 'há uma semana', detalhe: 'Este é um jogo de tiro em primeira pessoa focado em táticas e estratégia. Os jogadores assumem o papel de operativos de elite, cada um com habilidades únicas. O jogo enfatiza a destruição ambiental e a comunicação em equipe, onde os jogadores precisam planejar e executar táticas para atacar ou defender objetivos em cenários variados.'},
        { id: 2, nome: 'Brawlhalla', estudio: 'Blue Mammoth', img: 'https://i.ytimg.com/vi/DJf8BQT8vLg/maxresdefault.jpg', lastPlay: 'ontem', detalhe: 'Um jogo de luta em plataforma gratuito, onde jogadores podem escolher entre uma variedade de personagens e lutar em arenas. O objetivo é derrubar os adversários da plataforma usando ataques, combos e habilidades especiais. Com um estilo artístico cartunesco, Brawlhalla oferece modos multiplayer e eventos frequentes, mantendo a jogabilidade dinâmica e divertida.' },
        { id: 3, nome: 'Dying Light 2', estudio: 'Techland', img: 'https://image.api.playstation.com/vulcan/ap/rnd/202402/1512/35ead9b7fd1de13c76c33914969c350dc4149e5b7bb0e5d9.png', lastPlay: 'há 1 mês', detalhe: 'Um jogo de ação e sobrevivência em mundo aberto, ambientado em um futuro pós-apocalíptico tomado por zumbis. Os jogadores exploram uma cidade vasta, completando missões e interagindo com facções, enquanto utilizam parkour para se mover rapidamente. A história é influenciada pelas escolhas do jogador, impactando o mundo e as interações com os NPCs.' }]

    return (
        <View style={style.container}>
            <View style={style.navb}>

                <Text style={style.textoT}>Jogos que joguei</Text>
            </View>
            <FlatList
                style={style.box}
                data={jogo}
                renderItem={({ item }) => <View style={style.box2}>
                    <Link href={{
                        pathname: `Pages/detalhes/${item.id}`,
                        params: { item: JSON.stringify(item) }
                    }}><Pressable><Image style={style.img} source={{ uri: item.img }} /></Pressable>
                        <View style={style.boxT}>
                            <Text style={style.P1}>{item.nome}</Text>
                            <Text style={style.P2}>{item.estudio}</Text>
                            <Text style={style.P2}>{item.lastPlay}</Text>
                        </View></Link>
                </View>}
                keyExtractor={item => item.id}
            />
        </View >
    );
}

export default Jogos

const style = StyleSheet.create({
    container: {
        flex: 1,
    },
    navb: {
        width: '100%',
        height: 60,
        backgroundColor: '#315978',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    textoT: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        flex: 1,
    },
    box: {
        flex: 1,
        padding: 20,
    },
    box2: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        gap: 10,
        width: '100%',
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        marginBottom: 20,
    },
    box3: {
        marginBottom: 20
    },
    img: {
        width: 80,
        height: 80,
        borderRadius: 20,
        objectFit: 'cover',
        marginRight: 5
    },
    boxT: {
        flexDirection: 'column',
        justifyContent: 'center',
    },
    P1: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 20,
    },
    P2: {
        color: 'black',
        fontSize: 15,
        marginTop: 5,
    },
});