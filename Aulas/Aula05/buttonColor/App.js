import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles.js";

export default function App() {
  const [selectedBox, setSelectedBox] = useState(null);

  // Quadrados configurados
  const boxes = [
    { backgroundColor: "#d7265e", width: 120, height: 160, borderRadius: 25, borderColor: "black" },
    { backgroundColor: "#2de1c2", width: 120, height: 100, borderRadius: 5, borderColor: "black" },
    { backgroundColor: "#2855dd", width: 100, height: 100, borderRadius: 5, borderColor: "limegreen" },
    { backgroundColor: "#fff500", width: 120, height: 100, borderRadius: 5, borderColor: "goldenrod" },
  ];

  const handleSelectBox = (box) => {
    setSelectedBox(box);
  };

  const handleClear = () => {
    setSelectedBox(null);
  };

  return (
    <View style={styles.container}>
      
      <View style={styles.linha}>
        {boxes.slice(0, 2).map((box, i) => (
          <TouchableOpacity key={i} onPress={() => handleSelectBox(box)} style={[styles.caixa, box]}
          />
        ))}
      </View>

     
      <View style={styles.linha}>
        {boxes.slice(2).map((box, i) => (
          <TouchableOpacity key={i + 2} onPress={() => handleSelectBox(box)} style={[styles.caixa, box]}/>
        ))}
      </View>


      <View style={styles.caixaInfo}>
        {selectedBox ? (
          <>
            <Text style={styles.texto}>backgroundColor : {selectedBox.backgroundColor}</Text>
            <Text style={styles.texto}>width : {selectedBox.width}</Text>
            <Text style={styles.texto}>height : {selectedBox.height}</Text>
            <Text style={styles.texto}>borderRadius : {selectedBox.borderRadius}</Text>
          </>
        ) : (
          <Text style={styles.texto}>Selecione um quadrado</Text>
        )}

        <TouchableOpacity style={styles.limpar} onPress={handleClear}>
          <Text style={{ color: "#fff", fontWeight: "bold" }}>Limpar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}


