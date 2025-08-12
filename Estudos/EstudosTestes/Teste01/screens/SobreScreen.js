import { View, Text, Button, StyleSheet } from 'react-native';

export default function SobreScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Essa é a tela Sobre!</Text>
      <Button title="Voltar" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  texto: { fontSize: 20, marginBottom: 10 },
});
