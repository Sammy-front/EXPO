# 📱 O que é Expo?

**Expo** é uma plataforma e conjunto de ferramentas para desenvolvimento de aplicativos móveis usando **React Native**.

## 🚀 Vantagens do Expo

- **Fácil de começar**: Não precisa instalar Android Studio ou Xcode para testar.
- **Hot Reload**: Atualização instantânea ao salvar o código.
- **Testes rápidos**: Use o app *Expo Go* no celular para testar seus apps em tempo real.
- **Bibliotecas prontas**: Instale módulos com `expo install`, como câmera, sensores, localização etc.
- **Publicação facilitada**: Permite publicar builds diretamente na loja ou compartilhar links com outras pessoas.

## 🧱 Estrutura de Projeto

Ao rodar `npx create-expo-app`, você terá uma estrutura básica como:

- `App.js` – Arquivo principal do app.
- `assets/` – Imagens, fontes, sons etc.
- `app.json` – Configurações do app (nome, ícone, splash...).
- `package.json` – Lista de dependências e scripts do projeto.
- `.expo/` – Dados internos do Expo (não precisa mexer).

## 📦 Comandos úteis

```bash
npx create-expo-app meuApp
npx expo start           # Inicia o servidor local
npm run android          # Abre o app no emulador Android
npx expo install pacote  # Instala bibliotecas com suporte do Expo
```

## 📚 Mais sobre Navegação

Para usar navegação entre páginas (telas), instale:

```bash
npx expo install @react-navigation/native
npx expo install @react-navigation/native-stack
npx expo install react-native-screens react-native-safe-area-context
```

Depois, crie suas páginas na pasta `screens/` e use um *navigator* no `App.js`.

---

Expo simplifica o desenvolvimento mobile, permitindo que você foque no que importa: **construir seu app**.