import { StyleSheet, Text, View } from 'react-native';

export default function China() {
  function voltar() {
    navigator.navigate('')
  }
  
    return (
    <View style={styles.container}>
      <Text>Tela principal</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff2222ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
