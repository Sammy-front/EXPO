import { StyleSheet, Text, View } from 'react-native';

export default function Tela2() {
  return (
    <View style={styles.container}>
      <Text>Tela principal</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffee00ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
