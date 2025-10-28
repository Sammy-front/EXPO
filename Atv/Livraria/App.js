import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SQLiteProvider } from 'expo-sqlite';
import HomeScreen from './src/HomeScreen';
import LivrariaScreen from './src/LivrariaScreen';
import SobreScreen from './src/SobreScreen';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <SQLiteProvider
      databaseName="livrariaDatabase.db"
      onInit={async (db) => {
        await db.execAsync(`
          CREATE TABLE IF NOT EXISTS livros (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            titulo TEXT NOT NULL,
            autor TEXT NOT NULL,
            genero TEXT NOT NULL,
            preco decimal(10,2) not null 
          );
          PRAGMA journal_mode=WAL;
        `);
      }}
    >
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === 'Início') {
                iconName = focused ? 'home' : 'home-outline';
              } else if (route.name === 'Livraria') {
                iconName = focused ? 'book' : 'book-outline';
              } else if (route.name === 'Sobre') {
                iconName = focused ? 'information-circle' : 'information-circle-outline';
              }

              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: '#C75F0A',
            tabBarInactiveTintColor: 'gray',
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          })}
        >
          <Tab.Screen name="Início" component={HomeScreen} />
          <Tab.Screen name="Livraria" component={LivrariaScreen} />
          <Tab.Screen name="Sobre" component={SobreScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </SQLiteProvider>
  );
}