import { View } from "react-native";
import {SafeAreaProvider,useSafeAreaInsets} from 'react-native-safe-area-context';
export default function TopNotch(){
    const insets=useSafeAreaInsets();
    return(
        <>
        <View style={{paddingTop:insets.top}}></View>
        </>
    )
}