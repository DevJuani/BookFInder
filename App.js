import { Button, StyleSheet, Text, View, TextInput } from 'react-native';
import { AddBook } from './components/AddBook';
import { NavBar } from './components/navbar/NavBar';
import Colors from './constants/Colors';

import { isLoading, useFonts } from 'expo-font';
import AppLoading from 'expo';



export default function App() {

    const [loaded] = useFonts({
      "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
      "Inter-Bold": require("./assets/fonts/Inter-Bold.ttf"),
    });
    if(!loaded) {
      return <AppLoading />;
    }

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
