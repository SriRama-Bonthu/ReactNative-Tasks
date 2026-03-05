import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text,View,Image } from "react-native";
import { SafeAreaProvider,useSafeAreaInsets } from "react-native-safe-area-context";
import { FlatList,StyleSheet } from "react-native";
import gmail from './assets/gmail.png';
import youtube from './assets/youtube.webp'
import favicon from './assets/favicon.png'
import google from './assets/google_logo.webp'
import microsoft from './assets/microsoft.png'
import instagram from './assets/insta.webp'


function Demo(){
    const insets=useSafeAreaInsets();
      const MyData=[
        {
          name:"youtube",
          logo:youtube,
        },
        {
          name:"gmail",
          logo:gmail,
        },
        {
          name:"Instagram",
          logo:instagram
        },
        {
          name:"Twitter",
          logo:youtube
        },
        {
          name:"Google",
          logo:google
        },
        {
          name:"Microsoft",
          logo:microsoft
        },
        {
          name:"Facebook",
        logo:youtube
        },
        {
          name:"amazon",
        logo:gmail
        },
        {
          name:"flipkart",
        logo:google
        },
        {
          name:"myntra",
        logo:microsoft
        },
        {
          name:"meesho",
        logo:instagram
        },
        {
          name:"stable money",
        logo:youtube
        },
        {
          name:"phonepe",
        logo:instagram
        },
        {
          name:"paytm",
        logo:gmail
        },
        {
          name:"Netfix",
        logo:microsoft
        },
        {
          name:"grow",
        logo:google
        },
        {
            name:'Angel One',
            logo:youtube
        }


      ]
    return(
        <>
        <View style={[{padding:insets.top},{backgroundColor:'silver'}]}></View>
        <StatusBar barStyle="light-content" /> 
        {/* <View style={styles.container}> */}
         <FlatList
              data={MyData}
              renderItem={({item}) => 
              <View style={styles.parent_view}>
                <View style={styles.image_view} ><Image style={styles.orig_img} source={item.logo}></Image></View>
                <View style={styles.child_view}>
                  <Text style={styles.textName}>{item.name}</Text>
                  {/* <Text >{item.place}</Text> */}
                </View>
              </View>
              }
            />
            {/* </View> */}
        </>
    )
}
export default Demo;
const styles=StyleSheet.create(
    {
        container:{
            width:"100%",
            heigth:"100%",
            gap:10,
            display:"flex",
            flexDirection:'row',
            backgroundColor:'gray'
        },
        parent_view:{
            width:"100%",
            margin:5,
            backgroundColor:'gray',
            // display:'flex',
            flexDirection:'row',
            shadowColor:"black",
            shadowOpacity:10,
            shadowColor:"black",
        },
        orig_img:{
            width:"90",
            height:"50",
        },
        image_view:{
            width:"35%",
            alignItems:'center',
            justifyContent:'center',
            backgroundColor:'white'
        },
        child_view:{
            padding:10,
        },
        textName:{
            fontSize:18,
            fontWeight:'bold',
            color:'white',
            fontFamily:"Sans-serif"
        },
        // textPlace:{
        //     fontSize:20
        // }
    }
)