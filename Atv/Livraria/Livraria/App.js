import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SQLiteProvider } from "expo-sqlite";

import Home from './src/home';
import livraria from './src/Livraria/livraria';
import introducao from './src/Livraria/introducao';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <SQLiteProvider
        databaseName="livrosDatabase2.db"
        onInit={async (db) => {
          await db.execAsync(`
                  PRAGMA journal_mode = WAL;
                  CREATE TABLE IF NOT EXISTS livros (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    titulo TEXT NOT NULL,
                    autor TEXT NOT NULL,
                    editora TEXT NOT NULL,
                    preco DECIMAL NOT NULL
                  );
                `);
        }}
      >
       
        <Stack.Navigator>
          <Stack.Screen name='home' component={Home} />
          <Stack.Screen name='livraria' component={livraria} />
          <Stack.Screen name='introdução' component={introducao} />
          <Stack.Screen name='editar' component={eddLivros} />
        </Stack.Navigator>
      </SQLiteProvider>
    </NavigationContainer>
  );
}