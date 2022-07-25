import { Button, StyleSheet, Text, View, TextInput } from 'react-native';
import { AddBook } from './components/AddBook';
import { NavBar } from './components/navbar/NavBar';
import Colors from './constants/Colors';

import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';



export default function App() {

    const [loaded] = useFonts({
      InterRegular: require("./assets/fonts/InterRegular.ttf"),
      InterBold: require("./assets/fonts/InterBold.ttf"),
    });
    if (!loaded) return <AppLoading />; 

  return (
    <View style={styles.container}>
      <AddBook />
      <NavBar />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.primary,
  },
});
