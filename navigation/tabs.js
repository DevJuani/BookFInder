import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from "../components/pages/HomeScreen";
import SearchScreen from "../components/pages/SearchScreen";
import PostScreen from "../components/pages/PostScreen";
import SettingsScreen from "../components/pages/SettingsScreen";
import ProfileScreen from "../components/pages/ProfileScreen";


const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="Search" component={SearchScreen} />
                <Tab.Screen name="Post" component={PostScreen} />
                <Tab.Screen name="Settings" component={SettingsScreen} />
                <Tab.Screen name="Profile" component={ProfileScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
export default Tabs;