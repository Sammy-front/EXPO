import { Text, View, StyleSheet } from 'react-native';

export default function WelcomeScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.fontcolor}>
                Opa bo dia
            </Text>
        </View>
    );
}

const styles = StyleSheet.create ({
    container: {
        flex: 1, 
        justifyContent: 'center',
        alignContent: 'center',
    },
    fontcolor: {
        color: 'Red',
        fontSize: 50,
        fontWeight: 'bold',
    },
})