// Navigator chính
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import DashboardScreen from "../screens/main/DashboardScreen";
import BudgetScreen from "../screens/main/BudgetScreen";
import UserScreen from "../screens/main/UserScreen";
import TransactionsScreen from "../screens/main/TransactionsScreen";
import ReportsScreen from "../screens/main/ReportsScreen";

const Tab = createBottomTabNavigator();
export default function AppNavigator() {
    return (
        <Tab.Navigator id="AppNavigator" screenOptions={{headerShown: false}}>
            <Tab.Screen name="DashboardScreen" component={DashboardScreen} options={{headerShown: false}}/>
            <Tab.Screen name="BudgetScreen" component={BudgetScreen} options={{headerShown: false}}/>
            <Tab.Screen name="ReportsScreen" component={ReportsScreen} options={{headerShown: false}}/>
            <Tab.Screen name="TransactionsScreen" component={TransactionsScreen} options={{headerShown: false}}/>
            <Tab.Screen name="UserScreen" component={UserScreen} options={{headerShown: false}}/>
        </Tab.Navigator>
    )
}