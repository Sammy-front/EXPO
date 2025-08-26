'use client'
import { useState } from "react";
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './styles.js';

export default function App() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [imc, setImc] = useState('');
  const [estado, setEstado] = useState('');
  const [textoimc, setTextoImc] = useState('');

  const calcularIMC = () => {
    if(peso != '' && altura != '' && !isNaN(peso) && !isNaN(altura)) {
      const valorIMC = peso / altura ** 2;
      setIMC(valorIMC.toFixed(1));
      setTextoImc('Imc: ');

      const estadoPessoa =  (valorImc < 17) ? 'Muito abaixo do peso' : 
      (valorImc >= 17 && valorImc < 18.5) ? 'Abaixo do peso' :
      (valorImc >= 18.5 && valorImc < 25) ? 'Peso normal' : 
      (valorImc >= 25 && valorImc < 30) ? 'Acima do peso' :
      (valorImc >= 30 && valorImc < 35) ? 'Obesidade 1' :
      (valorImc >= 35 && valorImc < 40) ? 'Obesidade 2' : 'Obesidade 3';
      
      setEstado(estadoPessoa)
    }
  }

  const limpar = () => {
    setPeso('');
    setAltura('');
    setImc('');
    setEstado('');
    setTextoImc('');
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora de IMC</Text>

      
      <TextInput
        style={styles.input}        
        placeholder="Seu peso..."
        placeholderTextColor="#002"
        keyboardType='numeric'
        value={peso}
        onChangeText={ (peso) => setPeso(peso)}
      />

      <TextInput
        style={styles.input}        
        placeholder="Sua altura..."
        placeholderTextColor="#002"
        keyboardType='numeric'
        value={altura}
        onChangeText={ (altura) => setAltura(altura)}
      />

      <View style={{ flexDirection: "row" }}>
        <View>
          <TouchableOpacity style={styles.buttonEnviar} onPress={calculaImc}>
            <Text style={styles.buttonText}>Enviar</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={styles.buttonLimpar} onPress={limpar}>
            <Text style={styles.buttonText}>Limpar</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Text style={styles.output}>{textoimc} {imc}</Text>
      <Text style={styles.output}>{estado}</Text>

    </View>
  );
}


