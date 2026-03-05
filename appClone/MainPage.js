import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,TextInput,Button,TouchableOpacity} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
function MainPage(){
    return(
        <>
                <View style={Styles.container}>
            <View style={Styles.heading}>
                <Text style={Styles.headingText}>Welcome Back👋</Text>
                <Text style={Styles.headingText}>Login to Account</Text>
            </View>
            <View style={Styles.InputBoxes}>
                <TextInput style={Styles.TextInput} placeholder='Enter email'/>
                <TextInput style={Styles.TextInput} placeholder='Enter Password' />
                </View>
                <TouchableOpacity>
                <View style={{backgroundColor:'gray',padding:15,alignItems:'center',borderRadius:40}}>
                    <Text style={{color:'white',fontWeight:'bold',fontSize:16}}>Login</Text>
                </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={Styles.forgotPassword}>Forgot Password?</Text>
                </TouchableOpacity>
                <Text style={Styles.orContinue}>----------Or Continue With-----------</Text>
            </View>
        </>
    )
}
export default MainPage;

const Styles=StyleSheet.create({
    container:{
        width:'100%',
        padding:15,
        display:'flex',
        flexDirection:'column',
        gap:30
    },
    LoginBtn:{
        borderRadius:40,
        color:'white',
    },
    heading:{
        gap:10,
        backgroundColor:'gray',
        padding:10,
        borderRadius:30,
        alignItems:'center',
        justifyContent:'center'
    },
    headingText:{
        color:'white',
        fontSize:20,
        fontWeight:'bold'

    },
    TextInput:{
        borderWidth:3,
        borderColor:'gray',
        padding:15,
        borderRadius:30,
    },
    InputBoxes:{
        gap:30,

    },
    forgotPassword:{
        color:'blue',
        textAlign:'right',
    },
    orContinue:{
        textAlign:'center',
        color:'gray',
        fontWeight:'100',
        color:'gray',
        opacity:0.5
    }

})