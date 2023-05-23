import React from "react";
import { useEffect, useContext } from "react";
import { Route, Switch } from "react-router-dom";
import { UserContext } from "./context/user";
import { TechniqueContext } from "./context/technique";
import Login from "./pages/Login";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";

function App() {
  const { user, setUser } = useContext(UserContext);
  const { setAllTechniques } = useContext(TechniqueContext);

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

  //fetching all techniques
  useEffect(() => {
    fetch("/techniques")
      .then((r) => r.json())
      .then((data) => setAllTechniques(data));
  }, [setAllTechniques]);

  if (!user) return <Login />;
  return (
    <>
      <NavBar />

      <main>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
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
