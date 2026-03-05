import { Text,View } from "react-native";
import { StatusBar } from "react-native";
import {SafeAreaProvider,useSafeAreaInsets} from 'react-native-safe-area-context'
export default function TopNotch(){
    const insets=useSafeAreaInsets();
    return(
        <>
        <View style={[{padding:insets.bottom},{backgroundColor:'brown'}]}></View>
        <StatusBar barStyle={"dark-content"}></StatusBar>
        </>
    )
}