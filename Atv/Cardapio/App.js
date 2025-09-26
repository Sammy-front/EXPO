import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Main from './src/Main';
import Tela1 from './src/Tela1';
import Tela2 from './src/Tela2';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Main' component={Main}/>
        <Stack.Screen name='Tela1' component={Tela1}/>
        <Stack.Screen name='Tela2' component={Tela2}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
