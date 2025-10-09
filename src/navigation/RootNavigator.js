import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import AppNavigator from "./AppNavigator";
import AuthNavigator from "./AuthNavigator";

const RootStack = createStackNavigator();

export default function RootNavigator() {
    const [isLoggedIn, setIsLoggedIn] = React.useState(false);

    return <NavigationContainer>
        <RootStack.Navigator screenOptions={{headerShown: false}}>
            {isLoggedIn ? (<RootStack.Screen name="AppNavigator" component={AppNavigator}/>)
                : (<RootStack.Screen name="AuthNavigator" component={AuthNavigator}/>)}
        </RootStack.Navigator>
    </NavigationContainer>
}