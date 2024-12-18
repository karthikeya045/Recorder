import React, { useState, useEffect } from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';
import { Audio } from 'expo-av';  // Expo Audio for recording functionality
import { saveRecording } from '../utils/fileManagement'; // Import your saveRecording utility

export default function HomeScreen() {
  const [recording, setRecording] = useState(null);
  const [isRecording, setIsRecording] = useState(false);

  useEffect(() => {
    // Clean up audio recording if component unmounts
    return () => {
      if (recording) {
        recording.stopAndUnloadAsync();
      }
    };
  }, [recording]);

  // Start recording
  const handleStartRecording = async () => {
    try {
      const { status } = await Audio.requestPermissionsAsync();
      if (status === 'granted') {
        const { recording } = await Audio.Recording.createAsync(
          Audio.RecordingOptionsPresets.HIGH_QUALITY
        );
        setRecording(recording);
        setIsRecording(true);
      } else {
        alert('Permission to access microphone is required.');
      }
    } catch (error) {
      console.error('Error starting recording:', error);
    }
  };

  // Stop recording and save the file
  const handleStopRecording = async () => {
    try {
      if (recording) {
        await recording.stopAndUnloadAsync();
        const uri = recording.getURI();
        const fileName = `Recording_${Date.now()}.mp3`;
        alert(fileName);
        alert(uri);
        const savedUri = await saveRecording(uri, fileName); // Save the recording
        alert('Recording saved at: ' + savedUri);
        alert(`Recording saved at: ${savedUri}`);
        setIsRecording(false);
        setRecording(null);
      }
    } catch (error) {
      console.error('Error stopping or saving recording:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Call Recorder</Text>
      {!isRecording ? (
        <Button title="Start Recording" onPress={handleStartRecording} />
      ) : (
        <Button title="Stop Recording" onPress={handleStopRecording} />
      )}
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});
