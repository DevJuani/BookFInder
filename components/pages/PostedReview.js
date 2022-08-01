import React from "react";
import {View, Text, StyleSheet, Button, TouchableOpacity, ScrollView, TouchableHighlight, TextInput} from "react-native";
import Colors from "../../constants/Colors";

const PostScreen = ({navigation}) => {
    return (
        <View>
            <Image style={styles.image} source={require('../../assets/icons/profile.png')} />
            <Text style={styles.text}>Title</Text>
            <Text>Un titulo</Text>
            <Text style={styles.text}>Description</Text>
            <Text>Una descripcion</Text>
            <Text style={styles.text}>Author</Text>
            <Text>Un autor</Text>
            
        </View>
    )

}