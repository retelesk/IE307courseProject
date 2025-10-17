// Navigator chính
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, StyleSheet } from "react-native";
import FontAwesome6 from "@react-native-vector-icons/fontawesome6";

import DashboardScreen from "../screens/main/DashboardScreen";
import AddBills from "../screens/main/AddBills";
import UserScreen from "../screens/main/UserScreen";
import TransactionsScreen from "../screens/main/TransactionsScreen";
import ReportsScreen from "../screens/main/ReportsScreen";

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
    <Tab.Navigator
      id="AppNavigator"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.footerMenu,
        tabBarIcon: ({ focused }) => {
          let iconName;
          let size = 28;
          let color = focused ? "#25215E" : "#A0A0A0";
          let solid = true;

          switch (route.name) {
            case "DashboardScreen":
              iconName = "house";
              break;
            case "ReportsScreen":
              iconName = "chart-column";
              break;
            case "AddBills":
              iconName = "plus";
              size = 40;
              color = "#25215E";
              break;
            case "TransactionsScreen":
              iconName = "file-invoice-dollar";
              break;
            case "UserScreen":
              iconName = "user-large";
              break;
          }

          return (
            <View
              style={
                route.name === "AddBills"
                  ? styles.centerButton
                  : styles.tabIconContainer
              }
            >
              <FontAwesome6
                iconStyle="solid"
                name={iconName}
                size={size}
                color={color}
                solid={solid}
              />
            </View>
          );
        },
      })}
    >
      <Tab.Screen name="DashboardScreen" component={DashboardScreen} />
      <Tab.Screen name="ReportsScreen" component={ReportsScreen} />
      <Tab.Screen name="AddBills" component={AddBills} />
      <Tab.Screen name="TransactionsScreen" component={TransactionsScreen} />
      <Tab.Screen name="UserScreen" component={UserScreen} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  footerMenu: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "#FFFFFF",
    borderTopWidth: 0.5,
    borderTopColor: "#E0E0E0",
    paddingVertical: 12,
    height: 80,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: -2 },
    shadowRadius: 6,
    elevation: 10, // cho Android
  },
  tabIconContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  centerButton: {
    position: "absolute",
    bottom: 10,
    backgroundColor: "#FFFFFF",
    borderRadius: 50,
    padding: 10,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 8,
    width: 70,
    height: 70,
    alignItems: "center",
    justifyContent: "center",
  },
});
