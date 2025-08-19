import { useState } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { styles } from "./styles.js"

export default function App() {

  const [corFundo, setCorFundo] = useState('')
  const [largura, setLargura] = useState('')
  const [altura, setAltura] = useState('')

  const propriedades = (info) => {
    for (let key in info) {
      switch (key) {
        case 'backgroundColor':
          setCorFundo(`${key} : ${info[key].slice(1, 7, 8)}`)
          break;
        case 'width':
          setLargura(`${key} : ${info[key]}`)
          break
        case 'height':
          setAltura(`${key} : ${info[key]}`)
      }
    }
  }

  const limpar = () => {
    setCorFundo('');
    setLargura('');
    setAltura('');
  }


  return (
    <View style={styles.container}>

      <View style={styles.areaInterna}>
        <View style={styles.deLado}>
          <TouchableOpacity style={styles.quadradoRedondo} onPress={() => { propriedades(styles.quadradoRedondo) }}></TouchableOpacity>
          <TouchableOpacity style={styles.quadrado} onPress={() => { propriedades(styles.quadrado) }}></TouchableOpacity>
        </View>
      </View>

      <View style={styles.areaInterna}>
        <View style={styles.deLado}>
          <TouchableOpacity style={styles.circulo} onPress={() => { propriedades(styles.circulo) }}></TouchableOpacity>
          <TouchableOpacity style={styles.retangulo} onPress={() => { propriedades(styles.retangulo) }}></TouchableOpacity>
        </View>
      </View>

      <View style={{ flex: 1, alignItems: 'center', marginBottom: 25 }}>
        <View style={styles.caixaInfo}>
          <Text style={{ color: 'black', fontSize: 20, fontWeight: 'bold' }}>{corFundo}</Text>
          <Text style={{ color: 'black', fontSize: 20, fontWeight: 'bold' }}>{largura}</Text>
          <Text style={{ color: 'black', fontSize: 20, fontWeight: 'bold' }}>{altura}</Text>
          <TouchableOpacity style={{ marginTop: 45, backgroundColor: '#c76000', padding: 15, borderRadius: 25 }} onPress={() => { limpar() }}>
            <Text style={{color:'#ffffff', fontWeight: 'bold', fontSize: 20}}>Limpar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}
