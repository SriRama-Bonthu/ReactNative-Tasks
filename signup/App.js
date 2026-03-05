import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View,ImageBackground } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Topnotch from './Topnotch';
import { ActivityIndicator,Button,TextInput,HelperText,RadioButton,ToggleButton,Checkbox } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import backpaper from './assets/backpaper.webp';

export default function App() {
  const [email,setEmail]=useState(null);
  const [password,setPassword]=useState(null);
  const [iserrormail,setiserrormail]=useState(false);
  const [errorpasswd,seterrorpasswd]=useState(false);

  const mailLoad=(data)=>{
    setEmail(data);
    setiserrormail(data.length==0 || data.includes('@'));
  }

  const passLoad=(data)=>{
    setPassword(data);
    seterrorpasswd(data.length==0 || (data.length>=8 && (data.includes('!') || data.includes('@') || data.includes('#') || data.includes('$') || data.includes('%') || data.includes('^') || data.includes('&') || data.includes('*'))));
  }
  return (
    <>
    <SafeAreaProvider>
      <Topnotch />
      <View style={styles.container}>

        <ImageBackground source={backpaper} style={{width:'100%',height:'100%',position:'absolute',left:0,top:0}} />
        <View style={styles.card}>
          
          <LinearGradient
            colors={['#ededff', '#dad4f0', '#8d8db7']}
            style={{ position: 'absolute', left: 0, right: 0, top: 0,bottom:0, height: '100%', borderRadius: 20 }}
          />
          <View style={styles.heading}>
            
            <Text style={styles.headingText}>Sign Up</Text>
          </View>

          <View>
              <TextInput 
                label={"Email"}
                placeholder='Enter Email'
                mode='outlined'
                onChangeText={(data)=> mailLoad(data) }
                error={!iserrormail}
              />
              <HelperText 
                visible={!iserrormail}
              >Enter Valid Email</HelperText>
          </View>

          <View>
            <TextInput 
                label={"password"}
                placeholder='Enter Password'
                mode='outlined'
                onChangeText={(data)=> passLoad(data)}
                error={!errorpasswd}
              />
              <HelperText
                visible={!errorpasswd}
              >
                Password must contains 8 characters with one special character !@#$%^&*
              </HelperText>
          </View>

          {/* <View> */}
            <Button 
            height={50}
            fontSize={20}
            fontWeight='bold'
            buttonColor='#180059b7'
            textColor='white'
            style={{style:'solid',marginTop:20}}
            >Sign Up</Button>
          {/* </View> */}
        </View>

      </View>
    </SafeAreaProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'linear-gradient(to bottom, #ff3300, #ff6f00)',
    backgroundImage: `url(${backpaper})`,
    // backgroundColor:'#ffffff',
    width:"100%",
    height:"100%",
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:"center"
  },
  card:{
    boxShadow:'2px 6px 5px rgba(0, 0, 0, 0.28)',
    borderRadius:20,
    width:"90%",
    height:400,
    // justifyContent:'space-around',
    gap:0,
    backgroundColor:'white',
    paddingHorizontal:20,

  },
  heading: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  headingText:{
    fontSize:28,
    fontWeight:'bold',
    color:'#2b0a89e9'
  },
  buttonText:{
    fontSize:20,
    fontWeight:'bold',
    color:'white'
  }
  
});
