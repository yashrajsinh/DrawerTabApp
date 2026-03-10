import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

//custom Drawer View
import CustomDrawer from '../CustomDrawer/CustomDrawer';
//Screens
import HomeScreen from '../../screens/HomeScreen';
import ProductsScreen from '../../screens/DrawerScreens/ProductsScreen';
import Version from '../../screens/DrawerScreens/Version';
import ContactUsScreen from '../../screens/DrawerScreens/ContactUsScreen';
import AboutUsScreen from '../../screens/DrawerScreens/AboutUsScreen';
import { TouchableOpacity, Text } from 'react-native';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={({ navigation }) => ({
        headerShown: true,
        drawerType: 'slide',
        // Hamburger button
        headerLeft: () => (
          <TouchableOpacity
            onPress={() => navigation.toggleDrawer()}
            style={{ marginLeft: 15 }}
          >
            <Text style={{ fontSize: 24 }}>☰</Text>
          </TouchableOpacity>
        ),
      })}
    >
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Product" component={ProductsScreen} />
      <Drawer.Screen name="Version" component={Version} />
      <Drawer.Screen name="Contact" component={ContactUsScreen} />
      <Drawer.Screen name="About" component={AboutUsScreen} />
    </Drawer.Navigator>
  );
}
