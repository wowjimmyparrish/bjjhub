import React from "react";
import { useState, useEffect, useContext } from "react";
import { Route, Switch } from "react-router-dom";
import { UserContext } from "./context/user";
import Login from "./pages/Login";

function App() {
  const { user, setUser } = useContext(UserContext);

  // fetching user data
  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => {
          setUser(user);
        });
      }
    });
  }, [setUser]);

  if (!user) return <Login />;
  return (
    <>
      {/* <NavBar user={user} /> */}

      <main>
        <Switch>
          <Route exact path="/"></Route>
          <Route path="/uploadvideo"></Route>
          <Route path="/myvideos"></Route>
          <Route path="/mycomments"></Route>
          <Route path="/favorites"></Route>
        </Switch>
      </main>
    </>
  );
}
export default App;
