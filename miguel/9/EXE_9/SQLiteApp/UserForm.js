import { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert, Text, TouchableOpacity } from 'react-native';
import { useSQLiteContext } from 'expo-sqlite';

const UserForm = () => {
    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: ''
    });

    const db = useSQLiteContext();

    const handleSubmit = async () => {
        try {
            if (!form.firstName || !form.lastName || !form.email) {
                throw new Error('Preencha os campos obrigatórios (Título, Autor, Gênero)');
            }

            await db.runAsync(
                'INSERT INTO livros (titulo, autor, genero, telefone) VALUES (?, ?, ?, ?)',
                [form.firstName, form.lastName, form.email, form.phone]
            );

            Alert.alert('Sucesso', 'Livro adicionado!');
            setForm({
                firstName: '',
                lastName: '',
                email: '',
                phone: ''
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
                value={form.firstName}
                onChangeText={(text) => setForm({ ...form, firstName: text })}
            />
            <TextInput
                style={styles.input}
                placeholder="Autor"
                value={form.lastName}
                onChangeText={(text) => setForm({ ...form, lastName: text })}
            />
            <TextInput
                style={styles.input}
                placeholder="Gênero"
                value={form.email}
                onChangeText={(text) => setForm({ ...form, email: text })}
            />
            <TextInput
                style={styles.input}
                placeholder="Telefone para contato (opcional)"
                value={form.phone}
                onChangeText={(text) => setForm({ ...form, phone: text })}
                keyboardType="phone-pad"
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