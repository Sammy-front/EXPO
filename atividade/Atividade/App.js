import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container1}>

      <View style={styles.view1}>
        <Text style={styles.text}>Texto 1.</Text>
      </View>

      <View style={styles.view2}>
        <Text style={styles.text}>Texto 2?</Text>
      </View>

      <View style={styles.view3}>
        <Text style={styles.text}>Texto 3!</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    flexDirection: 'column',
  },

  view1: {
    flex: 3,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  // 915 Height e 415 Width
  view2: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view3: {
    flex: 5,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    fontSize: 50,
    fontWeight: 'bold',
  },

});
