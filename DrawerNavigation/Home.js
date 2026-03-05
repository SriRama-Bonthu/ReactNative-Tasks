import { Text,View,Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Home(){
    const Navigator=useNavigation();
    return(
        <>
            <Text>Home Page</Text>
            <Button 
                onPress={()=>Navigator.navigate("Settings")}
            >Move to Settings</Button>
        </>
    )
}