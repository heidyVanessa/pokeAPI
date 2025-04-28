import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Aleatorios from './src/componentes/Aleatorios';
import Capturados from './src/componentes/Capturados'; // corregido
import Favoritos from './src/componentes/Favoritos';
import Lista from './src/componentes/Lista';
import Pokemon from './src/componentes/Pokemon';
import Usuario from './src/componentes/Usuario'; // corregido

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function ListaStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Lista" component={Lista} />
      <Stack.Screen name="Pokemon" component={Pokemon} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Lista" component={ListaStack} />
        <Tab.Screen name="Aleatorios" component={Aleatorios} />
        <Tab.Screen name="Capturados" component={Capturados} />
        <Tab.Screen name="Favoritos" component={Favoritos} />
        <Tab.Screen name="Usuario" component={Usuario} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
