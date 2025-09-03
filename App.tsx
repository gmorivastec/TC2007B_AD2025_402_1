// todo el trabajo se hace en módulos
// nosotros importamos miembros de los módulos

// PARA CORRER EN WEB:
// npx expo install react-dom react-native-web @expo/metro-runtime

// PARA NAVEGACIÓN: 
// npm install @react-navigation/native
// npm install @react-navigation/native-stack

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { ClassExample } from './classes/ClassExample';
import { Doggy } from './classes/DoggyComponent';
import RequestFunction from './classes/RequestFunction';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

// este es un componente yey!
export function App() {

  // JSX
  // todas funciones de componentes están obligadas a regresar 
  // un objeto de tipo componente
  return (
    <View style={styles.container}>
      {/* <ClassExample nombre="Clodomiro" /> */}
      {/* <Doggy nombre="Firulais" edad={5} /> */}
      <RequestFunction 
        url="https://bitbucket.org/itesmguillermorivas/partial2/raw/45f22905941b70964102fce8caf882b51e988d23/carros.json"
      />
      <StatusBar style="auto" />
    </View>
  );
}

// para navegación necesitamos 3 componentes
// 1. principal donde se enlistan los componentes navegables
// 2. el default para navegar
// 3. un componente al que vamos a navegar

export default function Navigation() {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="NavRoot"
          component={NavRoot}
        />
        <Stack.Screen 
          name="NavExample"
          component={NavExample}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function NavRoot({navigation} : any) {

  return (
    <View style={[
      styles.ejemploContainer,
      { flexDirection: 'column' }
    ]}>
      {/*
      <Text style={{backgroundColor: 'white', flex: 1}}>Raiz de navegación</Text>
      <Text style={{backgroundColor: 'blue', flex: 3}}>Texto 2</Text>
      <Text style={{backgroundColor: 'pink', flex: 8}}>Texto 3</Text>
        */}
      <Text style={{backgroundColor: 'white', height: 30}}>Raiz de navegación</Text>
      <Text style={{backgroundColor: 'blue', height: 30}}>Texto 2</Text>
      <Text style={{backgroundColor: 'pink', height: 30, position: 'absolute', top: 10, left: 10}}>Texto 3</Text>
      {/*
      <Button 
        title="DEMO NAVEGACIÓN"
        onPress={() => {

          navigation.navigate("NavExample", {data: "un textito de prueba", otro: "hola!"});
        }}
      />
      */}
    </View>
  );
}

function NavExample({navigation, route} : any) {

  return (
    <View>
      <Text>NAV EXAMPLE! {route.params.data} {route.params.otro}</Text>
    </View>
  );
}

// DESIGN PATTERN!!
// factory 
// https://en.wikipedia.org/wiki/Factory_method_pattern

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  ejemploContainer: {
    flex: 1,
    backgroundColor: '#ff9500ff',
    padding: 30,
  }
});
