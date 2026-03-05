import { Text,Searchbar, } from "react-native-paper";
import { View,StyleSheet } from "react-native";
import { StatusBar } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
export default function TopNotch(){
    const insets=useSafeAreaInsets();
    return(
        <>
        <StatusBar barStyle={'light-content'} backgroundColor={'black'} />
        <View style={[{padding:insets.top},{backgroundColor:'black'}]}/>
        </>
    )
}
