import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { listRecordings, deleteRecording } from '../utils/fileManagement'; // File management utilities
import { playRecording, stopPlayback } from '../utils/playback'; // Playback utilities

export default function RecordingsScreen() {
  const [recordings, setRecordings] = useState([]);
  const [sound, setSound] = useState(null);

  useEffect(() => {
    // Fetch recordings on screen load
    const fetchRecordings = async () => {
      const files = await listRecordings();
      setRecordings(files);
    };
    fetchRecordings();
    
    // Clean up and stop the sound if playback is active when leaving the screen
    return () => {
      if (sound) {
        sound.unloadAsync();
      }
    };
  }, [sound]);

  const handlePlay = async (uri) => {
    // Play the recording when the play button is pressed
    const playbackSound = await playRecording(uri);
    setSound(playbackSound);  // Save the sound object for stopping playback later
  };

  const handleStop = async () => {
    // Stop the audio playback
    if (sound) {
      await stopPlayback(sound);
      setSound(null);  // Reset the sound state
    }
  };

  const handleDelete = async (fileName) => {
    await deleteRecording(fileName);
    const files = await listRecordings();
    setRecordings(files);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={recordings}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.text}>{item.name}</Text>
            <TouchableOpacity onPress={() => handlePlay(item.uri)}>
              <Text style={styles.button}>Play</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleStop()}>
              <Text style={styles.button}>Stop</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleDelete(item.name)}>
              <Text style={styles.button}>Delete</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#f9f9f9',
    borderRadius: 5,
  },
  text: {
    flex: 1,
    fontSize: 16,
  },
  button: {
    marginLeft: 10,
    color: 'blue',
  },
});
