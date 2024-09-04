import React from "react"
import { Text } from "react-native"
export default function Saldo({ saldo }) {
    saldo = saldo.toFixed(2)
    let getSaldo = saldo.toString();

    return (
        <Text>
            R$ 
            {getSaldo.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
            })}
        </Text>
    );
}