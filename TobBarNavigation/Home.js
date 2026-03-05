import {React} from "react";
import { StyleSheet } from "react-native";
import { Button, Text } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
export default function Home(){
    const Navigation=useNavigation();
    return(
        <>
            <Text style={styles.text}>
                Home
            </Text>
            <Button 
            onPress={()=>{
                Navigation.navigate('Contact')
            }}
            >Move to Contact Page</Button>
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