import {useNavigation} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '$screens/main/Home';
import Notifications from '$screens/main/Notifications';
import ChatScreen from '$screens/main/Chat';
import ProfileScreen from '$screens/main/Profile';
import styles from '$styles/global'
import {Icon, Image} from '@rneui/themed';


const Tab = createBottomTabNavigator()

const TabNavigator = () => {
    const navigation = useNavigation()

    return(
        <Tab.Navigator screenOptions={({route})=>({
            headerShown:false,
            tabBarActiveBackgroundColor: styles.colors.primary,
            tabBarInactiveBackgroundColor: styles.colors.primary,
            tabBarActiveTintColor: 'white',
            tabBarInactiveTintColor: styles.colors.tabInactiveTint,
            tabBarIcon:({focused})=>{
                if(route.name==='Home'){
                    return <Image
                        source={require('../../assets/icons/tabs/home-inactive.svg') }
                        color={focused?"white": styles.colors.tabInactiveTint}
                    />
                }else if(route.name==='Notifications'){
                    return <Icon
                        name="bell"
                        type="entypo"
                        color={focused?"white": styles.colors.tabInactiveTint}
                        />
                }else if(route.name==='Chat'){
                    return <Icon
                        name="near-me"
                        type="material"
                        color={focused?"white": styles.colors.tabInactiveTint}
                    />
                }else if(route.name==='Profile'){
                    return <Icon
                        name="person"
                        type="material"
                        color={focused?"white": styles.colors.tabInactiveTint}
                    />
                }
            }
        })}>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Notifications" component={Notifications}/>
            <Tab.Screen name="Chat" component={ChatScreen}/>
            <Tab.Screen name="Profile" component={ProfileScreen}/>
        </Tab.Navigator>
    )

}

export default TabNavigator