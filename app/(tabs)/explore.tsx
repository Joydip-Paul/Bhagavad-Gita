import { Picker } from '@react-native-picker/picker';
import React, { useState } from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import chaptersData from '../../data/chapters.json';
import { GitaChapter } from '../models/verse.model';

const chapters: GitaChapter[] = chaptersData as GitaChapter[];

export default function ChapterDetailScreen() {
  const [selectedChapter, setSelectedChapter] = useState<GitaChapter>(chapters[0]);
  const [currentPage, setCurrentPage] = useState(1);

  const montrosPerPage = 2; // Only 2 montros per page
  const totalPages = Math.ceil(selectedChapter.montros.length / montrosPerPage);

  // Slice montros for the current page
  const startIndex = (currentPage - 1) * montrosPerPage;
  const currentMontros = selectedChapter.montros.slice(
    startIndex,
    startIndex + montrosPerPage
  );

  // Handle chapter dropdown
  const handleChapterChange = (chapterId: number) => {
    const chapter = chapters.find(c => c.id === chapterId);
    if (chapter) {
      setSelectedChapter(chapter);
      setCurrentPage(1); // Reset page when chapter changes
    }
  };

  // Handle page navigation
  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  return (
    <View style={styles.container}>
      {/* ---------------- TOP HEADER ---------------- */}
      <View style={styles.header}>
        <View style={styles.leftHeader}>
          <Text style={styles.partText}>{selectedChapter.part}</Text>
          <Picker
            selectedValue={selectedChapter.id}
            style={styles.picker}
            onValueChange={(itemValue) => handleChapterChange(Number(itemValue))}
          >
            {chapters.map(ch => (
              <Picker.Item label={ch.part} value={ch.id} key={ch.id} />
            ))}
          </Picker>
        </View>
        <View style={styles.rightHeader}>
          <Text style={styles.pageText}>পৃষ্ঠা: {currentPage}</Text>
        </View>
      </View>

      {/* ---------------- CHAPTER NAME ---------------- */}
      <Text style={styles.chapterTitle}>{selectedChapter.module_name}</Text>

      {/* ---------------- MONTROS ---------------- */}
      <FlatList
        data={currentMontros}
        keyExtractor={(item) => item.montro_id.toString() + Math.random()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            {item.teller !== '' && <Text style={styles.teller}>{item.teller}</Text>}
            {item.montro !== '' && <Text style={styles.montro}>{item.montro}</Text>}
            {item.meaning !== '' && <Text style={styles.meaning}>{item.meaning}</Text>}
          </View>
        )}
      />

      {/* ---------------- PAGINATION ---------------- */}
      <View style={styles.pagination}>
        <TouchableOpacity
          style={[styles.pageButton, currentPage === 1 && { opacity: 0.5 }]}
          onPress={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <Text style={styles.pageButtonText}>⟨ পূর্ববর্তী</Text>
        </TouchableOpacity>

        <Picker
          selectedValue={currentPage}
          style={styles.pagePicker}
          onValueChange={(itemValue) => handlePageChange(Number(itemValue))}
        >
          {Array.from({ length: totalPages }, (_, i) => i + 1).map(p => (
            <Picker.Item key={p} label={p.toString()} value={p} />
          ))}
        </Picker>

        <TouchableOpacity
          style={[styles.pageButton, currentPage === totalPages && { opacity: 0.5 }]}
          onPress={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <Text style={styles.pageButtonText}>পরবর্তী ⟩</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

/* ---------------- STYLES ---------------- */
const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fdf6f0' },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  leftHeader: { flexDirection: 'row', alignItems: 'center' },
  rightHeader: {},
  partText: { fontSize: 16, fontWeight: '600', marginRight: 8, color: '#ff6b6b' },
  picker: { width: 150, height: 40 },
  pageText: { fontSize: 16, fontWeight: '600', color: '#34495e' },
  chapterTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#34495e',
    marginBottom: 15,
  },
  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 3 },
    elevation: 3,
  },
  teller: { fontSize: 14, fontWeight: '600', color: '#e74c3c', marginBottom: 4 },
  montro: { fontSize: 16, color: '#2c3e50', lineHeight: 22, marginBottom: 6 },
  meaning: { fontSize: 14, color: '#7f8c8d', fontStyle: 'italic' },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  pageButton: {
    padding: 8,
    backgroundColor: '#ff6b6b',
    borderRadius: 8,
  },
  pageButtonText: { color: '#fff', fontWeight: '600' },
  pagePicker: { width: 100, height: 40 },
});
