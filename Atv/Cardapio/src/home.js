import { StyleSheet, Text, Image, View, TouchableOpacity } from 'react-native';

export default function Main({ navigation }) {

  function chamarTela1() {
    navigation.navigate('Tela1');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Navegação entre Cardapios Países</Text>
      <Text style={styles.text}>Clique abaixo para Navegar</Text>

      <View>
        <TouchableOpacity onPress={chamarTela1}> <Image source={require('./assets/Bandeiras.png')} style={styles.img} /> </TouchableOpacity>
      </View>

    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffe2cdff',
    flex: 1,
    alignItems: 'center',
  },
  title: {
    marginTop: 100,
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 50,
    textAlign: 'center'
  },

  text: {
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'red'
  },

  img: {
    width: 150,
    height: 150,
  }
});
