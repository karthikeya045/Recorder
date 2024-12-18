import React from 'react';
import { View, Button, StyleSheet, Text, Switch, TouchableOpacity, ScrollView, Modal } from 'react-native';

export default function HVCSettings() {

  const HVCSettings = () => {
    const [recordingDuration, setRecordingDuration] = useState(true);
    const [showNotificationBarIcon, setShowNotificationBarIcon] = useState(false);
    const [showPopupNotifications, setShowPopupNotifications] = useState(true);
    const [lowBatteryStopRecording, setLowBatteryStopRecording] = useState(true);
    const [isRecordingDurationPopupVisible, setIsRecordingDurationPopupVisible] = useState(false);
    
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Recordings</Text>
        <TouchableOpacity style={styles.option}>
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

        <TouchableOpacity onPress={() => setIsRecordingDurationPopupVisible(true)} >
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
        
        

        <TouchableOpacity >
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

        <TouchableOpacity >
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

        <TouchableOpacity >
          <View style={styles.option}>
            <View style={styles.optionIconContainer}>
              <Text style={styles.optionIcon}>🔔</Text>
            </View>
            <View style={styles.optionDetailsContainer}>
              <Text style={styles.optionText}>Hide notification bar icon</Text>
              <Text style={styles.optionDescription}>Do not show a notification bar icon in the notification bar</Text>
            </View>
            {/* <Switch value={showNotificationBarIcon} onValueChange={setShowNotificationBarIcon} /> */}
          </View>
        </TouchableOpacity>

        <TouchableOpacity >
          <View style={styles.option}>
            <View style={styles.optionIconContainer}>
              <Text style={styles.optionIcon}>💬</Text>
            </View>
            <View style={styles.optionDetailsContainer}>
              <Text style={styles.optionText}>Show popup notifications</Text>
              <Text style={styles.optionDescription}>Show short popup notifications on recording start and stop</Text>
            </View>
            {/* <Switch value={showPopupNotifications} onValueChange={setShowPopupNotifications} /> */}
          </View>
        </TouchableOpacity>

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
          {/* <Switch value={lowBatteryStopRecording} onValueChange={setLowBatteryStopRecording} /> */}
        </View>

      </View>

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
    padding: 10,
    borderRadius: 5,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
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
});