import { StyleSheet, Text, Image, View, TouchableOpacity } from 'react-native';

export default function Tela1({ navigation }) {

  function chamarChinese() {
    navigation.navigate('China');
  }

  function chamarFrance() {
    navigation.navigate('France');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Escolha um País</Text>

      <View style={styles.row}>
        <TouchableOpacity onPress={chamarChinese}>
          <Image 
            source={require('../assets/Paises/ChinaFoto.png')} 
            style={styles.img} 
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={chamarFrance}>
          <Image 
            source={require('../assets/Paises/FranceFoto.png')} 
            style={styles.img} 
          />
        </TouchableOpacity>
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
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 40
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 50, 
  },
  img: {
    width: 150,
    height: 150,
    borderRadius: 100,
  }
});
