import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AppRoutes from "./app.routes";
import AuthRoutes from "./auth.routes";

// Authentication
import { AuthContext } from "../context/authProvider";

const Routes = () => {
  const [user, setUser] = useState(null);
  const [initializing, setInitializing] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const storedUser = JSON.parse(await AsyncStorage.getItem("currentUser"));
        setUser(storedUser);
        setInitializing(false);
      } catch (error) {
        console.log("Error retrieving user from AsyncStorage:", error);
      }
    };

    fetchUser();
  }, []);

  if (initializing) return null;

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <AppRoutes />
    </AuthContext.Provider>
  );
};

export default Routes;
