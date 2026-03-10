import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

export default function ProductsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>📦 Products</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
