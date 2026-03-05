import { StatusBar } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function TopNotch(){
    const insets=useSafeAreaInsets();
    return(
        <>
            <StatusBar barStyle={'light-content'}></StatusBar>
            <View style={[{padding:insets.top},{backgroundColor:"#212b44"}]}></View>
        </>
    )
}