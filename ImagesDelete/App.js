import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image } from 'react-native';
import * as Imagepicker from 'expo-image-picker';
import { Button } from 'react-native-paper';
import { useState } from 'react';
import  {SafeAreaProvider,useSafeAreaInsets} from 'react-native-safe-area-context'


export default function App() {
  const [ImagePath,setImagePath]=useState([]);
  const LaunchGallery=async()=>{
    const Response = await Imagepicker.requestMediaLibraryPermissionsAsync();
            if(!Response.granted){
                alert('Please Give Access to Media')
                return;
            }
            const Data = await Imagepicker.launchImageLibraryAsync({
                mediaTypes:"images",
                allowsMultipleSelection:true,
                quality:1,
                selectionLimit:5
            })
            setImagePath((prev)=>[...prev,...Data.assets])
            console.log(Data);
  }
  const DelImage=(idx)=>{
    setImagePath(()=>ImagePath.filter((_,index)=>index!==idx));
  }
  return (
    <>
    <View style={{marginTop:50}}></View>
    <Button 
      mode='contained'
      onPress={LaunchGallery}
    >
      Add Image
    </Button>
    {/* <View 
      style={[{width:"100%"},{height:500},{display:"flex"},{flexDirection:'row'},{flexWrap:'wrap'}]}
    > */} 
      {
        ImagePath ?
        <View style={[{width:"100%"},{height:'100%'},{display:"flex"},{flexDirection:'row'},{flexWrap:'wrap'},{padding:10}]}>
        {
          ImagePath.map((ele,index)=>{
              return (
                <>
              <View>
              <Image 
                key={index}
                source={{uri:ele.uri}}
                style={{width:180,height:200}}
                 />
              <Button onPress={()=>DelImage(index)}  icon={'delete'}> Delete</Button>
              </View>
            </>  
            )
          })
        }
        </View>:
        <Text>No Images Selected</Text>
      }

    {/* </View> */}
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
