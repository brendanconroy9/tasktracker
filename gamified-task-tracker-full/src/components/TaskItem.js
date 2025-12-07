import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useStore } from '../store/useStore';
import { applyCompletionRewards } from '../services/gamificationService';

export default function TaskItem({ task }) {
  const updateUser = useStore(state => state.updateUser);
  const removeTask = useStore(state => state.removeTask);
  const markComplete = useStore(state => state.markComplete);

  function complete() {
    // apply gamification rewards locally
    const user = useStore.getState().user;
    const updated = applyCompletionRewards(user, task);
    updateUser(updated);
    markComplete(task.id);
    // TODO: persist to Firestore / backend
  }

  return (
    <View style={styles.row}>
      <View style={{ flex: 1 }}>
        <Text style={styles.title}>{task.title}</Text>
        {task.notes ? <Text style={styles.notes}>{task.notes}</Text> : null}
      </View>
      {!task.completed ? <Button title="Complete" onPress={complete} /> : <Text>Done</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  row: { padding: 12, borderBottomWidth: 1, borderColor: '#eee', flexDirection: 'row', alignItems: 'center' },
  title: { fontSize: 16, fontWeight: '600' },
  notes: { color: '#666', marginTop: 4 }
});
