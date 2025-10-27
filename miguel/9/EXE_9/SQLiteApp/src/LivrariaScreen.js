import { ScrollView, StyleSheet } from 'react-native';
import UserForm from '../LivroForm';
import UserList from '../LivroList';

export default function LivrariaScreen() {
  return (
    <ScrollView style={styles.container}>
      <UserForm />
      <UserList />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
});