import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { requestPermissions } from '../utils/permissions';

export default function SettingsScreen() {
  const handlePermissions = async () => {
    const granted = await requestPermissions();
    if (granted) {
      alert('Permissions granted!');
    } else {
      alert('Permissions denied.');
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Request Permissions" onPress={handlePermissions} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
