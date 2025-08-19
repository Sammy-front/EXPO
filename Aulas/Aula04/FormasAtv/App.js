import { useState } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { styles } from "./styles.js"

export default function App() {

  const [info, setInfo] = useState('');

  function infoBotao(estilo) {
    const estiloTexto = JSON.stringify(estilo, null, 2);
    setInfo(estiloTexto);
    console.log('você clicou');
  }
  
  return (
    <View style={styles.container}>

      <View style={styles.areaInterna}>
        <View style={styles.deLado}>
          <TouchableOpacity style={styles.quadradoRedondo} onPress={() => infoBotao(styles.quadradoRedondo)}></TouchableOpacity>
          <TouchableOpacity style={styles.quadrado} onPress={() => infoBotao(styles.quadrado)}></TouchableOpacity>
        </View>
      </View>

      <View style={styles.areaInterna}>
        <View style={styles.deLado}>
          <TouchableOpacity style={styles.circulo} onPress={() => infoBotao(styles.circulo)}></TouchableOpacity>
          <TouchableOpacity style={styles.retangulo} onPress={() => infoBotao(styles.retangulo)}></TouchableOpacity>
        </View>
      </View>

      <View style={styles.caixaInfo}>
        <Text style={{ color: 'black', fontSize: 14, fontWeight: 'bold'}}>
          {info ? `Estilo selecionado:\n${info}` : 'Nenhum estilo selecionado'}
        </Text>
      </View>
    </View>
  )
}