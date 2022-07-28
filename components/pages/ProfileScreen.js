import React from "react";
import {View, Text, StyleSheet, Button, TextInput} from "react-native";
import Colors from "../../constants/Colors";
import { AddBook } from "../AddBook";

export default function ProfileScreen(){
    const [back, setBack] = React.useState(false);
    function onHandlerBack () {
        setBack(true);
    }
    if(back) return <AddBook />

    return(
        <View style={styles.background}>
            <Text style={styles.text}>Profile</Text>
            <Button style={styles.backbutton} title="Back" onPress={()=> onHandlerBack()} />
        </View>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: Colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: Colors.letterPrincipal,
        fontSize: 30,
        fontWeight: 'bold',
        fontFamily: 'InterBold',
    },
    backbutton: {
        width: '80%',
        margin: 10,
        borderRadius: 10,
    }
});
