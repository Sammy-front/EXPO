import { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { useSQLiteContext } from 'expo-sqlite';

const livroForm = () => {
    const [form, setForm] = useState({
        titulo: '',
        autor: '',
        editora: '',
        preco: ''
    });

    const db = useSQLiteContext();

    const handleSubmit = async () => {
        try {            
            if (!form.titulo || !form.autor || !form.editora || !form.preco) {
                throw new Error('Preencha todos os campos');
            }

            await db.runAsync(
                'INSERT INTO users (titulo, autor, editora, preco) VALUES (?, ?, ?, ?)',
                [form.titulo, form.autor, form.editora, form.preco]
            )
            
            Alert.alert('Usuário adicionado');
            setForm({
                titulo: '',
                autor: '',
                editora: '',
                preco: ''
            });
        } catch (error) {
            console.error(error);
            Alert.alert('Error', error.message || 'Erro ao adicionar Livro');
        }
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Título"
                value={form.titulo}
                onChangeText={(text) => setForm({ ...form, titulo: text })}
            />
            <TextInput
                style={styles.input}
                placeholder="Autor"
                value={form.autor}
                onChangeText={(text) => setForm({ ...form, autor: text })}
            />
            <TextInput
                style={styles.input}
                placeholder="Editora"
                value={form.editora}
                onChangeText={(text) => setForm({ ...form, editora: text })}
            />
            <TextInput
                style={styles.input}
                placeholder="Preço"
                value={form.preco}
                onChangeText={(text) => setForm({ ...form, preco: text })}
            />

            <Button title="Adiconar Livro" onPress={handleSubmit} />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        margin: 20,
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    button: {
        width: '40%',
        backgroundColor: "#ffa500",
        alignItems: "center",
        justifyContent: "center",
        margin: 15,
        borderRadius: 10,
        padding: 10
    },
    buttonText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: "#253025",
    },
}
);

export default livroForm;
