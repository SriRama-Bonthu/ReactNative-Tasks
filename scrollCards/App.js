import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {SafeAreaProvider,useSafeAreaInsets} from 'react-native-safe-area-context';
import { FlatList } from 'react-native';
import Demo from './Demo';


export default function App() {
  return (
    <>
    <SafeAreaProvider>
    <Demo />
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
  parent_view:{
    width:"100%"
  }
});
