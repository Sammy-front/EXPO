import { TouchableOpacity, View } from 'react-native';
import { styles } from './styles.js';

function botao(cor){
  const [, hex] = cor.split('#')
  console.log(hex)
  alert(hex)
}



export default function App() {




  return (
    <View style={styles.container}>

      <View style= {styles.ladoalado}>
        <View style= {styles.areaInterna}>
          <TouchableOpacity style= {styles.botao1} onPress={() => botao(styles.botao1.backgroundColor)}></TouchableOpacity>
        </View>
        <View style= {styles.areaInterna}>
          <TouchableOpacity style= {styles.botao2} onPress={() => botao(styles.botao2.backgroundColor)}></TouchableOpacity>
        </View>
      </View>



       <View style= {styles.ladoalado}>

        <View style= {styles.areaInterna}>
          <TouchableOpacity style= {styles.botao3} onPress={() => botao(styles.botao3.backgroundColor)}></TouchableOpacity>
        </View>

        <View style= {styles.areaInterna}>
          <TouchableOpacity style= {styles.botao4} onPress={() => botao(styles.botao4.backgroundColor)}></TouchableOpacity>
        </View>

      </View>



      <View style= {styles.ladoalado}>

        <View style= {styles.areaInterna}>
          <TouchableOpacity style= {styles.botao5} onPress={() => botao(styles.botao5.backgroundColor)}></TouchableOpacity>
        </View>




        <View style= {styles.areaInterna}>
          <TouchableOpacity style= {styles.botao6} onPress={() => botao(styles.botao6.backgroundColor)}></TouchableOpacity>
        </View> 

       </View> 

    </View>
  );
}