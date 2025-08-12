import { Text, View, Button, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles.js';

export default function Home({ navigation }) {
  const navigation = useNavigation;

  return (
    <View style={styles.container}>

      <View style={styles.linha}>

        <View style={styles.area1}>
          <Button title='batata' onPress={() => alert('ai papai')} style={styles.title} />
        </View>


        <View style={styles.area2}>
          <Text style={styles.title}></Text>
        </View>
      </View>


      <View style={styles.linha}>

        <View style={styles.area3}>
          <TouchableOpacity onPress={() => console.log("clicado!")}>
            <Text style={styles.title}>ao</Text>
          </TouchableOpacity>
        </View>


        <View style={styles.area4}>
          <TouchableOpacity onPress={() => navigation.navigate("page") }>
            <Text style={styles.title}>adsa </Text>
          </TouchableOpacity>
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
