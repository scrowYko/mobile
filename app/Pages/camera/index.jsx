import { React, useState, useEffect, useRef } from "react";
import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import { CameraView, useCameraPermissions } from "expo-camera";

export default function Camera() {
  const [foto, setFoto] = useState(null);
  const [permissao, pedirPermissao] = useCameraPermissions();
  const cameraRef = useRef(null);
  const [lado, setLado] = useState("back");

  const tirarFoto = async () => {
    const fotoBase64 = await cameraRef.current?.takePictureAsync({
      quality: 0.5,
      base64: true,
    });
    setFoto(fotoBase64);
    console.log(foto);
  };

  const trocaCamera = () => {
    setLado(lado == "back" ? "front" : "back");
  };

  if (!permissao) {
    return <View></View>;
  }
  if (!permissao.granted) {
    return (
      <View style={style.container}>
        <Text style={style.textoPermissão}>
          Você precisa conceder a permissão para usar a câmera
        </Text>
        <Pressable onPress={pedirPermissao} style={style.button}>
          <Text style={style.buttonText}>Pedir permissão</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={style.container}>
      {foto ? (
        <View>
          <Image source={{ uri: pic.uri }} style={style.foto} />
          <Pressable onPress={setFoto(null)} style={style.button}>
            <Text style={style.buttonText}>Limpar foto</Text>
          </Pressable>
        </View>
      ) : (
        <CameraView facing={lado} style={style.camera} ref={cameraRef}>
          <Pressable onPress={tirarFoto}>
            <Text>Tirar foto</Text>
          </Pressable>
          <Pressable onPress={() => trocaCamera}>
            <Text>Inverter Câmera</Text>
          </Pressable>
        </CameraView>
      )}
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  textoPermissão: {
    fontSize: 21,
  },
  button: {
    backgroundColor: "#69BA5D",
    borderRadius: 10,
    width: 120,
    height: 40,
    padding: 5,
  },
  buttonText: {
    fontSize: 14,
  },
  camera: {
    flex: 1,
  },
  tirarFoto: {
    backgroundColor: "white",
  },
  foto: {
    width: "100%",
    height: "100%",
  },
});
