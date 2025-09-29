import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native';

export default function France({ navigation }) {
  const comidas = [
    { id: '1', nome: 'Clafoutis', img: require('../assets/Food_France/clafoutis.jpg'), desc: 'Sobremesa francesa feita com frutas (tradicionalmente cerejas) cobertas por uma massa semelhante a flan.' },
    { id: '2', nome: 'Crème Brûlée', img: require('../assets/Food_France/cremeBrule.jpg'), desc: 'Clássica sobremesa francesa de creme de baunilha com uma crosta crocante de açúcar caramelizado por cima.' },
    { id: '3', nome: 'Crêpe', img: require('../assets/Food_France/crepe.jpg'), desc: 'Massa fina e leve, servida com recheios doces (chocolate, frutas) ou salgados (queijo, presunto).' },
    { id: '4', nome: 'Éclair', img: require('../assets/Food_France/eclair.jpg'), desc: 'Doce feito com massa choux, recheado com creme (baunilha ou chocolate) e coberto com glacê.' },
    { id: '5', nome: 'Îles Flottantes', img: require('../assets/Food_France/ilesFlottantes.jpg'), desc: 'Sobremesa de claras em neve flutuando em creme inglês, finalizada com caramelo.' },
    { id: '6', nome: 'Macarons', img: require('../assets/Food_France/macarons.jpg'), desc: 'Pequenos doces coloridos feitos com farinha de amêndoas, crocantes por fora e macios por dentro.' },
    { id: '7', nome: 'Madeleine', img: require('../assets/Food_France/madeleine.jpg'), desc: 'Bolinhos fofinhos em formato de concha, levemente amanteigados e aromáticos.' },
    { id: '8', nome: 'Mil Folhas (Mille-feuille)', img: require('../assets/Food_France/milFolhas.jpg'), desc: 'Camadas de massa folhada intercaladas com creme de confeiteiro e cobertas com glacê ou açúcar.' },
    { id: '9', nome: 'Profiteroles', img: require('../assets/Food_France/profiteroles.jpg'), desc: 'Bolinha de massa choux recheada com creme ou sorvete, geralmente servida com calda de chocolate.' },
    { id: '10', nome: 'Tarte Tatin', img: require('../assets/Food_France/tarteTartin.jpg'), desc: 'Torta de maçã invertida caramelizada, assada com a fruta por baixo e a massa por cima.' }
  ];


  const abrirDetalhe = (item) => {
    navigation.navigate('FranceCard', { item });
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.card} onPress={() => abrirDetalhe(item)}>
      <Image source={item.img} style={styles.img} />
      <Text style={styles.text}> {item.nome} </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🍽️ Cardápio Francês</Text>
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
