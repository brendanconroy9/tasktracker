import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';
import { useStore } from '../store/useStore';

export default function TaskEditorScreen({ navigation, route }) {
  const { task } = route.params || {};
  const [title, setTitle] = useState(task?.title || '');
  const [notes, setNotes] = useState(task?.notes || '');
  const addTask = useStore(state => state.addTask);

  function save() {
    const newTask = {
      id: Math.random().toString(36).substring(2,9),
      title,
      notes,
      priority: 1,
      completed: false,
      createdAt: new Date().toISOString(),
    };
    addTask(newTask);
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Title</Text>
      <TextInput value={title} onChangeText={setTitle} style={styles.input} />
      <Text style={styles.label}>Notes</Text>
      <TextInput value={notes} onChangeText={setNotes} style={[styles.input, { height: 100 }]} multiline />
      <Button title="Save Task" onPress={save} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  input: { borderWidth: 1, borderColor: '#ddd', padding: 8, borderRadius: 6, marginBottom: 12 },
  label: { fontWeight: '600', marginBottom: 6 },
});
