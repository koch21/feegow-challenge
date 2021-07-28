import React, { useContext, useEffect, useState } from "react";
import AppRoutes from "./app.routes";
import AuthRoutes from "./auth.routes";

// Authentication
import { AuthContext } from "../context/authProvider";
import { auth } from "../firebase";

const Routes = () => {
  const { user, setUser } = useContext(AuthContext);
  const [initalizing, setInitializing] = useState(true);

  const onAuthStateChanged = (user) => {
    setUser(user);
    if (initalizing) setInitializing(false);
  };

  useEffect(() => {
    const subscriber = auth.onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  if (initalizing) return null;

  return user ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes;
