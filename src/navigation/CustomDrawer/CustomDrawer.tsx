import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import Header from '../../components/Header/Header';

export default function CustomDrawer({ navigation }: any) {
  const goTo = (screen: string) => {
    navigation.navigate(screen);
    navigation.closeDrawer();
  };

  return (
    <View style={styles.container}>
      <Header />
      <View>
        <TouchableOpacity style={styles.item} onPress={() => goTo('Home')}>
          <Text style={styles.itemText}>🏠 Home</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.item} onPress={() => goTo('Product')}>
          <Text style={styles.itemText}>📦 Products</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.item} onPress={() => goTo('About')}>
          <Text style={styles.itemText}>ℹ️ About Us</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.item} onPress={() => goTo('Version')}>
          <Text style={styles.itemText}>♻ Version</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.item} onPress={() => goTo('Contact')}>
          <Text style={styles.itemText}>📞 Contact Us</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.bottomContainer}>
        <Text
          onPress={() => Alert.alert('Log out', 'You are logging out')}
          style={styles.logoutText}
        >
          🚪 Logout
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingTop: 65,
    padding: 10,
  },

  item: {
    paddingVertical: 20,
    paddingHorizontal: 15,
  },

  itemText: {
    fontSize: 25,
    fontWeight: 'bold',
  },

  bottomContainer: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },

  logoutText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#E11D48',
    textAlign: 'center',
  },
});
