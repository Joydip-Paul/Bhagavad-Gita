import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function QuotesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>✨ Quotes</Text>
      <Text style={styles.text}>Short inspirational quotes from the Gita will appear here.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 12 },
  text: { fontSize: 16, color: '#555', textAlign: 'center' },
});
