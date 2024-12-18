import * as FileSystem from 'expo-file-system';

// Directory for storing recordings
const RECORDINGS_DIR = FileSystem.documentDirectory + 'recordings/';

// Ensure the recordings directory exists
export const ensureRecordingDirectoryExists = async () => {
  const dirInfo = await FileSystem.getInfoAsync(RECORDINGS_DIR);
  if (!dirInfo.exists) {
    await FileSystem.makeDirectoryAsync(RECORDINGS_DIR, { intermediates: true });
  }
};

// Save a recording to the directory
export const saveRecording = async (uri, fileName) => {
  try {
    await ensureRecordingDirectoryExists();
    const destination = RECORDINGS_DIR + fileName;
    await FileSystem.moveAsync({
      from: uri,
      to: destination,
    });
    return destination;
  } catch (error) {
    console.error('Error saving recording:', error);
    throw error;
  }
};

// List all saved recordings
export const listRecordings = async () => {
  try {
    await ensureRecordingDirectoryExists();
    const files = await FileSystem.readDirectoryAsync(RECORDINGS_DIR);
    return files.map((file) => ({
      name: file,
      uri: RECORDINGS_DIR + file,
    }));
  } catch (error) {
    console.error('Error listing recordings:', error);
    return [];
  }
};

// Delete a specific recording
export const deleteRecording = async (fileName) => {
  try {
    const fileUri = RECORDINGS_DIR + fileName;
    await FileSystem.deleteAsync(fileUri);
    console.log('Deleted recording:', fileName);
  } catch (error) {
    console.error('Error deleting recording:', error);
  }
};
