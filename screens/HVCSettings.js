import React, { useState } from 'react';
import { View, Button, StyleSheet, Text, Switch, TouchableOpacity, ScrollView, Modal, Alert } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';

const resolutions = [
  { value: '3840x2160', label: '3840 x 2160' },
  { value: '1920x1080', label: '1920 x 1080' },
  { value: '1280x720', label: '1280 x 720' },
  { value: '720x480', label: '720 x 480' },
  { value: '640x480', label: '640 x 480' },
  { value: '352x288', label: '352 x 288' },
  { value: '320x240', label: '320 x 240' },
  { value: '176x144', label: '176 x 144' },
];

export default function HVCSettings({ navigation }) {
  
  const [recordingDuration, setRecordingDuration] = useState(true);
  const [showNotificationBarIcon, setShowNotificationBarIcon] = useState(false);
  const [showPopupNotifications, setShowPopupNotifications] = useState(true);
  const [lowBatteryStopRecording, setLowBatteryStopRecording] = useState(true);
  const [isRecordingDurationPopupVisible, setIsRecordingDurationPopupVisible] = useState(false);
  const [selectedDuration, setSelectedDuration] = useState('30 seconds'); // Default duration
  const [isCameraSelectionVisible, setIsCameraSelectionVisible] = useState(false);
  const [selectedCamera, setSelectedCamera] = useState('Back camera');
  const [isRecordingQualityPopupVisible, setIsRecordingQualityPopupVisible] = useState(false);
  const [selectedResolution, setSelectedResolution] = useState(resolutions[5]); // Default to 352x288

  const handleRecordingListPress = () => {
    // Navigate to VideoRecordingList using the provided navigation object
    navigation.navigate('Video List'); 
  };

  

  const durations = [
    'Unlimited (records until stopped manually)',
    '30 seconds',    '1 minute',    '3 minutes',    '5 minutes',
    '10 minutes',    '15 minutes',    '30 minutes',
    '60 minutes',    '90 minutes',
  ];

    

  const usecam = [
    'Front Camera',
    'Back camera',   
  ];

  

  // Recording Duration
  const handleRecordingDurationPress = () => {
    setIsRecordingDurationPopupVisible(true); 
  };

  const handleDurationSelect = (duration) => {
    setSelectedDuration(duration);
  };

  const handleCancelPress = () => {
    setIsRecordingDurationPopupVisible(false); 
    setIsCamToUse(false); 
  };

  // Cmera to use
  const handleCameraSelectionPress = () => {
    setIsCameraSelectionVisible(true);
  };

  const handleCameraSelect = (camera) => {
    setSelectedCamera(camera);
    //setIsCameraSelectionVisible(false);
  };

  // Recording Quality
  const handleRecordingQualityPress = () => {
    setIsRecordingQualityPopupVisible(true);
  };

  const handleResolutionSelect = (resolution) => {
    setSelectedResolution(resolution);
  };  

  return (
    <ScrollView style={styles.container}>
      
      {/* Recording List */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Recordings</Text>
        <TouchableOpacity style={styles.option} onPress={handleRecordingListPress} >
          <View style={styles.optionIconContainer}>
              <Text style={styles.optionIcon}>☰</Text>
          </View>
          <View style={styles.optionDetailsContainer}>
            <Text style={styles.optionText}>Recordings list</Text>
            <Text style={styles.optionDescription}>Your recorded videos</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Basic</Text>

        {/* Recoding Duration */}
        <TouchableOpacity onPress={handleRecordingDurationPress} >
          <View style={styles.option}>
            <View style={styles.optionIconContainer}>
              <Text style={styles.optionIcon}>⏰</Text>
            </View>
            <View style={styles.optionDetailsContainer}>
              <Text style={styles.optionText}>Recording duration</Text>
              <Text style={styles.optionDescription}>Stop recording automatically after chosen time or record until stopped manually</Text>
            </View>
            
              {/* <Switch value={recordingDuration} onValueChange={setRecordingDuration} /> */}  
          </View>
          
        </TouchableOpacity>
        
        <Modal 
          visible={isRecordingDurationPopupVisible} 
          animationType="slide" 
          transparent={true}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Select Recording Duration</Text>
              <ScrollView>
                {durations.map((duration) => (
                  <TouchableOpacity 
                    key={duration} 
                    style={styles.durationOption} 
                    onPress={() => handleDurationSelect(duration)}
                  >
                    <View style={styles.radioContainer}>
                      {selectedDuration === duration && <View style={styles.radioIndicator} />}
                    </View>
                    <Text style={styles.durationText}>{duration}</Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>
              <TouchableOpacity style={styles.cancelButton} onPress={handleCancelPress}>
                <Text style={styles.cancelButtonText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        {/* Camera To Use */}
        <TouchableOpacity onPress={handleCameraSelectionPress}>
          <View style={styles.option}>
            <View style={styles.optionIconContainer}>
              <Text style={styles.optionIcon}>📷</Text>
            </View>
            <View style={styles.optionDetailsContainer}>
              <Text style={styles.optionText}>Camera to use</Text>
              <Text style={styles.optionDescription}>Select camera in your device</Text>
            </View>
            {/* Add your desired UI element for camera selection, e.g., a dropdown or picker */}
          </View>
        </TouchableOpacity>

        <Modal
          visible={isCameraSelectionVisible}
          animationType="slide"
          transparent={true}
          >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Camera to use</Text>
              <View style={styles.cameraOptionsContainer}>
                <TouchableOpacity
                  style={[styles.cameraOption, selectedCamera === 'Back camera' && styles.selectedCamera]}
                  onPress={() => handleCameraSelect('Back camera')}
                >
                  <View style={styles.radioContainer}>
                    {selectedCamera === 'Back camera' && <View style={styles.radioIndicator} />}
                  </View>
                  <Text style={styles.cameraOptionText}>Back camera</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.cameraOption, selectedCamera === 'Front camera' && styles.selectedCamera]}
                  onPress={() => handleCameraSelect('Front camera')}
                >
                  <View style={styles.radioContainer}>
                    {selectedCamera === 'Front camera' && <View style={styles.radioIndicator} />}
                  </View>
                  <Text style={styles.cameraOptionText}>Front camera</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity style={styles.cancelButton} onPress={() => setIsCameraSelectionVisible(false)}>
                <Text style={styles.cancelButtonText}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        
        {/* Recording Quality */}
        <TouchableOpacity onPress={handleRecordingQualityPress}>
          <View style={styles.option}>
            <View style={styles.optionIconContainer}>
              <Text style={styles.optionIcon}>📹</Text>
            </View>
            <View style={styles.optionDetailsContainer}>
              <Text style={styles.optionText}>Recording quality</Text>
              <Text style={styles.optionDescription}>Video quality for a selected camera</Text>
            </View>
            {/* Add your desired UI element for quality selection, e.g., a slider or dropdown */}
          </View>
        </TouchableOpacity>

        <Modal visible={isRecordingQualityPopupVisible} animationType="slide" transparent={true} >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Recording quality</Text>
              <ScrollView>
                {resolutions.map((resolution) => (
                  <TouchableOpacity key={resolution.value}
                  style={[styles.resolutionOption, selectedResolution.value === resolution.value && styles.selectedResolution]}
                  onPress={() => handleResolutionSelect(resolution)} >
                    <View style={styles.radioContainer}>
                      {selectedResolution.value === resolution.value && <View style={styles.radioIndicator} />}
                    </View>
                    <Text style={styles.resolutionText}>{resolution.label}</Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>
              <TouchableOpacity style={styles.cancelButton} onPress={() => setIsRecordingQualityPopupVisible(false)}>
                <Text style={styles.cancelButtonText}>CANCEL</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        {/* Hide Notification Bar */}
        <View style={styles.option}>
          <View style={styles.optionIconContainer}>
            <Text style={styles.optionIcon}>🔔</Text>
          </View>
          <View style={styles.optionDetailsContainer}>
            <Text style={styles.optionText}>Hide notification bar icon</Text>
            <Text style={styles.optionDescription}>Do not show a notification bar icon in the notification bar</Text>
          </View>
          <Switch value={showNotificationBarIcon} onValueChange={setShowNotificationBarIcon} />
        </View>
        
        {/* Show Popup Notification */}
        <View style={styles.option}>
          <View style={styles.optionIconContainer}>
            <Text style={styles.optionIcon}>💬</Text>
          </View>
          <View style={styles.optionDetailsContainer}>
            <Text style={styles.optionText}>Show popup notifications</Text>
            <Text style={styles.optionDescription}>Show short popup notifications on recording start and stop</Text>
          </View>
          <Switch value={showPopupNotifications} onValueChange={setShowPopupNotifications} />
        </View>
        

      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Advanced</Text>
        <View style={styles.option}>
          <View style={styles.optionIconContainer}>
            <Text style={styles.optionIcon}>🔄</Text>
          </View>
          <View style={styles.optionDetailsContainer}>
            <Text style={styles.optionText}>Recording rotation</Text>
            <Text style={styles.optionDescription}>Adjust this value if recorded video has a wrong rotation</Text>
          </View>
          {/* Add your desired UI element for rotation adjustment, e.g., a slider or dropdown */}
        </View>
        {/* ... other advanced options ... */}

        <View style={styles.option}>
          <View style={styles.optionIconContainer}>
            <Text style={styles.optionIcon}>🔋</Text>
          </View>
          <View style={styles.optionDetailsContainer}>
            <Text style={styles.optionText}>Low battery</Text>
            <Text style={styles.optionDescription}>Stop recording on low battery level to prevent video corruption</Text>
          </View>
          <Switch value={lowBatteryStopRecording} onValueChange={setLowBatteryStopRecording} />
        </View>

      </View>
      
      {/* Recordings directory */}
      <TouchableOpacity>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Experimental</Text>
          <View style={styles.option}>
            <View style={styles.optionIconContainer}>
              <Text style={styles.optionIcon}>📁</Text>
            </View>
            <View style={styles.optionDetailsContainer}>
              <Text style={styles.optionText}>Recordings directory</Text>
              <Text style={styles.optionDescription}>Videos directory name and path</Text>
            </View>
            {/* Add your desired UI element for directory selection or editing */}
          </View>
        </View>
      </TouchableOpacity>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>About</Text>
        <TouchableOpacity style={styles.option}>
          <View style={styles.optionIconContainer}>
            <Text style={styles.optionIcon}>?</Text>
          </View>
          <View style={styles.optionDetailsContainer}>
            <Text style={styles.optionText}>Frequently asked questions (FAQ)</Text>
            <Text style={styles.optionDescription}>Open web browser with FAQ</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.option}>
          <View style={styles.optionIconContainer}>
            <Text style={styles.optionIcon}>❤️</Text>
          </View>
          <View style={styles.optionDetailsContainer}>
            <Text style={styles.optionText}>Rate application</Text>
            <Text style={styles.optionDescription}>Please let us know if the application works out well for you and take a moment to rate it</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.option}>
          <View style={styles.optionIconContainer}>
            <Text style={styles.optionIcon}>ℹ️</Text>
          </View>
          <View style={styles.optionDetailsContainer}>
            <Text style={styles.optionText}>About and privacy policy</Text>
          </View>
        </TouchableOpacity>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f0', // Background color for better readability
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // Align items horizontally
    padding: 10,
    borderRadius: 5,
    backgroundColor: 'white',
    // ... other styles for option ...
  },
  optionIconContainer: {
    width: 40,
    alignItems: 'center',
  },
  optionIcon: {
    fontSize: 24,
  },
  optionDetailsContainer: {
    flex: 1,
    marginLeft: 10,
  },
  optionText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  optionDescription: {
    fontSize: 14,
    color: 'gray',
  },
  radioContainer: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioIndicator: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'red',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  durationOption: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc', 
  },
  durationText: {
    fontSize: 16,
  },
  cancelButton: {
    backgroundColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  cancelButtonText: {
    color: 'white',
    textAlign: 'center',
  },
  selectedResolution: {
    backgroundColor: '#f0f0f0',
  },
  resolutionText: {
    fontSize: 16,
  },

});