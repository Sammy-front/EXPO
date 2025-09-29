import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/home';
import Tela from './src/Telas/Telas';
import China from './src/Paises/China';
import France from './src/Paises/France';
import  FranceCard from './src/Cardapios/FranceCard';
import  ChinaCard  from './src/Cardapios/ChinaCard';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='Tela1' component={Tela}/>
        <Stack.Screen name='China' component={China}/>
        <Stack.Screen name='France' component={France}/>
        <Stack.Screen name='FranceCard' component={FranceCard}/>
        <Stack.Screen name='ChinaCard' component={ChinaCard}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
