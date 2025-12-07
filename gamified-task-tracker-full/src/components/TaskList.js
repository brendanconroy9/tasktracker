import React from 'react';
import { View, FlatList, Button, Text } from 'react-native';
import { useStore } from '../store/useStore';
import TaskItem from './TaskItem';

export default function TaskList({ onPressAdd }) {
  const tasks = useStore(state => state.tasks);

  return (
    <View style={{ flex: 1 }}>
      <Button title="Add Task" onPress={onPressAdd} />
      {tasks.length === 0 ? <Text style={{ marginTop: 12 }}>No tasks yet — add one!</Text> : null}
      <FlatList
        data={tasks}
        keyExtractor={t => t.id}
        renderItem={({ item }) => <TaskItem task={item} />}
      />
    </View>
  );
}
