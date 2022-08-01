import React from "react";
import {View, Text, StyleSheet, Button, TouchableOpacity, ScrollView, TouchableHighlight, TextInput} from "react-native";
import Colors from "../../constants/Colors";

const PostScreen = ({navigation}) => {
    return (
        <View style={styles.background}>
            <View styles={styles.container}>
                <Text style={styles.text}>Title</Text>
                <TextInput style={styles.input} placeholder="Title" />
                <Text style={styles.text}>Description</Text>
                <TextInput style={styles.input} placeholder="Description" />
                <Text style={styles.text}>Author</Text>
                <TextInput style={styles.input} placeholder="Author" />
                <Button style={styles.backbutton} title="Click Here" onPress={()=> navigation.navigate("PostScreen")} />



            </View>
        </View>
    );
}
export default PostScreen;

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