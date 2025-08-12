import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/home.js';
import Page from './screens/page.js';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <View>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="home">
          <Stack.Screen name="home" component={Home} />
          <Stack.Screen name="page" component={Page} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}