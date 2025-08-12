# 📦 .Expo  
- 🧠 Uso interno do Expo.  
- 🗂️ Armazena cache e metadados usados pelo Expo Go.  
- 🚫 Você não precisa editar nada aqui.

- **🛠️ Create EXPO**  
    `npx create-expo-app@latest -t`

---

## 🖼️ Assets  
- 📁 Pasta para imagens, fontes, sons, vídeos, etc.  
- 📦 Tudo o que é mídia estática vai aqui.  
- 🖼️ Exemplo: imagens que você vai usar com `<Image source={require('./assets/logo.png')} />`.

---

## 📚 Node_Modules  
- 📦 Bibliotecas instaladas no projeto.  
- ⚙️ Essa pasta é criada automaticamente com **npm install** ou **npx create-expo-app**.

---

# 📄 Arquivos

---

## 📃 .gitignore  
- 🚫 Lista os arquivos/pastas que **não devem ser enviados para o Git/GitHub**.  
- 🧹 Geralmente ignora **node_modules**, **.expo**, etc.

---

## 🧩 App.js  
- 🧠 Arquivo principal do seu app.  
- 💻 Aqui é onde você começa a programar sua interface e lógica.  
- 🔗 Geralmente é o ponto de entrada para as rotas.

---

## ⚙️ app.json  
- 📝 Configuração do seu app Expo.  
- 🧭 Define nome, slug (URL do projeto), ícone, tema da splash screen, permissões, etc.

---

## 📦 package.json  
- 🧾 Arquivo mais importante para controle de dependências.  
- 📜 Lista todas as bibliotecas instaladas.  
- 🛠️ Tem scripts úteis como **start**, **android**, **web**, etc.

---

## 🔒 package-lock.json  
- 🛡️ Arquivo gerado automaticamente pelo npm.  
- 📌 Garante que todas as pessoas instalem exatamente as mesmas versões de bibliotecas.

---

# ✅ O que fazer depois disso? – React Pages  
- 📁 Crie uma pasta chamada `screens` dentro da raiz do projeto.  
- ➕ Adicione suas telas (ex: `HomeScreen.js`, `LoginScreen.js`, etc.).  
- 🧭 Configure a navegação com os pacotes:

---

## 🖥️ Comandos no terminal  
```bash
npx expo install @react-navigation/native @react-navigation/native-stack react-native-screens react-native-safe-area-context
