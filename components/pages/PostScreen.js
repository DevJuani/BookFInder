import React from "react";
import {View, Text, StyleSheet, Button} from "react-native";
import Colors from "../../constants/Colors";

const PostScreen = ({navigation}) => {
    return (
        <View style={styles.background}>
            <Text style={styles.text}>Post</Text>
            <Button style={styles.backbutton} title="Click Here" onPress={()=> alert('Button clicked!')} />
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