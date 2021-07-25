import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import TabRoutes from "./tabBar.routes";
import DoctorProfile from "../pages/doctorProfile";

const AppStack = createStackNavigator();

const AppRoutes = () => {
  return (
    <AppStack.Navigator headerMode="none">
      <AppStack.Screen name="TabRoutes" component={TabRoutes} />
      <AppStack.Screen name="DoctorProfile" component={DoctorProfile} />
    </AppStack.Navigator>
  );
};

export default AppRoutes;
