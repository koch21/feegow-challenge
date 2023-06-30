import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import SignIn from "../pages/signIn";
import SignUp from "../pages/signUp";

const AuthStack = createStackNavigator();

const AuthRoutes = () => {
  return (
    <AuthStack.Navigator headerMode="none">
      <AuthStack.Screen name="SignIn" component={SignIn} />
      <AuthStack.Screen name="SignUp" component={SignUp} />
    </AuthStack.Navigator>
  );
};

export default AuthRoutes;
