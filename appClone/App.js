import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import MyNavbar from './MyNavbar';
import MainPage from './MainPage';

export default function App() {
  return (
    <>
    <SafeAreaProvider >
          <MyNavbar />
          <View style={styles.container}>
          <MainPage />
          </View>
          </SafeAreaProvider>
          </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding:5,
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'whitesmoke',
  },

});
