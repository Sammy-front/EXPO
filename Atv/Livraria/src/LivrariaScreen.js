// screens/LivrariaScreen.js

import React, { useState, useEffect } from 'react';
import {
    View,
    StyleSheet,
    FlatList,
    Text,
    TouchableOpacity,
    Modal,
    Alert,
    ActivityIndicator,
    TouchableWithoutFeedback,
    Keyboard,
    TextInput
} from 'react-native';
import { useSQLiteContext } from 'expo-sqlite';

// --- COMPONENTE DO FORMULÁRIO (definido aqui para simplicidade) ---
const LivroForm = ({ onBookAdded, onClose }) => {
    const [form, setForm] = useState({ titulo: '', autor: '', genero: '', preco: '' });
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
            await db.runAsync('INSERT INTO livros (titulo, autor, genero, preco) VALUES (?, ?, ?, ?)', [form.titulo, form.autor, form.genero, precoNumerico]);
            Alert.alert('Sucesso', 'Livro adicionado!');
            if (onBookAdded) onBookAdded(); // Avisa a tela principal para fechar e atualizar
        } catch (error) {
            console.error(error);
            Alert.alert('Erro', error.message || 'Erro ao adicionar livro');
        }
    };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={formStyles.modalContent}>
                <Text style={formStyles.header}>Cadastrar Novo Livro</Text>
                <TextInput style={formStyles.input} placeholder="Título do Livro" value={form.titulo} onChangeText={(text) => setForm({ ...form, titulo: text })} />
                <TextInput style={formStyles.input} placeholder="Autor do Livro" value={form.autor} onChangeText={(text) => setForm({ ...form, autor: text })} />
                <TextInput style={formStyles.input} placeholder="Gênero do Livro" value={form.genero} onChangeText={(text) => setForm({ ...form, genero: text })} />
                <TextInput style={formStyles.input} placeholder="Preço (ex: 29)" value={form.preco} onChangeText={(text) => setForm({ ...form, preco: text })} keyboardType="numeric" />
                <View style={formStyles.formButtonsContainer}>
                    <TouchableOpacity style={[formStyles.button, formStyles.cancelButton]} onPress={onClose}>
                        <Text style={formStyles.buttonText}>Cancelar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={formStyles.button} onPress={handleSubmit}>
                        <Text style={formStyles.buttonText}>Salvar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
};


// --- TELA PRINCIPAL DA LIVRARIA ---
export default function LivrariaScreen() {
    const [modalVisible, setModalVisible] = useState(false);
    const [livros, setLivros] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [refreshKey, setRefreshKey] = useState(0); // Chave para forçar a atualização da lista
    const db = useSQLiteContext();

    // Carrega os livros do banco de dados. Roda sempre que a 'refreshKey' muda.
    useEffect(() => {
        const loadLivros = async () => {
            setIsLoading(true);
            try {
                const results = await db.getAllAsync(`SELECT * FROM livros ORDER BY id DESC`);
                setLivros(results);
            } catch (error) { console.error("Erro ao carregar livros", error); }
            finally { setIsLoading(false); }
        };
        loadLivros();
    }, [refreshKey]); // A MÁGICA DA ATUALIZAÇÃO ACONTECE AQUI!

    // Chamado pelo formulário quando um livro é adicionado com sucesso
    const handleFormSubmitSuccess = () => {
        setModalVisible(false); // Fecha o modal
        setRefreshKey(prevKey => prevKey + 1); // Muda a chave para disparar o useEffect
    };

    const handleDelete = (id) => Alert.alert("Remover Livro", "Tem certeza?", [
        { text: "Cancelar", style: "cancel" },
        { text: "Sim, Remover", style: "destructive", onPress: async () => {
            try {
                await db.runAsync('DELETE FROM livros WHERE id = ?', [id]);
                setRefreshKey(prevKey => prevKey + 1); // Atualiza a lista após deletar
            } catch (error) { console.error("Erro ao remover livro", error); }
        }},
    ]);

    const handleEdit = (livro) => Alert.alert("Editar Livro", `Funcionalidade para editar "${livro.titulo}" a ser implementada.`);

    // Renderiza cada item da lista
    const renderItem = ({ item }) => (
        <View style={listStyles.itemContainer}>
            <View>
                <Text style={listStyles.itemTitle}>{item.titulo}</Text>
                <Text style={listStyles.itemSubtitle}>Autor: {item.autor}</Text>
                <Text style={listStyles.itemText}>Gênero: {item.genero}</Text>
            </View>
            <View style={listStyles.detailsContainer}>
                <Text style={listStyles.itemPrice}>R$ {item.preco.toFixed(2).replace('.', ',')}</Text>
                <View style={listStyles.buttonsContainer}>
                    <TouchableOpacity style={[listStyles.actionButton, listStyles.editButton]} onPress={() => handleEdit(item)}><Text style={listStyles.actionButtonText}>Editar</Text></TouchableOpacity>
                    <TouchableOpacity style={[listStyles.actionButton, listStyles.deleteButton]} onPress={() => handleDelete(item.id)}><Text style={listStyles.actionButtonText}>Remover</Text></TouchableOpacity>
                </View>
            </View>
        </View>
    );

    return (
        // A View principal contém a FlatList, sem ScrollView ao redor.
        <View style={styles.container}>
            {isLoading ? <ActivityIndicator size="large" color="#ffa500" /> : (
                <FlatList
                    data={livros}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id.toString()}
                    ListEmptyComponent={<Text style={listStyles.emptyText}>Nenhum livro cadastrado ainda.</Text>}
                    contentContainerStyle={{ paddingBottom: 80 }}
                />
            )}
            {/* Botão para abrir o modal */}
            <TouchableOpacity style={styles.fab} onPress={() => setModalVisible(true)}><Text style={styles.fabIcon}>+</Text></TouchableOpacity>
            
            {/* Modal que contém o formulário */}
            <Modal animationType="slide" transparent={true} visible={modalVisible} onRequestClose={() => setModalVisible(false)}>
                <View style={styles.modalOverlay}>
                    <LivroForm onBookAdded={handleFormSubmitSuccess} onClose={() => setModalVisible(false)} />
                </View>
            </Modal>
        </View>
    );
}

