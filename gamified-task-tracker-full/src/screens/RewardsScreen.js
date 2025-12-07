import React from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
import { useStore } from '../store/useStore';

const REWARDS = [
  { id: 'r1', title: 'Coffee', cost: 50 },
  { id: 'r2', title: 'Extra Break', cost: 150 },
  { id: 'r3', title: 'Gift Card', cost: 500 },
];

export default function RewardsScreen() {
  const user = useStore(state => state.user);
  const updateUser = useStore(state => state.updateUser);

  function redeem(reward) {
    if (user.coins >= reward.cost) {
      updateUser({ coins: user.coins - reward.cost });
      alert(`Redeemed ${reward.title}!`);
      // TODO: persist purchase to backend
    } else {
      alert("Not enough coins — keep completing tasks!");
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Rewards Store</Text>
      <FlatList
        data={REWARDS}
        keyExtractor={r => r.id}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <Text style={styles.title}>{item.title} — {item.cost} coins</Text>
            <Button title="Redeem" onPress={() => redeem(item)} />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, padding: 16 },
  heading: { fontSize: 20, fontWeight: '700', marginBottom: 12 },
  row: { padding: 12, borderBottomWidth: 1, borderColor: '#eee', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  title: { fontSize: 16 }
});
