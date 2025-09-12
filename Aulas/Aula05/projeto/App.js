import React, { useState } from 'react';
import { TouchableOpacity, Text, View, ActivityIndicator } from 'react-native';
import { styles } from './styles.js';
import traduzirTexto from './tradutor.js';

export default function App() {
  const [corInfo, setCorInfo] = useState(null); 
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState(null);

  async function botao(cor) {
    setErro(null);
    setLoading(true);
    try {
      if (!cor || typeof cor !== 'string') throw new Error('Cor inválida');
      let hex = cor.replace('#', '').toLowerCase();

      if (hex.length === 3) hex = hex.split('').map(c => c + c).join('');

      if (hex.length !== 6) throw new Error ('Hex precisa ter 6 caracteres (ex: #aabbcc). Valor recebido: ' + hex);

      const res = await fetch(`https://www.thecolorapi.com/id?hex=${hex}`);
      if (!res.ok) throw new Error('Erro TheColorAPI: ' + res.status);
      const data = await res.json();

      const nomeOriginal = data?.name?.value ?? hex;
      let nomeTraduzido = null;

      try {
        nomeTraduzido = await traduzirTexto(nomeOriginal, "ja");
      } catch (tErr) {
        console.warn('Erro ao traduzir:', tErr);
      }

      setCorInfo({
        hex: '#' + hex,
        nomeOriginal,
        nomeTraduzido
      });

    } catch (e) {
      console.error(e);
      setErro(e.message || String(e));
      setCorInfo(null);
    } finally {
      setLoading(false);
    }
  }

  function limparTexto() {
    setCorInfo(null);
    setErro(null);
  }


  return (
    <View style={styles.container}>
      <View style={{ width: "100%", alignItems: "center" }}>
        {loading && <ActivityIndicator size="small" style={{ marginBottom: 8 }} />}

        {(corInfo || erro) && (
          <View style={styles.caixaTexto}>
            {corInfo && (
              <>
                <Text style={styles.textoCor}>Nome (EN): {corInfo.nomeOriginal}</Text>
                <Text style={styles.textoCor}>Nome (JA): {corInfo.nomeTraduzido}</Text>
                <Text style={styles.textoCor}>HEX: {corInfo.hex}</Text>
              </>
            )}

            {erro && <Text style={[styles.textoCor, { color: "#ffb86b" }]}>Erro: {erro}</Text>}

            <TouchableOpacity style={styles.botaoLimpar} onPress={limparTexto}>
              <Text style={{ color: "#fff", fontWeight: "700" }}>Limpar</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>

      <View style={styles.ladoalado}>
        <View style={styles.areaInterna}>
          <TouchableOpacity style={styles.botao1} onPress={() => botao(styles.botao1.backgroundColor)} />
        </View>

        <View style={styles.areaInterna}>
          <TouchableOpacity style={styles.botao2} onPress={() => botao(styles.botao2.backgroundColor)} />
        </View>
      </View>

      <View style={styles.ladoalado}>
        <View style={styles.areaInterna}>
          <TouchableOpacity style={styles.botao3} onPress={() => botao(styles.botao3.backgroundColor)} />
        </View>

        <View style={styles.areaInterna}>
          <TouchableOpacity style={styles.botao4} onPress={() => botao(styles.botao4.backgroundColor)} />
        </View>
      </View>

      <View style={styles.ladoalado}>
        <View style={styles.areaInterna}>
          <TouchableOpacity style={styles.botao5} onPress={() => botao(styles.botao5.backgroundColor)} />
        </View>

        <View style={styles.areaInterna}>
          <TouchableOpacity style={styles.botao6} onPress={() => botao(styles.botao6.backgroundColor)} />
        </View>
      </View>
    </View>
  );
}
