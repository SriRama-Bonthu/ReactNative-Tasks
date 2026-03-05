import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TopNotch from './TopNotch';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Cards from './Cards';

export default function App() {
  return (
    <>
      <SafeAreaProvider>
        <TopNotch />
        {/* <View styles={styles.mainpage}> */}
        <Cards />
        {/* </View> */}
      </SafeAreaProvider>
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
  mainpage:{
    padding:50,
    margin:100,
  }
});
