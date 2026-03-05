import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity,Button,Image, useColorScheme,TextInput,StatusBar } from "react-native";
import {SafeAreaView,SafeAreaProvider, useSafeAreaInsets} from 'react-native-safe-area-context';
function MyNavbar() {
  const [name,setName] = useState("");
  const insets=useSafeAreaInsets();
  return (
    <>
    <StatusBar barStyle="light-content"  />
    <View style={[{paddingTop: insets.top} ,{backgroundColor:'black'}]} />
          <View style={styles.navbar}>
          <Text style={styles.navbartext}>MyApp</Text> 
          </View>
      </>
  );
}
export default MyNavbar;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "whitesmoke",
    flexDirection: "column",
    
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
  },
  navbartext:{
    color:'white',
    fontSize:24,
    fontWeight:'bold',
  },
});
