import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './src/home';
import Tela from './src/Telas/Telas';
import China from './src/Paises/China';
import France from './src/Paises/France';
// import  France_Card from './src/Cardapios/France_Card';
// import  China_Card  from './src/Cardapios/China_Card';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='Tela1' component={Tela}/>
        <Stack.Screen name='China' component={China}/>
        <Stack.Screen name='France' component={France}/>
        {/* <Stack.Screen name='France_Card' component={France_Card}/> */}
        {/* <Stack.Screen name='China_Card' component={China_Card}/> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
