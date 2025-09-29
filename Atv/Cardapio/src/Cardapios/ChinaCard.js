import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';


export default function ChinaCard({ route, navigation }) {
  const { item } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>{item.nome}</Text>
      <Image source={item.img} style={styles.img} />
      <Text style={styles.desc}>{item.desc}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#ffe2cdff',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#b30000',
    textAlign: 'center',
  },
  img: {
    width: 300,
    height: 200,
    borderRadius: 15,
    marginBottom: 20,
  },
  desc: {
    fontSize: 16,
    lineHeight: 22,
    textAlign: 'justify',
    color: '#333',
  },
});
