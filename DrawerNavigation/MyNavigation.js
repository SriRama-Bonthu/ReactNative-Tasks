import { Text } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createDrawerNavigator } from "@react-navigation/drawer";
import {NavigationContainer} from '@react-navigation/native';
import Home from "./Home";
import Contact from "./Contact";
import TopNotch from "./TopNotch";

export default function MyNavigation(){
    const nav=createDrawerNavigator();
    return(
        <>
        {/* <SafeAreaProvider>
            <TopNotch /> */}
        <NavigationContainer>
            <nav.Navigator
                screenOptions={{
                    drawerActiveTintColor:'red',
                    drawerInactiveTintColor:'black',
                    drawerStyle:{
                        width:50
                    }
                }
                }
            >
                <nav.Screen name='Home' component={Home} />
                <nav.Screen name='Contact' component={Contact} />
            </nav.Navigator>
        </NavigationContainer>
        {/* </SafeAreaProvider> */}
        </>
    )
}