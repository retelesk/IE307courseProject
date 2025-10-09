import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import RootNavigator from "./src/navigation/RootNavigator";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
    return <RootNavigator/>
}

export default App;
