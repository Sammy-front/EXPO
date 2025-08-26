import { TouchableOpacity, Text, View } from 'react-native';
import React, { use, useState } from 'react';
import { styles } from './styles.js';





export default function App() {
  const [corSelecionada, setCorSelecionada] = useState(null)

  function botao(cor) {
    const hex = cor.replece('#', '')
    console.log(hex)
    alert(hex)

    fetch(`https://www.thecolorapi.com/id?hex=${hex}`)
      .then((res) => res.json())
      .then((data) => {
        setCorSelecionada(data.name.valor)
        console.log(data.name.valor);
      })
      .catch((err) => {
        console.log("Erro", err);
      });
  }


  return (
    <View style={styles.container}>

      <View style={styles.ladoalado}>

        <View style={styles.areaInterna}>
          <TouchableOpacity style={styles.botao1} onPress={() => botao(styles.botao1.backgroundColor)}><Text>a</Text></TouchableOpacity>
        </View>


        <View style={styles.areaInterna}>
          <TouchableOpacity style={styles.botao2} onPress={() => botao(styles.botao2.backgroundColor)}> </TouchableOpacity>
        </View>
      </View>



      <View style={styles.ladoalado}>

        <View style={styles.areaInterna}>
          <TouchableOpacity style={styles.botao3} onPress={() => botao(styles.botao3.backgroundColor)}> </TouchableOpacity>
        </View>

        <View style={styles.areaInterna}>
          <TouchableOpacity style={styles.botao4} onPress={() => botao(styles.botao4.backgroundColor)}> </TouchableOpacity>
        </View>

      </View>



      <View style={styles.ladoalado}>

        <View style={styles.areaInterna}>
          <TouchableOpacity style={styles.botao5} onPress={() => botao(styles.botao5.backgroundColor)}> </TouchableOpacity>
        </View>




        <View style={styles.areaInterna}>
          <TouchableOpacity style={styles.botao6} onPress={() => botao(styles.botao6.backgroundColor)}> </TouchableOpacity>
        </View>

      </View>

    </View>
  );
}