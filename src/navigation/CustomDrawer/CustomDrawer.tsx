import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function CustomDrawer({ navigation }: any) {
  const goTo = (screen: string) => {
    navigation.navigate(screen);
    navigation.closeDrawer();
  };

  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity style={styles.item} onPress={() => goTo('Home')}>
          <Text style={styles.itemText}>🏠 Home</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.item} onPress={() => goTo('Product')}>
          <Text style={styles.itemText}>📦 Products</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.item} onPress={() => goTo('Contact')}>
          <Text style={styles.itemText}>📞 Contact Us</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.item} onPress={() => goTo('About')}>
          <Text style={styles.itemText}>ℹ️ About Us</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.bottomContainer}>
        <Text style={styles.logoutText}>🚪 Logout</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingTop: 60,
  },

  item: {
    paddingVertical: 15,
    paddingHorizontal: 20,
  },

  itemText: {
    fontSize: 20,
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
