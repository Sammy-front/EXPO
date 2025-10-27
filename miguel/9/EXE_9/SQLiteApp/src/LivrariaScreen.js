import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import UserForm from '../UserForm';
import UserList from '../UserList';

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