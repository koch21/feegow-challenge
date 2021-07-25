import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

// PAGINAS
import Home from "../pages/home";
import Schedule from "../pages/schedule";
import Calendar from "../pages/calendar";
import Setting from "../pages/setting";
import Profile from "../pages/profile";

// STYLES
import { light } from "../styles/themes/default";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";

const TabBar = createMaterialBottomTabNavigator();

const screenOptions = ({ route }) => ({
  tabBarIcon: ({ focused }) => {
    let iconName;

    switch (route.name) {
      case "Home":
        iconName = "home";
        break;
      case "Schedule":
        iconName = "clock";
        break;
      case "Calendar":
        iconName = "calendar";
        break;
      case "Setting":
        iconName = "settings";
        break;
      case "Profile":
        iconName = "account";
        break;
    }

    return iconName === "settings" ? (
      <Ionicons
        name={focused ? iconName : iconName + "-outline"}
        size={focused ? 24 : 22}
        color={focused ? light.colors.blue : light.colors.darkGrey}
      />
    ) : (
      <MaterialCommunityIcons
        name={focused ? iconName : iconName + "-outline"}
        size={focused ? 25 : 22}
        color={focused ? light.colors.blue : light.colors.darkGrey}
      />
    );
  },
});

const TabRoutes = () => {
  return (
    <TabBar.Navigator
      barStyle={{
        backgroundColor: light.colors.primary,
      }}
      labeled={false}
      initialRouteName="Schedule"
      screenOptions={screenOptions}
    >
      <TabBar.Screen name="Home" component={Home} />
      <TabBar.Screen name="Schedule" component={Schedule} />
      <TabBar.Screen name="Calendar" component={Calendar} />
      <TabBar.Screen name="Setting" component={Setting} />
      <TabBar.Screen name="Profile" component={Profile} />
    </TabBar.Navigator>
  );
};

export default TabRoutes;
