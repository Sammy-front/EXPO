import { Text, View, Button } from 'react-native';
import styles from '../styles.js';

export default function Page() {
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

    </View>
  );
}
