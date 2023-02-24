import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OpeningScreen from '$screens/Opening';
import LoginScreen from '$screens/Login';
import TabNavigator from '$navigators/TabNavigator';
import SignupScreen from '$screens/Signup';


const RootStack = createNativeStackNavigator()

const RootNavigator = () => {
    return (
        <RootStack.Navigator screenOptions={{headerShown: false}}>
            <RootStack.Group>
                <RootStack.Screen name="Opening" component={OpeningScreen}/>
                <RootStack.Screen name="Login" component={LoginScreen}/>
                <RootStack.Screen name="Signup" component={SignupScreen}/>
                <RootStack.Screen name="Main" component={TabNavigator}/>
            </RootStack.Group>
        </RootStack.Navigator>
    );
}


export default RootNavigator;
