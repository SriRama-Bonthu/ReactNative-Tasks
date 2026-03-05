import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {SafeAreaProvider,useSafeAreaInsets} from 'react-native-safe-area-context'
import Home from './Home';
import Contact from './Contact';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Icon } from 'react-native-paper';

export default function TabBar() {
  const TopBar=createMaterialTopTabNavigator();
  const insets=useSafeAreaInsets();
  return (
    <>
      <NavigationContainer>
        <TopBar.Navigator
        screenOptions={({route})=>({
          tabBarIcon:({focused,color})=>{
            let iconname;
            if(route.name=='Home'){
              iconname= focused ? 'home':'home-outline'
            }
            if(route.name=='Contact'){
              iconname=focused ? 'cog':'cog-outline'
            }
            return <Icon source={iconname} size={26} color={color} />
          },
          tabBarStyle:{
            marginTop:insets.top
          },
          tabBarActiveTintColor:'white',
          tabBarInactiveTintColor:'gray',
          tabBarIndicatorStyle:{
          height:'100%',
          backgroundColor: '#2563EB'
          }
        })}
        >
          <TopBar.Screen name='Home' component={Home}/>
          <TopBar.Screen name='Contact' component={Contact}/>
        </TopBar.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
