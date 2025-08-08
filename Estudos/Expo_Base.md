# EXPO
## CMD
`Npx create-epxo-app@latest -t`

## .Expo
- Uso interno do Expo.
- Armazena cache e metadados usados pelo Expo Go.
- Você não precisa editar nada aqui.

## Assets
- Pasta para imagens, fontes, sons, vídeos, etc.
- Tudo o que é mídia estática vai aqui.
- Exemplo: imagens que você vai usar com `<Image source={require('./assets/logo.png')} />`.

## Node_Modules
- Bibliotecas instaladas no projeto.
- Essa pasta é criada automaticamente com **Npm install** ou **npx create-expo-app**.

# Arquivos

## .GitIgnore
- Lista os arquivos/pastas que **Não devem ser enviados para o Git/GitHub**.
- Geralmente ignora **Node_Modules**, **.expo**, etc.

## App.js
- Arquivo principal do seu app.
- Aqui é onde você começa a progamar sua interface e lógica.
- Geralmente é o ponto de entrada para as rotas.

## App.Json
- Configuração do seu app EXPO.
- Define nome, Slud (url do projeto), ícone, tema de slash screen, permissões, etc.

## Package.Json
- Arquivo mais importante para controle de Dependências.
- Lista todas as bibliotecas instaladas.
- Tem scripts úteis como **Start**, **Android**, **Web**, etc.

## Package-Lock.Json
- Arquivo gerado automaticamente pelo npm.
- Garante que todas as pessoas instalem exatamente as mesmas versões de bibliotecas.

# ✅ O que fazer depois disso? - React Pages
- Crie uma pasta chamada screens dentro da raiz do projeto.
- Adicione suas telas (HomeScreen.js, LoginScreen.js, etc.).
- Configure a navegação com os pacotes:

## CMD 
<pre>
npx expo install @react-navigation/native<br>
npx expo install @react-navigation/native-stack<br>
npx expo install react-native-screens react-native-safe-area-context<br>
</pre>