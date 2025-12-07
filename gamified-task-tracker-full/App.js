import React, { useState } from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';

export default function App() {
  const [tasks, setTasks] = useState([
    { id: '1', title: 'Complete daily challenge' },
    { id: '2', title: 'Read cybersecurity article' },
    { id: '3', title: 'Practice coding' },
  ]);

  const [points, setPoints] = useState(0);

  const completeTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
    setPoints(points + 10); // Award 10 points per task
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Gamified Task Tracker</Text>
      <Text style={styles.points}>Points: {points}</Text>

      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.task}>
            <Text>{item.title}</Text>
            <Button title="Complete" onPress={() => completeTask(item.id)} />
          </View>
        )}
        ListEmptyComponent={<Text>All tasks completed! 🎉</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 40, // <-- added value here
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  points: {
    fontSize: 18,
    marginBottom: 20,
  },
  task: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});
