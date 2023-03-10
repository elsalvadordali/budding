import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OpeningScreen from '$screens/Opening';
import LoginScreen from '$screens/Login';
import TabNavigator from '$navigators/TabNavigator';
import ForgotPassword from '$screens/ForgotPassword';
import Signup1 from '../screens/signup/Signup1';
import HomeScreen from '../screens/main/Home';
import Signup2 from '$screens/signup/Signup2';

const RootStack = createNativeStackNavigator()

const RootNavigator = () => {
    return (
        <RootStack.Navigator screenOptions={{headerShown:false}}>
            <RootStack.Group>
                <RootStack.Screen name="Opening" component={OpeningScreen}/>
                <RootStack.Screen name="Login" component={LoginScreen}/>
                <RootStack.Screen name="ForgotPassword" component={ForgotPassword}/>
                <RootStack.Screen name="Signup1" component={Signup1}/>
                <RootStack.Screen name="Signup2" component={Signup2}/>
                <RootStack.Screen name="Main" component={TabNavigator}/>
                <RootStack.Screen name="Home" component={HomeScreen}/>

            </RootStack.Group>
        </RootStack.Navigator>
    );
}


export default RootNavigator;
