import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

import FirebaseProvider from "./firebase";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <FirebaseProvider>
    <App />
  </FirebaseProvider>,
  rootElement
);
