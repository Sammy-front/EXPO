import { StyleSheet, Text, Image, View, TouchableOpacity } from 'react-native';

export default function Main({ navigation }) {

  function irParaCatalogo() {
    navigation.navigate('Tela1');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>📚 Livraria Aurora</Text>

      {/* <Image
        source={require('./assets/livraria.png')} // coloque aqui uma imagem bonita da livraria
        style={styles.banner}
      /> */}

      <Text style={styles.subtitle}>
        Descubra mundos incríveis em cada página
      </Text>

      <TouchableOpacity style={styles.button} onPress={irParaCatalogo}>
        <Text style={styles.buttonText}>Explorar Catálogo</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fef6ee',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },

  header: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#4b2e05',
    marginBottom: 20,
    textShadowColor: 'rgba(0,0,0,0.1)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },

  banner: {
    width: 220,
    height: 220,
    resizeMode: 'contain',
    marginBottom: 20,
  },

  subtitle: {
    fontSize: 17,
    color: '#7b4f20',
    fontStyle: 'italic',
    textAlign: 'center',
    marginBottom: 40,
  },

  button: {
    backgroundColor: '#a47148',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 25,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 3,
  },

  buttonText: {
    color: '#fff8f0',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
