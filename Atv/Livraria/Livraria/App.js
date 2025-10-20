import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/home';
import Livraria from './src/Livraria/livraria';
import Intruducao from './src/Livraria/introducao';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='Livraria' component={Livraria}/>
        <Stack.Screen name='introdução' component={Intruducao}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}