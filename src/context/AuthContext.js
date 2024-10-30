import React, { createContext, useContext, useState, useEffect } from 'react';
// import { auth } from '../firebaseConfig';
// import { onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    // const unsubscribe = onAuthStateChanged(auth, user => {
    //   setCurrentUser(user);
    // });

    // return unsubscribe;
  }, []);

  const signup = (email, password) => {
    console.log("Signup function called");
    return Promise.resolve();
  };

  const login = (email, password) => {
    console.log("Login function called");
    return Promise.resolve();
  };

  const logout = () => {
    console.log("Logout function called");
    return Promise.resolve();
  };

  const value = {
    currentUser,
    signup,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
