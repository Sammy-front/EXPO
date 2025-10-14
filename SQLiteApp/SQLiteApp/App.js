import { SQLiteProvider } from "expo-sqlite";
import LivroForm from "./LivroForm";
import LivroList from "./LivroList";

export default function App() {
  return (
    <SQLiteProvider
      databaseName="userDatabase2.db"
      onInit={async (db) => {
        await db.execAsync(`
          CREATE TABLE IF NOT EXISTS livros (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            titulo TEXT NOT NULL,
            autor TEXT NOT NULL,
            editora TEXT NOT NULL,
            preco DECIMAL(10, 2) NOT NULL
          );
          PRAGMA journal_mode=WAL;
          `);
      }}
      options={{ useNewConnection: false }}
    >
      <LivroForm />
      <LivroList />
    </SQLiteProvider>
  );
}



