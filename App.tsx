// todo el trabajo se hace en módulos
// nosotros importamos miembros de los módulos

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { ClassExample } from './classes/ClassExample';
import { Doggy } from './classes/DoggyComponent';

// este es un componente yey!
export default function App() {

  // JSX
  // todas funciones de componentes están obligadas a regresar 
  // un objeto de tipo componente
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <ClassExample nombre="Clodomiro" />
      <Doggy nombre="Firulais" edad={5} />
      <StatusBar style="auto" />
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
});
