import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native';

export default function China({ navigation }) {
  const comidas = [
    { id: '1', nome: 'Tangyuan', img: require('../assets/Food_China/Tangyuan.jpg'), desc: 'Bolinhos de arroz glutinoso recheados com pasta de gergelim ou amendoim, servidos em sopa doce.' },
    { id: '2', nome: 'Mooncake', img: require('../assets/Food_China/Mooncake.png'), desc: 'Tradicional doce de lua recheado com pasta de feijão vermelho ou sementes de lótus, consumido no Festival da Lua.' },
    { id: '3', nome: 'Egg Tart', img: require('../assets/Food_China/EggTart.jpg'), desc: 'Tortinha com massa folhada e recheio cremoso de ovo, muito popular em Macau e Hong Kong.' },
    { id: '4', nome: 'Sesame Ball', img: require('../assets/Food_China/SesameBalls.jpg'), desc: 'Bolinhos fritos de arroz glutinoso cobertos com sementes de gergelim e recheados com pasta doce.' },
    { id: '5', nome: 'Red Bean Bun', img: require('../assets/Food_China/redbeanbun.png'), desc: 'Pãozinho fofo cozido no vapor, recheado com pasta doce de feijão vermelho.' },
    { id: '6', nome: 'Mango Pudding', img: require('../assets/Food_China/MangoPudding.png'), desc: 'Sobremesa fria de manga cremosa, suave e refrescante, servida em copinhos.' },
    { id: '7', nome: 'Almond Jelly', img: require('../assets/Food_China/almondjelly.jpg'), desc: 'Gelatina delicada feita com leite de amêndoas, normalmente servida com frutas em calda.' },
    { id: '8', nome: 'Sweet Osmanthus Cake', img: require('../assets/Food_China/SweetOsmanthusCake.jpg'), desc: 'Bolo aromático feito com flores de Osmanthus e açúcar, tradicional em festivais chineses.' },
    { id: '9', nome: 'Black Sesame Roll', img: require('../assets/Food_China/BlackSesameRoll.jpg'), desc: 'Rolinhos doces recheados com pasta de gergelim preto, sabor intenso e levemente crocante.' },
    { id: '10', nome: 'Jian Dui', img: require('../assets/Food_China/JianDui.jpg'), desc: 'Bolinhos fritos de massa de arroz glutinoso, crocantes por fora e recheados com pasta doce.' }
  ];



  const abrirDetalhe = (item) => {
    navigation.navigate('ChinaCard', { item });
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.card} onPress={() => abrirDetalhe(item)}>
      <Image source={item.img} style={styles.img} />
      <Text style={styles.text}> {item.nome} </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🍽️ Cardápio Chines</Text>
      <FlatList
        data={comidas}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffe2cdff',
    paddingTop: 50,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#b30000',
  },
  list: {
    paddingHorizontal: 10,
  },
  card: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 10,
    borderRadius: 15,
    alignItems: 'center',
    padding: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
  },
  img: {
    width: 120,
    height: 120,
    borderRadius: 15,
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
});
