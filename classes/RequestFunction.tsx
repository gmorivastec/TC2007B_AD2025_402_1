import { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, FlatList } from 'react-native';

// recordatorio - 
// el cuerpo de un componente funcional es el método render()

export default function RequestFunction(props: any) {

    // https://bitbucket.org/itesmguillermorivas/partial2/raw/45f22905941b70964102fce8caf882b51e988d23/carros.json
    /*
    
    JSON - javascript object notation

    [
        {"marca":"bmw","modelo":"x6","anio":2020},
        {"marca":"mazda","modelo":"cx5","anio":2018},
        {"marca":"volkswagen","modelo":"beetle","anio":2000}
    ]

    en JSON toda la información se expresa en tuplas con sintaxis llave:valor
    
    tenemos estructuras de datos comunes - objetos, arreglos
    objetos - engloban elementos entre {}
    arreglos - contiene elementos entre [] separados por , 

    [0, 100, 20, 43]

    {"nombre": "juan", "edad": 20}

    {"arreglo": [0, 2, 4]}
    {"arreglo2": [
        {"nombre": "a"},
        {"nombre": "b"},
        {"nombre": "c"}
    ]}

    para traducir json en objeto del lenguaje necesitamos un parser
    NOTA PARA SU VIDA: algunos parsers no les gusta un arreglo en raiz
    */

    const[data, setData] = useState([]);

    // definiendo una función interna
    async function request() {

        var response = await fetch(props.url);
        var json = await response.json();
        console.log(json);
    }
}