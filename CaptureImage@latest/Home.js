import { React, useState } from "react";
import { View,Text,StyleSheet,Image } from "react-native";
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useCameraPermissions,CameraView} from 'expo-camera'
import { Button } from "react-native-paper";
import * as Sharing from 'expo-sharing';
import * as ImagePicker from 'expo-image-picker'



export default function Home(){
    const insets=useSafeAreaInsets();
    const [MyImages,setImages]=new useState([]);
    const [Frames,setFrames]=new useState();
    const [permission,RequestCamAccess]=useCameraPermissions();
    if(permission){
        if(!permission.granted){
            console.log(permission);
            return(
                <Button onPress={()=>RequestCamAccess(true)}>RequestCamAccess</Button>
            )
        }
    }
    const Capture=async()=>{
        const Picture=await Frames.takePictureAsync();
        // console.log(Picture);
        console.log(Picture.uri);
        setImages((prev)=>[...prev,Picture.uri]);
        console.log(MyImages);
    }

    const Delete=async(idx)=>{
        setImages(()=>MyImages.filter((_,index)=>idx!==index));
    }
    const Choose=async(ele)=>{
        const permision=await Sharing.isAvailableAsync();
        if(!permision){
          alert('Sharing is not available');  
          return;
        }
        await Sharing.shareAsync(ele);
    }
    const UploadImage=async()=>{
        const permisson=await ImagePicker.requestMediaLibraryPermissionsAsync();
            if(!permisson.granted){
              alert('No Permission')
              return;
            }
        
            const Data=await ImagePicker.launchImageLibraryAsync({
                mediaTypes:'images',
                // allowsMultipleSelection:true
            })
            // console.log(Data.assets[0].uri);
            if(Data.assets[0].uri){
            setImages((prev)=>[...prev,Data.assets[0].uri]);
            }

    }


    return(
        <>
        <View style={{paddingTop:insets.top}}></View>
        <CameraView 
            style={{width:300,height:250}}
            ref={(ref)=>setFrames(ref)}
        />
        <Button onPress={UploadImage}>UploadImage</Button>
        <Button onPress={Capture}>TakePicture</Button>
        {
            MyImages.length>0 ?
            <View style={{width:'100%',heigth:200,flexDirection:"row",flexWrap:'wrap'}}>
            {
                MyImages.map((ele,index)=>{
                    return  <View key={index}>
                <Image source={{uri:ele}} style={{width:170,height:200,borderRadius:10}}/>
                <View style={{display:'flex',flexDirection:'row',width:'100',alignItems:'center',marginTop:5,justifyContent:'space-evenly'}}>
                <Button onPress={()=>Delete(index)} icon={'delete'}  textColor='#9b0000fa'>Delete</Button>
                <Button onPress={()=>Choose(ele)} icon={'share'}>Share</Button>
                </View>
                </View>
                    
                })
            }
            </View>:<Text>No images</Text>
        }
        </>
    )

}