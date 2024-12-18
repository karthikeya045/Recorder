import * as Permissions from 'react-native-permissions';

export const requestPermissions = async () => {
  const microphoneStatus = await Permissions.request('microphone');
  const storageStatus = await Permissions.request('storage');

  return microphoneStatus === 'granted' && storageStatus === 'granted';
};
