import React from "react";
import {View, Text, StyleSheet, Button, TextInput, Image, ScrollView} from "react-native";
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
            <View style={styles.profileinfocontainer}>
                <Image style={styles.profilepic} source={require('../../assets/icons/profile.png')} />
                <Text style={styles.username}>Username</Text>
                <Text style={styles.numbers}>Reviews</Text>
                <Text style={styles.numbers}>Likes</Text>
            </View>
            <View style={styles.postsectionprofile}>
                <ScrollView>

                </ScrollView>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: Colors.primary,
    },
    username: {
        color: Colors.letterPrincipal,
        fontSize: 25,
        fontWeight: 'bold',
        fontFamily: 'InterBold',
        marginTop: 10,
        marginLeft: 10,
    },
    profilepic: {
        width: 70,
        height: 70,
        borderRadius: 50,
        margin: 10,
    },
    numbers: {
        color: Colors.letterPrincipal,
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'InterBold',
        marginTop: 10,
        marginLeft: 10,
    },
    profileinfocontainer: {
        flexDirection: 'row',
        margin: 10,
        backgroundColor: "#fff",
        borderRadius: 10,
        alignContent: 'center',
        alignItems: 'center',
    },
    postsectionprofile: {
        flex: 1,
        backgroundColor: "#fff",
        borderRadius: 10,
        margin: 10,
        padding: 10,
    }
});
