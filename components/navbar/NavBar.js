import { Button, StyleSheet, Text, View, TextInput, Alert } from "react-native";
import {useState} from "react";
import { AddBook } from "../AddBook";
import Profile from "../pages/Profile";


export function NavBar() {
    const [loaded, setLoaded] = useState(false);
    function onPressProfile() {
        setLoaded(true);
    }
    if(!loaded) return Profile
    
    return (
        <View style= {styles.container}>
            <Button style={styles.navbutton} title="Profile" onPress={onPressProfile}/>
            <Button style={styles.navbutton} title="Home" onPress={() => console.log("Home")}/>
            <Button style={styles.navbutton} title="Settings" onPress={() => console.log("Settings")}/>
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
        backgroundColor: 'red',
    },
    navbutton: {
        width: '80%',
        margin: 10,
        borderRadius: 10,
    }
});
