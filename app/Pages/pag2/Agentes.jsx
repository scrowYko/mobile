import React from 'react';
import { View, StyleSheet, Text, Image, ScrollView } from 'react-native';

const Jogos = () => {
    return (
        <View style={style.container}>
            <View style={style.navb}>
               
                <Text style={style.textoT}>Top logos do operadores de R6</Text>
            </View>
            <ScrollView contentContainerStyle={style.box}>
                <View style={style.box3}>
                    <View style={style.box2}>
                        <Image style={style.img} source={require('../../../assets/images/kapkan.png')} />
                        <View style={style.boxT}>
                            <Text style={style.P1}>Kapkan</Text>
                            <Text style={style.P2}>Russia - Spetsnaz</Text>
                        </View>
                    </View>

                    <View style={style.box2}>
                        <Image style={style.img} source={require('../../../assets/images/doc.png')} />
                        <View style={style.boxT}>
                            <Text style={style.P1}>Doc</Text>
                            <Text style={style.P2}>França - GIGN</Text>
                        </View>
                    </View>
                    <View style={style.box2}>
                        <Image style={style.img} source={require('../../../assets/images/frost.png')} />
                        <View style={style.boxT}>
                            <Text style={style.P1}>Frost</Text>
                            <Text style={style.P2}>Canada - JTF2</Text>
                        </View>
                    </View>
                    <View style={style.box2}>
                        <Image style={style.img} source={require('../../../assets/images/azami.png')} />
                        <View style={style.boxT}>
                            <Text style={style.P1}>Azami</Text>
                            <Text style={style.P2}>Japão - Sem Afiliação</Text>
                        </View>
                    </View>
                    <View style={style.box2}>
                        <Image style={style.img} source={require('../../../assets/images/fenrir.png')} />
                        <View style={style.boxT}>
                            <Text style={style.P1}>Fenrir</Text>
                            <Text style={style.P2}>Suécia - Sem Afiliação</Text>
                        </View>
                    </View>
                    <View style={style.box2}>
                        <Image style={style.img} source={require('../../../assets/images/sentry.png')} />
                        <View style={style.boxT}>
                            <Text style={style.P1}>Sentry</Text>
                            <Text style={style.P2}>Indefinido</Text>
                        </View>
                    </View>
                    <View style={style.box2}>
                        <Image style={style.img} source={require('../../../assets/images/nokk.png')} />
                        <View style={style.boxT}>
                            <Text style={style.P1}>Nøkk</Text>
                            <Text style={style.P2}>Dinamarca - Confidencial</Text>
                        </View>
                    </View>
                    <View style={style.box2}>
                        <Image style={style.img} source={require('../../../assets/images/maverick.png')} />
                        <View style={style.boxT}>
                            <Text style={style.P1}>Maverick</Text>
                            <Text style={style.P2}>Inglaterra - GSUTR</Text>
                        </View>
                    </View>
                    <View style={style.box2}>
                        <Image style={style.img} source={require('../../../assets/images/dokkaebi.png')} />
                        <View style={style.boxT}>
                            <Text style={style.P1}>Dokkaebi</Text>
                            <Text style={style.P2}>Coreia do Sul - 707th SMB</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

export default Jogos

const style = StyleSheet.create({
    container: {
        flex: 1,
    },
    navb: {
        width: '100%',
        height: 80,
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