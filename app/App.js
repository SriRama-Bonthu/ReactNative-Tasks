import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity,Button,Image, useColorScheme,TextInput,StatusBar } from "react-native";
import {SafeAreaView,SafeAreaProvider, useSafeAreaInsets} from 'react-native-safe-area-context';
import Main from "./Main";
export default function App() {
  return (
    <SafeAreaProvider>
      <Main />
</SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "whitesmoke",
    height:'100%',
    flexDirection: "column",
    alignItems: "center",
    paddingTop:50,
    gap:20,
    
  },
  input:{
    width:200,
    height:40,
    borderColor:'gray',
    borderWidth:1,
    paddingLeft:10,
  },
  navbar:{
    height:70,
    width:'100%',
    // paddingTop:useSafeAreaInsets().top,
    backgroundColor:'gray',
    flexDirection:'row',
    paddingLeft:20,
    alignItems:'center',
    justifyContent:'space-between',
    text:{
      color:'white',
      fontSize:20,
      fontWeight:'bold',
    },
    menu:{
      color:'white',
      display:'flex',
      flexDirection:'column',
      fontWeight:'bold',
    }
  },

  Happy:{
    width:'100%',
    backgroundColor: 'orange',
    color:'white',
    fontSize:30,
    // alignContent:'center',
    // justifyContent:'center',
    // display:'flex',
    textAlign:'center',
    fontFamily:'Arial',
    fontWeight:'bold',
  },
  Republic:{
    width:'100%',
    backgroundColor: 'white',
    textAlign:'center',
    color:'blue',
    fontWeight:'bold',
    fontSize:30,
  },
  Day:{
    backgroundColor: 'green',
    width:'100%',
    textAlign:'center',
    color:'white',
    fontWeight:'bold',
    fontSize:30,
  }
});
