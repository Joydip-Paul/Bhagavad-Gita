import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import chaptersData from '../../data/chapters.json';
import { GitaChapter, Montro } from '../models/verse.model';

const chapters: GitaChapter[] = chaptersData as GitaChapter[];

export default function ExploreScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>শ্রীমদ্ভগবদ্গীতা যথাযথ</Text>

      <FlatList
        data={chapters}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ paddingBottom: 20 }}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.chapterPart}>{item.part}</Text>
            <Text style={styles.chapterTitle}>{item.module_name}</Text>

            {/* Loop through montros */}
            {item.montros.map((m: Montro) => (
              <View key={m.montro_id} style={styles.montroContainer}>
                <Text style={styles.teller}>{m.teller}</Text>
                <Text style={styles.chapterMontro}>{m.montro}</Text>
                {m.meaning && <Text style={styles.chapterMeaning}>{m.meaning}</Text>}
              </View>
            ))}
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 30,
    backgroundColor: '#fdf6f0',
  },
  header: {
    fontSize: 26,
    fontWeight: '700',
    marginBottom: 20,
    textAlign: 'center',
    color: '#2c3e50',
  },
  card: {
    backgroundColor: '#fff',
    padding: 18,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 5,
  },
  chapterPart: {
    fontSize: 14,
    fontWeight: '600',
    color: '#ff6b6b',
    marginBottom: 4,
  },
  chapterTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#34495e',
    marginBottom: 10,
  },
  montroContainer: {
    marginBottom: 12,
    borderTopWidth: 0.5,
    borderTopColor: '#eee',
    paddingTop: 8,
  },
  teller: {
    fontSize: 14,
    fontWeight: '600',
    color: '#2c3e50',
    marginBottom: 4,
  },
  chapterMontro: {
    fontSize: 16,
    color: '#2c3e50',
    lineHeight: 22,
    marginBottom: 4,
  },
  chapterMeaning: {
    fontSize: 14,
    color: '#7f8c8d',
    fontStyle: 'italic',
  },
});
