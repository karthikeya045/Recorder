import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './screens/HomeScreen';
import RecordingsScreen from './screens/RecordingsScreen';
import SettingsScreen from './screens/SettingsScreen';
import HVCSettings from './screens/HVCSettings';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={{
          drawerType: 'front',
          drawerStyle: {
            backgroundColor: '#fff',
            width: 240,
          },
          headerShown: true, // Show the header
        }}
      >
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Recordings List" component={RecordingsScreen} />
        <Drawer.Screen name="Settings" component={SettingsScreen} />
        <Drawer.Screen name="HVC Settings" component={HVCSettings} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
