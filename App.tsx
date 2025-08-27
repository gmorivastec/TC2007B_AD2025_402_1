// todo el trabajo se hace en módulos
// nosotros importamos miembros de los módulos

// PARA CORRER EN WEB:
// npx expo install react-dom react-native-web @expo/metro-runtime

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { ClassExample } from './classes/ClassExample';
import { Doggy } from './classes/DoggyComponent';
import RequestFunction from './classes/RequestFunction';

// este es un componente yey!
export default function App() {

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
