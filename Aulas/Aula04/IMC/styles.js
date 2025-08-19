import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#7e8c91',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20, // Adicionado padding para não colar nas bordas
    },
    title: {
        fontSize: 24,
        color: '#fff',
        fontWeight: 'bold',
        marginBottom: 30, // Espaçamento abaixo do título
    },
    inputs: {
        backgroundColor: '#f0f0f0',
        width: '100%', // Ocupa toda a largura do container
        height: 50,
        borderRadius: 10,
        paddingHorizontal: 15,
        marginBottom: 15, // Espaçamento entre os inputs
        fontSize: 16,
        color: '#333',
        borderWidth: 1,
        borderColor: '#dcdcdc',
    }
});