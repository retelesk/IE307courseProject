import React from "react";
import LoginScreen from "./src/screens/auth/LoginScreen";
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import RegisterScreen from "./src/screens/auth/RegisterScreen";
import DashboardScreen from "./src/screens/main/DashboardScreen";
import ForgotPasswordScreen from "./src/screens/auth/ForgotPasswordScreen";

const Stack = createStackNavigator();

const FinancialManagerApp = () => {
    return <NavigationContainer>
        <Stack.Navigator initialRouteName="LoginScreen" id="login" screenOptions={{headerShown: false}}>
            <Stack.Screen name="LoginScreen" component={LoginScreen} options={{headerShown: false}} id="loginScreen"/>
            <Stack.Screen name="RegisterScreen" component={RegisterScreen} options={{headerShown: false}}
                          id="registerScreen"/>
            <Stack.Screen name="DashboardScreen" component={DashboardScreen} options={{headerShown: false}}
                          id="dashboardScreen"/>
            <Stack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen} options={{headerShown: false}}
                          id="forgotPasswordScreen"/>
        </Stack.Navigator>
    </NavigationContainer>
}

export default FinancialManagerApp;
