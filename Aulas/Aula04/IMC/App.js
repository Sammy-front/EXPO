'use client'
import { useState } from 'react';
import { Text, View, TextInput } from 'react-native';
import { styles } from './styles.js';

export default function App() {

  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');

  console.log('Relatorio altura:', altura);
  console.log('Relatorio peso:', peso);

  return (
      <View style={styles.container}>
      <Text style={styles.title}>Calculadora de IMC</Text>

      <TextInput
        style={styles.inputs} 
        placeholder='Sua Altura (ex: 1.75)'
        value={altura}
        onChangeText={setAltura}
        keyboardType="numeric" 
      />
      
      <TextInput
        style={styles.inputs} 
        placeholder='Seu Peso (ex: 70.5)'
        value={peso}
        onChangeText={setPeso} 
        keyboardType="numeric"
      />

      
    </View>
  );
}


// Versão nome
// 'use client'
// import { useState } from 'react';
// import { Text, View, TextInput } from 'react-native';
// import { styles } from './styles.js';


// export default function App() {

//   const [nome, setNome] = useState('');
//   console.log('Seja bem-vindo ', nome)

//   return (
//     <View style={styles.container}>
//       <Text> exemplo de entrada</Text>

//       <TextInput
//         placeholder='Seu nome...'
//         value={ nome }
//         onChangeText={ (nome) => {setNome(nome)} }
//       />

//     </View>
//   );
// }