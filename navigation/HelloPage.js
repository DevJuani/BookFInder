import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../components/pages/HomeScreen";
import SearchScreen from "../components/pages/SearchScreen";
import PostScreen from "../components/pages/PostScreen";
import SettingsScreen from "../components/pages/SettingsScreen";
import ProfileScreen from "../components/pages/ProfileScreen";

const Stack = createNativeStackNavigator();

const HelloPage = () => {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Search" component={SearchScreen} />
            <Stack.Screen name="Post" component={PostScreen} />
            <Stack.Screen name="Settings" component={SettingsScreen} />
            <Stack.Screen name="Profile" component={ProfileScreen} />
        </Stack.Navigator>
    )
}
export default HelloPage;