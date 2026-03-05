import { Text,View,Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Contact(){
    const Navigator=useNavigation();
    return(
        <>
            <Text>Contact Page</Text>
            <Button 
                onPress={()=>Navigator.navigate("Home")}
            >Move to Home</Button>
        </>
    )
}