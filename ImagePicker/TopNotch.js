import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { StatusBar } from "react-native";

export default function TopNotch(){
    const insets=useSafeAreaInsets();
    return(
        <>
        <View style={[{paddingTop:insets.top},{backgroundColor:'black'}]}></View>
        <StatusBar barStyle={'light-content'}></StatusBar>
        </>
    )

}