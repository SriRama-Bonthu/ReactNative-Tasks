import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "react-native";
import TabBar from "./TabBar";
export default function App(){
    return(
        <>
            <SafeAreaProvider>
                <TabBar />
            </SafeAreaProvider>
        </>
    )
}