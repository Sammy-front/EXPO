import { useEffect, useState } from 'react';
import { Modal, View, TextInput, Text, StyleSheet, Alert, Pressable } from 'react-native';
import { useSQLiteContext } from 'expo-sqlite';

const EditLivroModal = ({ visible, livro, onClose, onSave }) => {
    // Estado interno para o formulário, inicializado com os dados do livro
    const [form, setForm] = useState({
        titulo: '',
        autor: '',
        editora: '',
        preco: ''
    });

    const db = useSQLiteContext();

    // Este useEffect atualiza o formulário sempre que um novo livro é selecionado
    useEffect(() => {
        if (livro) {
            setForm({
                titulo: livro.titulo,
                autor: livro.autor,
                editora: livro.editora,
                preco: livro.preco.toString(), // Converter para string para o TextInput
            });
        }
    }, [livro]);

    const handleUpdate = async () => {
        if (!form.titulo || !form.autor || !form.editora || !form.preco) {
            Alert.alert('Atenção', 'Todos os campos são obrigatórios.');
            return;
        }

        try {
            await db.runAsync(
                'UPDATE livros SET titulo = ?, autor = ?, editora = ?, preco = ? WHERE id = ?',
                [form.titulo, form.autor, form.editora, form.preco, livro.id]
            );
            Alert.alert('Sucesso', 'Livro atualizado!');
            onSave(); // Chama a função onSave passada pelo pai (ListaLivros)
        } catch (error) {
            console.error("Erro ao atualizar livro", error);
            Alert.alert('Erro', 'Não foi possível atualizar o livro.');
        }
    };







    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
            onRequestClose={onClose} // Permite fechar com o botão "voltar" do Android
        >
            <View style={styles.modalOverlay}>
                <View style={styles.modalContainer}>
                    <Text style={styles.modalTitle}>Editar Livro</Text>

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
                        placeholder="Editora"
                        value={form.editora}
                        onChangeText={(text) => setForm({ ...form, editora: text })}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Preço (ex: 29.90)"
                        value={form.preco}
                        keyboardType="decimal-pad"
                        onChangeText={(text) => setForm({ ...form, preco: text })}
                    />

                    <View style={styles.buttonRow}>
                        <Pressable style={[styles.botao, styles.cancelButton]} onPress={onClose}>
                            <Text style={styles.textoBotao}>Cancelar</Text>
                        </Pressable>
                        <Pressable style={styles.botao} onPress={handleUpdate}>
                            <Text style={styles.textoBotao}>Salvar</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </Modal>
    );
};








// Use um StyleSheet similar ao seu formulário de cadastro, mas com estilos de modal
const styles = StyleSheet.create({
    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fundo escuro semi-transparente
    },
    modalContainer: {
        width: '90%',
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
        elevation: 10,
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    input: {
        height: 50,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 15,
        paddingHorizontal: 15,
        fontSize: 16,
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    botao: {
        flex: 1, // Faz os botões dividirem o espaço
        backgroundColor: '#795548',
        paddingVertical: 15,
        borderRadius: 30,
        alignItems: 'center',
        marginHorizontal: 5,
    },
    cancelButton: {
        backgroundColor: '#A9A9A9', // Cinza
    },
    textoBotao: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default EditLivroModal;