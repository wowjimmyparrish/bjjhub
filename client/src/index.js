import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { UserProvider } from "./context/user";
import { TechniqueProvider } from "./context/technique";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <TechniqueProvider>
      <UserProvider>
        <Router>
          <App />
        </Router>
      </UserProvider>
    </TechniqueProvider>
  </React.StrictMode>
);
