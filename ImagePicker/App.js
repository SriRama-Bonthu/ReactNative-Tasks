import react, { useState } from "react";
import { View,Image,Text } from "react-native";
import { Button } from "react-native-paper";
import * as Imagepicker from 'expo-image-picker';
import { SafeAreaProvider } from "react-native-safe-area-context";
import TopNotch from "./TopNotch"; 
const App = () =>{
    const [ImagePath , setImagePath] = useState(null)
    const LaunchGallery = async() =>{
        const Response = await Imagepicker.requestMediaLibraryPermissionsAsync();
        if(!Response.granted){
            alert('Please Give Access to Media')
            return;
        }
        const Data = await Imagepicker.launchImageLibraryAsync({
            mediaTypes:'images',
            allowsMultipleSelection:true,
            // allowsEditing:true,
            quality:1,
            selectionLimit:3
        })
        setImagePath(Data.assets)
        console.log(Data.assets)
    }
    return(
        <>
        <SafeAreaProvider>
            <TopNotch />
            <View style={[{padding:30}]}>
            <Button mode="contained" onPress={LaunchGallery}
            style={[{marginBottom:10}]}
            >
                    Tap Me!!!
            </Button>
            {
                ImagePath
                ? <View style={[{overflow:'scroll'},{display:"flex"},{padding:5},{borderColor:'black'},{borderWidth:1},{width:'100%'}]}>
                    {
                        ImagePath.map((ele,index)=>{
                            
                            return <Image 
                                key={index}
                                source={{uri:ele.uri}} 
                                style={{width:200,height:200,margin:5}}
                            />
                        })
                    }
                </View>
                : <Text>No Images selected</Text>
            }
            </View>
            </SafeAreaProvider>
        </>
    )
}
export default App;