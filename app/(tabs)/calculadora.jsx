// import React from "react";
// import { Text, View, TextInput, Button } from "react-native";
// import {Soma, Subtracao, Multiplicacao, Divisao} from "../../components/Calcular.jsx";

// const style = function () {
//   return {
//     container: {
//       flex: 1,
//       justifyContent: "center",
//       alignItems: "center",
//     },
//     containerNumber: {
//       flex: 1,
//       justifyContent: "center",
//       alignItems: "center",
//     },
//     Button: {
//       height: 80,
//       width: 80,
//       margin: 12,
//       borderWidth: 1,
//       padding: 4,
//     },
//   };
// };


// export default PrimeiraFuncao = function () {
//   const [number1, onChangeNumber1] = React.useState("");
//   const [number2, onChangeNumber2] = React.useState("");
//   const [result, atualizarResultado] = React.useState("0");
//   return (
//     <View style={style().container}>
//       <Text>Calculadora </Text>
//       <View style={style().containerNumber}>
//         <TextInput
//           onChangeText={onChangeNumber1}
//           value={number1}
//           keyboardType="numeric"
//           placeholder="Insira um valor"
//         />
//         <TextInput
//           onChangeText={onChangeNumber2}
//           value={number2}
//           keyboardType="numeric"
//           placeholder="Insira um valor"
//         />
//       </View>
//       <View style={style().containerNumber}>
//         <Button
//           style={style().Button}
//           title="+"
//           onPress={() => Soma(number1, number2, atualizarResultado)}
//         />
//         <Button
//           style={style().Button}
//           title="-"
//           onPress={() => Subtracao(number1, number2, atualizarResultado)}
//         />
//         <Button
//           style={style().Button}
//           title="x"
//           onPress={() => Multiplicacao(number1, number2, atualizarResultado)}
//         />
//         <Button
//           style={style().Button}
//           title="÷"
//           onPress={() => Divisao(number1, number2, atualizarResultado)}
//         />
//       </View>
//       <View>
//         <Text>{result}</Text>
//       </View>
//     </View>
//   );
// };
