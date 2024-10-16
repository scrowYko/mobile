import { React, useState, useEffect, useRef } from "react";
import { View, Text, Image, StyleSheet, Pressable, Button } from "react-native";
import { CameraView, useCameraPermissions } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import * as Linking from "expo-linking";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import { Modal } from "react-native";

export default function Camera() {
  const [foto, setFoto] = useState(null);
  const [permissao, pedirPermissao] = useCameraPermissions();
  const cameraRef = useRef(null);
  const [lado, setLado] = useState("back");
  const [scanned, setScanned] = useState(false);
  const [uriScan, setUri] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

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

  const confirmQrCodeScan = (data) => {
    setModalVisible(true);
    setUri(data);
  };

  const handleBarCodeScanned = () => {
    setScanned(true);
    //setUri(data);
    if (Linking.canOpenURL(uriScan.raw)) {
      Linking.openURL(uriScan.raw);
    }
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
        <CameraView
          facing={lado}
          style={style.camera}
          ref={cameraRef}
          barcodeScannerSettings={{ barcodeTypes: ["qr"] }}
          onBarcodeScanned={(data) => confirmQrCodeScan(data)}
        >
          <Pressable onPress={tirarFoto} style={style.tirarFoto}>
            <Text>📸</Text>
          </Pressable>
          <Pressable onPress={trocaCamera} style={style.trocaCamera}>
            <Text>🔄</Text>
          </Pressable>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(!modalVisible);
            }}
          >
            <View style={style.modalContainer}>
              <View style={style.modalContent}>
                <Pressable onPress={handleBarCodeScanned}>
                  <MaterialIcons
                    name="qr-code-scanner"
                    size={120}
                    color="black"
                  />
                </Pressable>
                <Pressable
                  onPress={() => setModalVisible(false)}
                  style={style.closeButton}
                >
                  <Text style={style.closeButtonText}>Fechar</Text>
                </Pressable>
              </View>
            </View>
          </Modal>
        </CameraView>
      )}
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  textoPermissão: {
    fontSize: 21,
    color: "#FFF",
    textAlign: "center",
    padding: 10,
  },
  button: {
    backgroundColor: "#69BA5D",
    borderRadius: 10,
    width: "60%",
    padding: 10,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 16,
    color: "#FFF",
  },
  camera: {
    flex: 1,
    width: "100%",
    borderRadius: 20,
    overflow: "hidden",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: "5%",
  },
  tirarFoto: {
    backgroundColor: "#FFFFFFAA",
    borderRadius: 50,
    padding: 15,
    width: "15%",
    alignItems: "center",
  },
  trocaCamera: {
    backgroundColor: "#FFFFFFAA",
    borderRadius: 50,
    padding: 15,
    width: "15%",
    alignItems: "center",
  },
  foto: {
    width: "100%",
    height: "80%",
    borderRadius: 10,
  },
  textButton: {
    fontSize: 24,
    color: "#000",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: "80%",
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  closeButton: {
    marginTop: 20,
    backgroundColor: "#69BA5D",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  closeButtonText: {
    color: "#FFF",
    fontSize: 16,
  },
});
