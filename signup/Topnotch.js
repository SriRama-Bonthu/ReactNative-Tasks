import { Text,View,StyleSheet} from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider,useSafeAreaInsets } from "react-native-safe-area-context";
function Topnotch(){
    const insets=useSafeAreaInsets();
    return(
        <>
        <View style={[{padding:insets.bottom},{backgroundColor:'#767ca1c1'}]}></View>
        <StatusBar style="dark"></StatusBar>
        </>
    );
}
export default Topnotch;