import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    deLado: {
        flexDirection: 'row',
    },
    areaInterna: {
        flex: 1,
        justifyContent:'space-between'
        // alignItems: 'center',
    },
    quadrado: {
        backgroundColor: '#3705ff',
        height: 200,
        width: 200,
        borderWidth: 3,
        // margin: 10
    },
    circulo: {
        backgroundColor: '#ff0505',
        height: 150,
        width: 150,
        borderRadius: 75,
        borderWidth: 3,
        // margin: 10
    },
    quadradoRedondo: {
        backgroundColor: '#4dff7c',
        height: 250,
        width: 150,
        borderRadius: 30,
        borderWidth: 3,
        // margin: 10
    },
    retangulo: {
        backgroundColor: '#8205ff',
        height: 150,
        width: 210,
        borderWidth: 3,
        // margin: 10
    },
    caixaInfo:{
        flex: 1,
        backgroundColor: '#7d6139',

    }
})