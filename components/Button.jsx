import { Pressable, Text } from "react-native";
export default function Button(title, f){
    return (
        <Pressable onPress={f}>
            <Text>{title}</Text>
        </Pressable>
    )
}