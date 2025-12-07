import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useStore } from '../store/useStore';

export default function GamificationHUD() {
  const user = useStore(state => state.user);
  return (
    <View style={styles.card}>
      <Text style={styles.row}>Level {user.level} • XP {user.xp}</Text>
      <Text style={styles.row}>Coins: {user.coins} • Streak: {user.streak} days</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { padding: 12, backgroundColor: '#fff', borderRadius: 10, marginBottom: 12, shadowColor: '#000', shadowOpacity: 0.05, elevation: 1 },
  row: { fontSize: 14, marginBottom: 4 }
});
