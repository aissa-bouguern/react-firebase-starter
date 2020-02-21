import React, { createContext } from "react";
import firebaseApp from "firebase/app";

export const FirebaseContext = createContext(null);

export default ({ children }) => {
  if (!firebaseApp.apps.length) {
    firebaseApp.initializeApp({
      apiKey: "YOUR_apiKey_HERE",
      authDomain: "YOUR_authDomain_HERE",
      databaseURL: "YOUR_databaseURL_HERE",
      projectId: "YOUR_projectId_HERE",
      storageBucket: "YOUR_storageBucket_HERE",
      messagingSenderId: "YOUR_messagingSenderId_HERE",
      appId: "YOUR_appId_HERE"
    });
  }
  return (
    <FirebaseContext.Provider value={firebaseApp}>
      {children}
    </FirebaseContext.Provider>
  );
};
