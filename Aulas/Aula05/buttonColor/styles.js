import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      justifyContent: "center",
      backgroundColor: "#fff",
    },
    linha: {
      flexDirection: "row",
      justifyContent: "space-around",
      marginBottom: 30,
    },
    caixa: {
      width: 120,
      height: 160,
      borderWidth: 2,
      borderColor: "black",
    },
    caixaInfo: {
      width: "100%",
      height: 200,
      borderRadius: 15,
      borderWidth: 3,
      borderColor: "darkgreen",
      backgroundColor: "#e8e3e0",
      padding: 10,
      alignItems: "center",
      justifyContent: "center",
    },
    texto: {
      fontWeight: "bold",
      marginBottom: 2,
    },
    limpar: {
      marginTop: 10,
      backgroundColor: "orange",
      paddingHorizontal: 20,
      paddingVertical: 8,
      borderRadius: 10,
    },
  });
  