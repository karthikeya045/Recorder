import { Audio } from 'expo-av';

// Function to play the recording
export const playRecording = async (uri) => {
  try {
    // Create a new Audio instance for playback
    const { sound, status } = await Audio.Sound.createAsync(
      { uri }, // The URI of the file to be played
      { shouldPlay: true } // Auto start playing once loaded
    );
    
    // Store the sound object to be able to manage playback later
    return sound; 
  } catch (error) {
    console.error('Error playing recording:', error);
  }
};

// Function to stop the audio
export const stopPlayback = async (sound) => {
  try {
    if (sound) {
      await sound.stopAsync();  // Stops the playback
    }
  } catch (error) {
    console.error('Error stopping playback:', error);
  }
};
