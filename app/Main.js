import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity,Button,Image, useColorScheme,TextInput,StatusBar } from "react-native";
import {SafeAreaView,SafeAreaProvider, useSafeAreaInsets} from 'react-native-safe-area-context';
import Page1 from "./page1";
export default function Main() {
  const [name,setName] = useState("");
  const insets=useSafeAreaInsets();
  return (
      <SafeAreaProvider>
    <StatusBar barStyle="dark-content"  />
    <View style={{paddingTop: insets.top ,backgroundColor:'silver'}} />
        <View style={styles.navbar}>
          <Text style={styles.navbar.text}>MyApp</Text>
          <View style={styles.navbar.menu}>
          </View>
        </View>
        <View style={styles.container}>
          <TextInput placeholder="Enter name" style={styles.input} onChangeText={text => setName(text) } value={name}/>

        {/* <Text style={styles.Happy}>Happy</Text>
        <Text style={styles.Republic}>Republic</Text>
        <Text style={styles.Day}>Day</Text> */}
        <Button title="Click Me" onPress={() => {alert("Hello "+name+"😍");setName("")}} />
          {/* {
          count%2==0?<Text>Click button to see image</Text>:
        <Image
          source={{uri:'https://w1.pngwing.com/pngs/78/776/png-transparent-india-independence-day-indian-flag-india-republic-day-india-flag-patriotic-flag-of-india-indian-independence-movement-indian-independence-day-cartoon-thumbnail.png'}}
          style={{width:300, height:350}}
        />
          } */}
        </View>
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