// --- ESTILOS ---
const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#F5F5F5' },
    fab: { position: 'absolute', width: 60, height: 60, alignItems: 'center', justifyContent: 'center', right: 30, bottom: 30, backgroundColor: '#ffa500', borderRadius: 30, elevation: 8 },
    fabIcon: { fontSize: 30, color: 'white' },
    modalOverlay: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' },
});

const formStyles = StyleSheet.create({
    modalContent: { width: '90%', backgroundColor: 'white', borderRadius: 20, padding: 25, alignItems: 'center', elevation: 5 },
    header: { fontSize: 20, fontWeight: 'bold', marginBottom: 20 },
    input: { width: '100%', height: 50, borderColor: '#ddd', borderWidth: 1, marginBottom: 15, paddingHorizontal: 15, borderRadius: 8, fontSize: 16 },
    formButtonsContainer: { flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginTop: 10 },
    button: { flex: 1, alignItems: 'center', justifyContent: 'center', paddingVertical: 15, borderRadius: 8, backgroundColor: '#ffa500', marginHorizontal: 5 },
    cancelButton: { backgroundColor: '#a9a9a9' },
    buttonText: { fontSize: 16, fontWeight: 'bold', color: 'white' },
});

const listStyles = StyleSheet.create({
    itemContainer: { backgroundColor: '#fff', padding: 20, marginVertical: 8, marginHorizontal: 20, borderRadius: 10, elevation: 3 },
    itemTitle: { fontSize: 18, fontWeight: 'bold', color: '#333' },
    itemSubtitle: { fontSize: 16, color: '#555', marginTop: 4 },
    itemText: { fontSize: 14, color: '#777', marginTop: 4 },
    detailsContainer: { borderTopWidth: 1, borderTopColor: '#eee', marginTop: 15, paddingTop: 15, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
    itemPrice: { fontSize: 18, fontWeight: 'bold', color: '#2E8B57' },
    buttonsContainer: { flexDirection: 'row', gap: 10 },
    actionButton: { paddingVertical: 8, paddingHorizontal: 12, borderRadius: 6 },
    editButton: { backgroundColor: '#3498db' },
    deleteButton: { backgroundColor: '#e74c3c' },
    actionButtonText: { color: '#fff', fontWeight: 'bold', fontSize: 14 },
    emptyText: { textAlign: 'center', marginTop: 50, fontSize: 16, color: 'gray' },
});