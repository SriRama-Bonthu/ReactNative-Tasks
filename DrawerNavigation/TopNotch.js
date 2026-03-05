import { StatusBar } from "react-native";
import { View } from "react-native";
import { useSafeAreaInsets,SafeAreaProvider } from "react-native-safe-area-context";
export default function TopNotch(){
    const insets=useSafeAreaInsets();
    return(
        <>
            <StatusBar barStyle={'light-content'} />
            <View style={[{paddingTop:insets.top},{backgroundColor:'black'}]}></View>
        </>
    )
}