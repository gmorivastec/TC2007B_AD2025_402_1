// declarando componente por medio de una función

import { useState } from 'react';
import { Text, View, Button, Image, TextInput } from 'react-native';

// el cuerpo de un componente de función es el método render de la clase
export function Doggy(props: any) {

    // definiendo variables de estado 
    // vamos a usar hooks! yay!

    // lógica que nos permite acceder a funcionalida externa a lo
    // que es propiamente render. 

    // para los estados usamos un hook que se llama useState
    const[isHappy, setIsHappy] = useState(false);
    const[cuenta, setCuenta] = useState(0);
    const[testInput, setTestInput] = useState("");

    // para que veamos que se reinvoca!
    console.log("DOGGY RENDER");

    return (
        <View>
            <Text>WOOF. {props.nombre} {props.edad} estoy {isHappy? "FELIZ :D" : "TRISTE :(" }</Text>
            <Text>cuenta de ladridos del dia: {cuenta}</Text>
            <Text>entrada de texto: {testInput}</Text>
            < Button
                title="cambiar felicidad" 
                onPress={() => {
                    setIsHappy(!isHappy);
                }}
            />
            < Button
                title="ladrar en un momento inoportuno" 
                onPress={() => {
                    setCuenta(cuenta + 1);
                }}
            />
            <TextInput 
                placeholder='PRUEBITA DE INPUT DE TEXTO'
                onChangeText={(text) => {
                    setTestInput(text);
                }}
            />
        </View>
    );
}