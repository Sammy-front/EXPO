import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 25
    },
    deLado: {
        flex: 1,
        flexDirection: 'row',
    },
    areaInterna: {
        flex: 1,
        // justifyContent:'space-between'
        alignItems: 'center',
    },
    quadrado: {
        backgroundColor: '#3705ff',
        height: 200,
        width: 200,
        borderWidth: 3,
        margin: 10
    },
    circulo: {
        backgroundColor: '#ff0505',
        height: 150,
        width: 150,
        borderRadius: 75,
        borderWidth: 3,
        margin: 10
    },
    quadradoRedondo: {
        backgroundColor: '#4dff7c',
        height: 250,
        width: 150,
        borderRadius: 30,
        borderWidth: 3,
        margin: 10
    },
    retangulo: {
        backgroundColor: '#8205ff',
        height: 150,
        width: 210,
        borderWidth: 3,
        margin: 10
    },
    caixaInfo:{
        flex: 1,
        backgroundColor: '#9c9381',
        height: 200,
        width: 300,
        borderRadius: 50,
        borderWidth: 4,
        alignItems: 'center',
        justifyContent:'center'
    }
})