import {useNavigation} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '$screens/main/Home';
import Notification from '$screens/main/Notification';
import ChatScreen from '$screens/main/Chat';
import ProfileScreen from '$screens/main/Profile';


const Tab = createBottomTabNavigator()

const TabNavigator = () => {
    const navigation = useNavigation()

    return(
        <Tab.Navigator screenOptions={{headerShown:false}}>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Notifications" component={Notification}/>
            <Tab.Screen name="Chat" component={ChatScreen}/>
            <Tab.Screen name="Profile" component={ProfileScreen}/>
        </Tab.Navigator>
    )

}

export default TabNavigator