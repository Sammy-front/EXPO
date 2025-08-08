import { StyleSheet } from "react-native";

const styles = StyleSheet.create ({
    container: {
        flex: 1,
    },
    linha: {
        flex: 1,
        flexDirection: 'row'
    },

    area1: {
        flex: 1,
        backgroundColor: '#25ab33',
        alignItems: 'center',
        justifyContent: 'center',
    },

    area2: {
        flex: 1,
        backgroundColor: '#ac45ac',
        alignItems: 'center',
        justifyContent: 'center',
    },

    area3: {
        flex: 1,
        backgroundColor: '#2278ac',
        alignItems: 'center',
        justifyContent: 'center',
    },

    area4: {
        flex: 1,
        backgroundColor: '#f19',
        alignItems: 'center',
        justifyContent: 'center',
    },

    area5: {
        flex: 1,
        backgroundColor: '#f1f2',
        alignItems: 'center',
        justifyContent: 'center',
    },

    area6: {
        flex: 1,
        backgroundColor: '#ff2',
        alignItems: 'center',
        justifyContent: 'center',
    },
     
    title: {
        fontSize: 50,
        fontWeight: 'bold',
        fontStyle: 'italic',
        color: '#ac99ff'
    },

    image: {
        width: 40,
        height: 40,
        flex: 1,
    } 
});

export default styles;