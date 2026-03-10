import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';
import * as LocalAuthentication from 'expo-local-authentication'

export default function App() {
  const [demo,setDemo]=useState(false);
const Open=async()=>{
  const status=await LocalAuthentication.hasHardwareAsync();
  console.log(status)
  if(!status){
    return;
  }
  const enrolled=await LocalAuthentication.isEnrolledAsync();
  console.log(enrolled)
  const authenticate=await LocalAuthentication.authenticateAsync();
  console.log(authenticate)
  if(authenticate.success){
    setDemo(true)
  }
}

  return (
    <View style={styles.container}>
      <Text style={{fontSize:20}}>App is locked.Use Fingerprint</Text>
      <Button onPress={Open} mode='contained'>Fingerprint</Button>
      {
        demo ?
        <Text style={{fontSize:18}}>Fingerprint accepted✅</Text>:<Text></Text>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: '#fff',
    padding:20,
    marginTop:20,
    gap:20
  },
});
