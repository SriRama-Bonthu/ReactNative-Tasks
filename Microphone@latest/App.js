import React, { useState } from "react";
import { View,StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import { Audio } from "expo-av"
export default function App() {
  const [MyRecording, setMyRecording] = useState(null)
  const [Uri, setUri] = useState(null)
  const Start = async () => {
    try {
      const permission = await Audio.requestPermissionsAsync();
      // status.granted=true
      console.log(permission)
      
      if (permission.status !== "granted") {
        alert("Microphone is not allowed")
        return;
      }
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true
      })

      const { recording } = await Audio.Recording.createAsync(
        Audio.RecordingOptionsPresets.HIGH_QUALITY
      )
      setMyRecording(recording);
    }
    catch (err) {
      console.log(err)
    }
  }
  const Stop = async () => {
    console.log(MyRecording)
    await MyRecording.stopAndUnloadAsync();
    console.log(MyRecording.getURI())
    setUri(MyRecording.getURI())
  }

  const Play = async () => {
    
    try {
      console.log(Uri)
      const { sound } = await Audio.Sound.createAsync({ uri : Uri })
      console.log(sound);
      await sound.playAsync()
    }
    catch (err) {
      console.log(err)
    }
  }
  return (
    <View style={styles.container}>
      <Button onPress={Start}>Start Recording</Button>
      <Button onPress={Stop}>Stop Recording</Button>
      <Button onPress={Play}>Play Recording</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
