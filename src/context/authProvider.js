import React, { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase";
import { firestore } from "firebase";

export const AuthContext = createContext({});

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const login = async (email, password) => {
    try {
      await auth.signInWithEmailAndPassword(email, password);
    } catch (e) {
      console.log(e);
    }
  };

  const register = async (email, password) => {
    try {
      await auth.createUserWithEmailAndPassword(email, password).then(() => {
        firestore()
          .collection("users")
          .doc(auth.currentUser.uid)
          .set({
            fname: "",
            lname: "",
            email: email,
            createdAt: firestore.Timestamp.fromDate(new Date()),
            userImg: null,
          })
          .catch((error) => {
            console.log(
              "Something went wrong with added user to firestore: ",
              error
            );
          });
      });
    } catch (e) {
      console.log(e);
    }
  };

  const logout = async () => {
    try {
      await auth.signOut();
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
      setLoading(false);
    });
    return unsubscribe;
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
