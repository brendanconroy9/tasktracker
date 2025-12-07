import React, { useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import TaskList from '../components/TaskList';
import GamificationHUD from '../components/GamificationHUD';
import { useStore } from '../store/useStore';
import { fetchTasks } from '../services/tasksService';

export default function HomeScreen({ navigation }) {
  const setTasks = useStore(state => state.setTasks);

  useEffect(() => {
    (async () => {
      try {
        // TODO: replace with real UID from auth
        // const tasks = await fetchTasks(uid);
        const tasks = [];
        setTasks(tasks);
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);

  return (
    <View style={styles.container}>
      <GamificationHUD />
      <Text style={styles.heading}>Your Tasks</Text>
      <TaskList onPressAdd={() => navigation.navigate('EditTask')} />
      <View style={styles.footer}>
        <Button title="Rewards" onPress={() => navigation.navigate('Rewards')} />
        <Button title="Profile" onPress={() => navigation.navigate('Profile')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  heading: { fontSize: 20, fontWeight: '700', marginVertical: 8 },
  footer: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 12 },
});
