import { Button, StyleSheet, Text, View, TextInput } from 'react-native';
import { AddBook } from './components/AddBook';

export default function App() {
  return (
    <View style={styles.container}>
      <AddBook />
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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#CBEFB6',
  },
});
