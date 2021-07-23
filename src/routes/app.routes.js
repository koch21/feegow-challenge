import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import TabRoutes from "./tabBar.routes";

const AppStack = createStackNavigator();

const AppRoutes = () => {
  return (
    <AppStack.Navigator headerMode="none">
      <AppStack.Screen name="TabRoutes" component={TabRoutes} />
    </AppStack.Navigator>
  );
};

export default AppRoutes;
