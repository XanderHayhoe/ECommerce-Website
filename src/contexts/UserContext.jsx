import React, { useEffect } from "react";
import { createContext, useState } from "react";
import { onAuthStateChangedListener } from "../utils/firebase/firebase";
import { createUserDocumentFromAuth } from "../utils/firebase/firebase";
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);
  return <UserContext.Provider value={value}>{children} </UserContext.Provider>;
};
// value passes currentUser and setCurrentUser down the component tree
