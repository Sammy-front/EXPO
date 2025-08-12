import { Text, View, Image } from 'react-native';
import styles from './styles.js'

export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.linha}>

        <View style={styles.area1}>
          <Image style={styles.image} source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/800px-Tux.svg.png'}} />
        </View>


        <View style={styles.area2}>
          <Text style={styles.title}></Text>
        </View>
      </View>


      <View style={styles.linha}>

        <View style={styles.area3}>
          <Text style={styles.title}></Text>
        </View>


        <View style={styles.area4}>
          <Text style={styles.title}></Text>
        </View>
      </View>


      <View style={styles.linha}>

        <View style={styles.area5}>
          <Text style={styles.title}></Text>
        </View>

        <View style={styles.area6}>
          <Text style={styles.title}></Text>
        </View>
      </View>


    </View>
  );
}
