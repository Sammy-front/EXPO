import { TouchableOpacity, Text, View, Button } from 'react-native';
import React, { useState } from 'react';
import { styles } from './styles.js';

export default function App() {
  const [corSelecionada, setCorSelecionada] = useState(null); // Nome da cor
  const [hexSelecionado, setHexSelecionado] = useState(null); // Código da cor

  function botao(cor) {
    const hex = cor.replace('#', '');
    setHexSelecionado(`#${hex}`); // Salva o hex com o # para usar no fundo da caixa
    fetch(`https://www.thecolorapi.com/id?hex=${hex}`)
      .then((res) => res.json())
      .then((data) => {
        setCorSelecionada(data.name.value);
      })
      .catch((err) => {
        console.log("Erro", err);
      });
  }

  function limpar() {
    setCorSelecionada(null);
    setHexSelecionado(null);
  }

  return (
    <View style={styles.container}>

      {/* LINHA 1 */}
      <View style={styles.ladoalado}>
        <View style={styles.areaInterna}>
          <TouchableOpacity
            style={styles.botao1}
            onPress={() => botao(styles.botao1.backgroundColor)}
          />
        </View>
        <View style={styles.areaInterna}>
          <TouchableOpacity
            style={styles.botao2}
            onPress={() => botao(styles.botao2.backgroundColor)}
          />
        </View>
      </View>

      {/* LINHA 2 */}
      <View style={styles.ladoalado}>
        <View style={styles.areaInterna}>
          <TouchableOpacity
            style={styles.botao3}
            onPress={() => botao(styles.botao3.backgroundColor)}
          />
        </View>
        <View style={styles.areaInterna}>
          <TouchableOpacity
            style={styles.botao4}
            onPress={() => botao(styles.botao4.backgroundColor)}
          />
        </View>
      </View>

      {/* LINHA 3 */}
      <View style={styles.ladoalado}>
        <View style={styles.areaInterna}>
          <TouchableOpacity
            style={styles.botao5}
            onPress={() => botao(styles.botao5.backgroundColor)}
          />
        </View>
        <View style={styles.areaInterna}>
          <TouchableOpacity
            style={styles.botao6}
            onPress={() => botao(styles.botao6.backgroundColor)}
          />
        </View>
      </View>

      {/* ÁREA DE RESULTADO */}
      {corSelecionada && hexSelecionado && (
        <View style={[styles.resultadoArea, { backgroundColor: hexSelecionado }]}>
          <Text style={styles.resultadoTexto}>Cor: {corSelecionada}</Text>
          <Button title="Limpar" onPress={limpar} color="#000" />
        </View>
      )}

    </View>
  );
}
