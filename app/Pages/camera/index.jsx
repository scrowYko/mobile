import { React, useState, useEffect, useRef } from "react";
import { View, Text, Image, StyleSheet, Pressable, Button } from "react-native";
import { CameraView, useCameraPermissions } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import * as Linking from 'expo-linking'

export default function Camera() {
  const [foto, setFoto] = useState(null);
  const [permissao, pedirPermissao] = useCameraPermissions();
  const cameraRef = useRef(null);
  const [lado, setLado] = useState("back");
  const [scanned, setScanned] = useState(false)
  const [uriScan, setUri] = useState('')

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

  const tirarFoto = async () => {
    const fotoBase64 = await cameraRef.current?.takePictureAsync({
      quality: 0.5,
      base64: true,
    });
    setFoto(fotoBase64);
    // console.log(fotoBase64);
  };

  const trocaCamera = () => {
    setLado(lado == "back" ? "front" : "back");
  };

  const salvarFoto = () => {
    MediaLibrary.saveToLibraryAsync(foto.uri);
    setFoto(null);
  };

  const handleBarCodeScanned = (data) => {
    setScanned(true);
    setUri(data);
    console.log(data);
    Linking.canOpenURL(data.data) == true ? Linking.openURL(data.data) : null;
  };




  // console.log(foto);

  return (
    <View style={style.container}>
      {foto ? (
        <View style={style.container}>
          <Image source={{ uri: foto.uri }} style={style.foto} />
          <Button onPress={() => setFoto(null)} title="Limpar foto" />
          <Button onPress={salvarFoto} title="Salvar foto" />
        </View>
      ) : (
        <CameraView facing={lado} style={style.camera} ref={cameraRef} barcodeScannerSettings={{ barcodeTypes: ["qr"],}} onBarcodeScanned={(data) => handleBarCodeScanned(data)} >
          <Pressable onPress={tirarFoto}>
            <Text>Tirar foto</Text>
          </Pressable>
          <Pressable onPress={trocaCamera}>
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
    width: "40%",
    height: "10%",
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
    height: "80%",
  },
});
