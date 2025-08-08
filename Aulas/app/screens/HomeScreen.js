import { View, Text, Button, StyleSheet } from 'react-native'

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>Bem vindo a Home</Text>
            <Text>Abaixo você poderá entrar na pagina Welcome</Text>
            <Button title='Ir para Boas-Vindas' onPress={() => navigation.navigate('Welcome')} style={styles.button} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
    },
    button: {
        borderStyle: 'dashed',
        borderWidth: 10,
    },
})