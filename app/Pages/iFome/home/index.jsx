import React, { useContext } from "react";
import { View, Text, Pressable, Image, StyleSheet, FlatList } from "react-native-web";
import { AppContext, AppProvider } from "../../../../scripts/appContext";
import { Link } from "expo-router";

const produtos = [
    {
        id: '1',
        nome: 'Big King',
        estabelecimento: 'Burguer King',
        preco: 38.90,
        imagem: 'https://static.ifood-static.com.br/image/upload/t_medium/pratos/6e73dce2-a17f-4aef-9035-1409cea198fe/202306291445_5HD4_i.jpg',
    },
    {
        id: '2',
        nome: 'Milk Shake Café',
        estabelecimento: 'Bobs',
        preco: 15,
        imagem: 'https://revistadegusta.com/wp-content/uploads/2023/06/7c0c428cbe1e4cc5bcbd3ba9768975d7ypMK0GwWcTw51Gp0-0-scaled-e1687272857320.jpg',
    },
];

export default function App() {
    const { cart, setCart } = useContext(AppContext)

    function pushCart(item) {
        setCart([...cart, item])
        console.log(cart)
    }

    const renderItem = ({ item }) => (
        <View style={styles.produtoContainer}>
            <Image source={{ uri: item.imagem }} style={styles.produtoImagem} />
            <View style={styles.produtoInfo}>
                <Text style={styles.produtoNome}>{item.nome}</Text>
                <Text style={styles.produtoEstabelecimento}>{item.estabelecimento}</Text>
                <Text style={styles.produtoPreco}>R${item.preco.toString().replace('.',',')}</Text>
                <Pressable style={styles.comprarButton} onPress={() => pushCart(item)}>
                    <Text style={styles.comprarButtonText}>Comprar</Text>
                </Pressable>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>iFome</Text>
            </View>
            <View style={styles.carrinho}>
                <Link href={'../cart'}><Image
                    source={{ uri: '../../assets/images/cart.png' }}
                    style={styles.carrinhoImagem}
                /></Link>

                <Text style={styles.carrinhoTexto}>{cart.lenght > 0 ? `${cart.lenght}` : '0 Produtos'}</Text>
            </View>
            <FlatList
                data={produtos}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                style={styles.flatList}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#6200EE',
    },
    headerText: {
        fontSize: 24,
        color: '#fff',
    },
    carrinho: {
        display: 'flex',
        flexDirection: 'row',
        padding: 10,
        backgroundColor: '#f0f0f0',
        justifyContent: 'flex-end'
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
        flexDirection: 'row',
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        alignItems: 'center',
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
        fontWeight: 'bold',
    },
    produtoEstabelecimento: {
        fontSize: 14,
        color: '#666',
    },
    produtoPreco: {
        fontSize: 16,
        color: '#000',
        marginVertical: 5,
    },
    comprarButton: {
        backgroundColor: '#6200EE',
        padding: 10,
        borderRadius: 5,
    },
    comprarButtonText: {
        color: '#fff',
        textAlign: 'center',
    },
});