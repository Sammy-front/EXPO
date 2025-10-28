import { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert, Text, TouchableOpacity } from 'react-native';
import { useSQLiteContext } from 'expo-sqlite';

const UserForm = () => {
    // Estado atualizado para corresponder à tabela 'livros'
    const [form, setForm] = useState({
        titulo: '',
        autor: '',
        genero: '',
        preco: ''
    });

    const db = useSQLiteContext();

    const handleSubmit = async () => {
        if (!form.titulo || !form.autor || !form.genero || !form.preco) {
            Alert.alert('Atenção', 'Por favor, preencha todos os campos.');
            return;
        }

        try {
            const precoNumerico = parseInt(form.preco, 10);
            if (isNaN(precoNumerico)) {
                Alert.alert('Erro', 'O preço deve ser um número válido.');
                return;
            }

            await db.runAsync(
                'INSERT INTO livros (titulo, autor, genero, preco) VALUES (?, ?, ?, ?)',
                [form.titulo, form.autor, form.genero, precoNumerico]
            );

            Alert.alert('Sucesso', 'Livro adicionado!');
            
            setForm({
                titulo: '',
                autor: '',
                genero: '',
                preco: ''
            });
        } catch (error) {
            console.error(error);
            Alert.alert('Erro', error.message || 'Erro ao adicionar livro');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Cadastrar Novo Livro</Text>
            <TextInput
                style={styles.input}
                placeholder="Título do Livro"
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
                placeholder="Gênero"
                value={form.genero}
                onChangeText={(text) => setForm({ ...form, genero: text })}
            />
            <TextInput
                style={styles.input}
                placeholder="Preço (ex: 29)"
                value={form.preco}
                onChangeText={(text) => setForm({ ...form, preco: text })}
                keyboardType="numeric"
            />
            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Adicionar Livro</Text>
            </TouchableOpacity>
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
        shadowOpacity: 0.1,
        shadowRadius: 3.84,
        elevation: 5,
        margin: 20,
    },
    header: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    input: {
        height: 50,
        borderColor: '#ddd',
        borderWidth: 1,
        marginBottom: 15,
        paddingHorizontal: 15,
        borderRadius: 8,
        fontSize: 16,
    },
    button: {
        backgroundColor: "#ffa500",
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 15,
        borderRadius: 8,
        marginTop: 10,
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: "#fff",
    },
});

export default UserForm;