import { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, FlatList, Pressable } from 'react-native';
import { DoggyRow } from './DoggyComponent';

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
    // async??? 
    // función que no bloquea el flujo de la lógica
    // corre en paralelo con algún mecanismo dependiendo del lenguaje / framework
    // no sabemos cuánto tiempo va a durar en terminar
    async function request() {

        // await - mecanismo que se puede utilizar en invocaciones a 
        // funciones asíncronas para esperar resultado antes de seguir ejecución

        // SÓLO se puede hacer dentro del scope de una función asíncrona
        var response = await fetch(props.url);
        var json = await response.json();
        console.log(json);
        console.log(json[1]);
        console.log(json[1]['modelo']);
        setData(json);
    }

    // OTRO HOOK!!
    useEffect(() => {
        request();
    }, []);

    return (
        <View>
            {/*
            <FlatList 
                data={[
                    {nombre:"Perrito1", uri: "https://images.dog.ceo/breeds/chihuahua/n02085620_9414.jpg"},
                    {nombre:"Perrito2", uri: "https://images.dog.ceo/breeds/chihuahua/n02085620_9414.jpg"},
                    {nombre:"Perrito3", uri: "https://images.dog.ceo/breeds/chihuahua/n02085620_9414.jpg"}
                ]}
                renderItem={({item}) => {
                    return(
                        <Pressable
                            onPress={() => {
                                alert("NO PRESIONES AL PERRITO!");
                            }}
                        >
                            <DoggyRow 
                                nombre={item.nombre}
                                uri={item.uri}
                            />
                        </Pressable>
                    );
                }}
            />
            */}
            
            {
                data.length > 0 ?
                    <FlatList 
                        data={data}
                        renderItem={({item}) => {
                            return (
                                <View>
                                    <Text>{item['marca']}</Text>
                                    <Text>{item['modelo']}</Text>
                                    <Text>{item['anio']}</Text>
                                </View>
                            );
                        }}
                    />
                :
                    <ActivityIndicator size="large" />
            } 
        </View>
    );
}