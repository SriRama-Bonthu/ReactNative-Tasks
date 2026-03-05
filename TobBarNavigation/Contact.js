import {React} from "react";
import { StyleSheet } from "react-native";
import { Button, Text } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
export default function Contact(){
    const Navigation=useNavigation();
    return(
        <>
            <Text style={styles.text}>
                Contact
            </Text>
            <Button 
            onPress={()=>{
                Navigation.navigate('Home')
            }}
            >Move to Home Page</Button>
        </>
    )

}
const styles=StyleSheet.create({
    text:{
        marginTop:30,
        textAlign:'center',
        fontSize:30,
        fontWeight:'bold'
    }
})