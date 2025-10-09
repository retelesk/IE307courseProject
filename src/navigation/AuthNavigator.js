import React from "react";
import {createStackNavigator} from "@react-navigation/stack";

import RegisterScreen from "../screens/auth/RegisterScreen";
import ForgotPasswordScreen from "../screens/auth/ForgotPasswordScreen";
import LoginScreen from "../screens/auth/LoginScreen";


const Stack = createStackNavigator();

export default function AuthNavigator() {
    return <Stack.Navigator id="auth" screenOptions={{headerShown: false}}>
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{headerShown: false}} id="loginScreen"/>
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} options={{headerShown: false}}
                      id="registerScreen"/>
        <Stack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen} options={{headerShown: false}}
                      id="forgotPasswordScreen"/>
    </Stack.Navigator>
}