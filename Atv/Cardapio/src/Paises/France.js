import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native';

export default function France({ navigation }) {
  const comidas = [
    { id: '1', nome: 'Croissant', img: require('../assets/Food_France/clafoutis.jpg') },
    { id: '2', nome: 'Baguette', img: require('../assets/Food_France/cremeBrule.jpg') },
    { id: '3', nome: 'Quiche', img: require('../assets/Food_France/crepe.jpg') },
    { id: '4', nome: 'Macaron', img: require('../assets/Food_France/eclair.jpg') },
    { id: '5', nome: 'Crêpe', img: require('../assets/Food_France/ilesFlottantes.jpg') },
    { id: '6', nome: 'Soupe à l’oignon', img: require('../assets/Food_France/macarons.jpg') },
    { id: '7', nome: 'Ratatouille', img: require('../assets/Food_France/madeleine.jpg') },
    { id: '8', nome: 'Madeleine', img: require('../assets/Food_France/milFolhas.jpg') },
    { id: '9', nome: 'Éclair', img: require('../assets/Food_France/profiteroles.jpg') },
    { id: '10', nome: 'Coq au Vin', img: require('../assets/Food_France/tarteTartin.jpg') },
  ];

  function abrirDetalhe(item) {
    alert(`Você clicou em ${item.nome}`);
    // aqui você pode usar navigation.navigate('DetalheComida', { item });
  }

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.card} onPress={() => abrirDetalhe(item)}>
      <Image source={item.img} style={styles.img} />
      <Text style={styles.text}>{item.nome}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🍽️ Cardápio Francês</Text>
      <FlatList
        data={comidas}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2} // duas colunas
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff5e6',
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
    elevation: 3, // sombra no Android
    shadowColor: '#000', // sombra iOS
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
