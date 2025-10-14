import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/home';
import Livraria from './src/Livraria/livraria';
import Intrucao from './src/intruções/introducao';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='Livraria' component={Livraria}/>
        <Stack.Screen name='introdução' component={Intrucao}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}