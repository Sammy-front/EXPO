import { useEffect, useState } from 'react';
import { FlatList, Text, View, ActivityIndicator, RefreshControl, StyleSheet } from 'react-native';
import { useSQLiteContext } from 'expo-sqlite';

const UserList = () => {
    const [livros, setLivros] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const db = useSQLiteContext();

    const loadLivros = async () => {
        try {
            setIsLoading(true);
            const results = await db.getAllAsync(`SELECT * FROM livros ORDER BY id DESC`);
            setLivros(results);
        } catch (error) {
            console.error("Erro no banco de dados", error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        const unsubscribe = db.onUpdate(() => {
            loadLivros();
        });

        loadLivros();

        return () => {
            unsubscribe.remove();
        };
    }, []);


    if (isLoading && !livros.length) {
        return <ActivityIndicator size="large" color="#ffa500" />;
    }

    const renderItem = ({ item }) => (
        <View style={styles.itemContainer}>
            <Text style={styles.itemTitle}>{`${item.titulo}`}</Text>
            <Text style={styles.itemSubtitle}>{`Autor: ${item.autor}`}</Text>
            <Text style={styles.itemText}>{`Gênero: ${item.genero}`}</Text>
            {item.telefone && <Text style={styles.itemText}>{`Contato: ${item.telefone}`}</Text>}
        </View>
    );

    return (
        <View style={styles.listContainer}>
            <Text style={styles.header}>Livros Cadastrados</Text>
            <FlatList
                data={livros}
                refreshControl={
                    <RefreshControl refreshing={isLoading} onRefresh={loadLivros} tintColor="#ffa500" />
                }
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderItem}
                ListEmptyComponent={<Text style={styles.emptyText}>Nenhum livro encontrado</Text>}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    listContainer: {
        flex: 1,
        marginHorizontal: 20,
    },
    header: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
    },
    itemContainer: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 8,
        marginBottom: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 3,
    },
    itemTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    itemSubtitle: {
        fontSize: 16,
        color: '#555',
        marginTop: 5,
    },
    itemText: {
        fontSize: 14,
        color: '#666',
        marginTop: 5,
    },
    emptyText: {
        textAlign: 'center',
        marginTop: 20,
        fontSize: 16,
        color: 'gray',
    },
});

export default UserList;