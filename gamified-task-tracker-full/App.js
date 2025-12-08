import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  Button,
  TextInput,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function App() {
  const [tasks, setTasks] = useState([
    { id: '1', title: 'Do 100 pushups', category: 'Physical', points: 10 },
    { id: '2', title: 'Learn German for 15 minutes', category: 'Mental', points: 15 },
    { id: '3', title: 'Stay under $100 budget', category: 'Financial', points: 20 },
    { id: '4', title: 'Meditate for 10 minutes', category: 'Spiritual', points: 10 },
  ]);

  const [newTask, setNewTask] = useState('');
  const [newCategory, setNewCategory] = useState('Physical');
  const [newPoints, setNewPoints] = useState('');
  const [streak, setStreak] = useState(0);
  const [dailyCompleted, setDailyCompleted] = useState(0);
  const [showAddTask, setShowAddTask] = useState(false);

  const completeTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
    setDailyCompleted(dailyCompleted + 1); // Increment completed tasks count
    if (tasks.filter((task) => task.id !== taskId).length === 0) {
      setStreak(streak + 1); // Increment streak if all tasks are completed
    }
  };

  const addTask = () => {
    if (newTask.trim() && newPoints.trim()) {
      setTasks([
        ...tasks,
        { id: Date.now().toString(), title: newTask, category: newCategory, points: parseInt(newPoints) },
      ]);
      setNewTask('');
      setNewPoints('');
      setShowAddTask(false); // Hide the add task form after adding a task
    }
  };

  const renderCategory = (category) => {
    const categoryTasks = tasks.filter((task) => task.category === category);
    return (
      <View key={category} style={styles.categorySection}>
        <Text style={styles.categoryHeader}>{category}</Text>
        {categoryTasks.length > 0 ? (
          categoryTasks.map((task) => (
            <View key={task.id} style={styles.task}>
              <Text>
                {task.title} - {task.points} points
              </Text>
              <Button title="Complete" onPress={() => completeTask(task.id)} />
            </View>
          ))
        ) : (
          <Text style={styles.noTasks}>No tasks in this category</Text>
        )}
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Gamified Task Tracker</Text>
      <Text style={styles.streak}>Daily Streak: {streak}</Text>
      <Text style={styles.completed}>Tasks Completed Today: {dailyCompleted}</Text>

      {!showAddTask && (
        <Button title="Add Task" onPress={() => setShowAddTask(true)} />
      )}

      {showAddTask && (
        <View style={styles.addTaskForm}>
          <TextInput
            style={styles.input}
            placeholder="Enter new task"
            value={newTask}
            onChangeText={setNewTask}
          />
          <Picker
            selectedValue={newCategory}
            onValueChange={(itemValue) => setNewCategory(itemValue)}
            style={styles.picker}
          >
            <Picker.Item label="Physical" value="Physical" />
            <Picker.Item label="Mental" value="Mental" />
            <Picker.Item label="Financial" value="Financial" />
            <Picker.Item label="Spiritual" value="Spiritual" />
          </Picker>
          <TextInput
            style={styles.input}
            placeholder="Enter points"
            value={newPoints}
            onChangeText={setNewPoints}
            keyboardType="numeric"
          />
          <Button title="Add Task" onPress={addTask} />
          <Button title="Cancel" onPress={() => setShowAddTask(false)} />
        </View>
      )}

      <FlatList
        data={['Physical', 'Mental', 'Financial', 'Spiritual']}
        keyExtractor={(item) => item}
        renderItem={({ item }) => renderCategory(item)}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  streak: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: 'center',
  },
  completed: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  picker: {
    marginBottom: 10,
  },
  addTaskForm: {
    marginBottom: 20,
  },
  categorySection: {
    marginBottom: 20,
  },
  categoryHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  task: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  noTasks: {
    fontStyle: 'italic',
    color: '#888',
  },
});
