import React from "react";
import {View, Text, StyleSheet, Button, TouchableOpacity, ScrollView, TouchableHighlight} from "react-native";
import Colors from "../../constants/Colors";

const SettingsScreen = ({navigation}, props) => {
    return (
        <View style={styles.background}>
            <ScrollView>
            
                    <View>
                        <Text style={styles.text}>Settings</Text>
                    </View>
                
            </ScrollView>
        </View>
    );
}
export default SettingsScreen;

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: Colors.primary,
        padding: 10,
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