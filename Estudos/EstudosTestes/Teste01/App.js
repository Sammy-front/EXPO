import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useState } from 'react';


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen.js';
import SobreScreen from './screens/SobreScreen.js';

const Stack = createNativeStackNavigator();

export default function App() {
  const [mensagem, setMensagem] = useState('');

  function mostrarMensagem() {
    setMensagem('Você clicou no botão!');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Bem-vindo ao Meu App</Text>
      <Text style={styles.texto}>Abra o arquivo App.js para começar a trabalhar no seu app!</Text>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Sobre" component={SobreScreen} />
        </Stack.Navigator>
      </NavigationContainer>
      <Button title="Clique Aqui" onPress={mostrarMensagem} />
      {mensagem !== '' && <Text style={styles.mensagem}>{mensagem}</Text>}
      <StatusBar style="auto" />



    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
    textAlign: 'center',
  },
  texto: {
    fontSize: 16,
    marginBottom: 20,
    color: '#555',
    textAlign: 'center',
  },
  mensagem: {
    marginTop: 20,
    fontSize: 18,
    color: '#0066cc',
  },
});



