import React, { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext({});

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const login = async (email, password) => {
    try {
      const user = await AsyncStorage.getItem(email);
      if (user) {
        const parsedUser = JSON.parse(user);
        if (parsedUser.password === password) {
          setUser({ email });
        }
      }
    } catch (error) {
      console.log("Error retrieving user from AsyncStorage:", error);
    }
  };
  
  const register = async (email, password) => {
    try {
      const user = JSON.stringify({ email, password });
      await AsyncStorage.setItem(email, user);
      setUser({ email });
    } catch (error) {
      console.log("Error storing user in AsyncStorage:", error);
    }
  };
  
  const logout = async () => {
    try {
      // Simulação do logout
      setUser(null);
    } catch (error) {
      console.log("Error logging out:", error);
    }
  };

  useEffect(() => {
    const getUserFromAsyncStorage = async () => {
      try {
        const user = await AsyncStorage.getItem("currentUser");
        if (user) {
          const parsedUser = JSON.parse(user);
          setUser({ email: parsedUser.email });
        }
        setLoading(false);
      } catch (error) {
        console.log("Error retrieving user from AsyncStorage:", error);
        setLoading(false);
      }
    };
  
    getUserFromAsyncStorage();
  }, []);

  const value = {
    user,
    setUser,
    login,
    register,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;