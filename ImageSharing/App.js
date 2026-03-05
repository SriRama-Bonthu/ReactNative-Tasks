import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image } from 'react-native';
import { Button } from 'react-native-paper';
import TopNotch from './TopNotch';
import * as Imagepicker from 'expo-image-picker';
import * as Sharing from 'expo-sharing'
import {SafeAreaProvider} from 'react-native-safe-area-context'
import { useState } from 'react';

export default function App() {
  const [ImagePath, setImagePath] = useState([]);
  async function ChooseImage(){
    const permisson=await Imagepicker.requestMediaLibraryPermissionsAsync();
    if(!permisson.granted){
      alert('No Permission')
      return;
    }

    const Data=await Imagepicker.launchImageLibraryAsync({
        mediaTypes:'images',
        allowsMultipleSelection:true
    })
    console.log(Data);
    setImagePath((prev)=>[...prev,...Data.assets]);

  }
  const Delete=(index)=>{
    setImagePath(()=>ImagePath.filter((_,idx)=>idx!==index));
  }
  const Choose=async(ele)=>{
    const permision=await Sharing.isAvailableAsync();
    if(!permision){
      alert('Sharing is not available');  
      return;
    }
    await Sharing.shareAsync(ele.uri);
  }
  return (
    <>
    <SafeAreaProvider>
      <TopNotch />
      <View style={{padding:13}}>
      <Button onPress={ChooseImage} icon={'plus'} mode='contained' style={{marginBottom:5}}>Add Images</Button>
      {
        ImagePath.length>0 ?
        <View style={{width:'100%',height:'auto',padding:7,flexDirection:'row',flexWrap:'wrap',gap:10}}>
          {
            ImagePath.map((ele,index)=>{
              return <View key={index}>
                <Image source={{uri:ele.uri}} style={{width:170,height:200,borderRadius:10}}/>
                <View style={{display:'flex',flexDirection:'row',width:'100',alignItems:'center',marginTop:5,justifyContent:'space-evenly'}}>
                <Button onPress={()=>Delete(index)} icon={'delete'}  textColor='#9b0000fa'>Delete</Button>
                <Button onPress={()=>Choose(ele)} icon={'share'}>Share</Button>
                </View>
                </View>
            }
          )
          }
        </View>:<Text style={{padding:20,fontSize:18,fontWeight:'bold'}}>No images Selected</Text>
}
</View>
    </SafeAreaProvider>
    </>
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
