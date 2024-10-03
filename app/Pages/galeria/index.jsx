import React, { useEffect, useState } from "react";
import { View, Pressable, Image, StyleSheet } from "react-native";
import * as ImagePicker from 'expo-image-picker'




export default function ImagePickerTest() {
    const [image, setImage] = useState('')


    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        })
        if (!result.canceled) {
            setImage(result.assets[0].uri)
        }
    }

    return (<View>
        <Pressable onPress={() => pickImage()} style={styles.button} > Selecione uma imagem </Pressable>
        {image && <Image source={{ uri: image }} style={styles.image} />}
    </View>)
}

const styles = StyleSheet.create({
    image: {
        width: 120,
        height: 120
    },
    button: {
        position: relative,
        display: inline - block,
        margin: 20,
    },
})