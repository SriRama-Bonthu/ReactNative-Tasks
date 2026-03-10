import { StatusBar } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Home from './Home';

export default function App() {
  return (
    <>
    <Text>App</Text>
    <SafeAreaProvider>
      <Home />
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
});
