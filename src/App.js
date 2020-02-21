import React from "react";

import "firebase/firestore";

import { FirebaseContext } from "./firebase";

export default function App() {
  const firebaseApp = React.useContext(FirebaseContext);

  function addToFirestore() {
    firebaseApp
      .firestore()
      .collection("messages")
      .add({ message: "First message" });
  }

  return (
    <div className="App">
      <button onClick={e => addToFirestore()}>Add to database</button>
    </div>
  );
}
