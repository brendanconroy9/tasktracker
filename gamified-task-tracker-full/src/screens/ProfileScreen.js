import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useStore } from '../store/useStore';

export default function ProfileScreen() {
  const user = useStore(state => state.user);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Profile</Text>
      <Text>Level: {user.level}</Text>
      <Text>XP: {user.xp}</Text>
      <Text>Coins: {user.coins}</Text>
      <Text>Streak: {user.streak} days</Text>
      <Button title="Log out (stub)" onPress={() => alert('Log out not implemented in starter')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, padding:16 },
  heading: { fontSize:20, fontWeight:'700', marginBottom:12 }
});
