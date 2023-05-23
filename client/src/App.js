import React, { useEffect, useContext } from "react";
import { Route, Switch } from "react-router-dom";
import { UserContext } from "./context/user";
import { TechniqueContext } from "./context/technique";
import { UserTechniqueContext } from "./context/userTechnique";
import { UserCommentContext } from "./context/userComment";
import Login from "./pages/Login";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import MyTechniques from "./pages/MyTechniques";

function App() {
  const { user, setUser } = useContext(UserContext);
  const { setAllTechniques } = useContext(TechniqueContext);
  const { setUserTechniques } = useContext(UserTechniqueContext);
  const { setUserComments } = useContext(UserCommentContext);

  // fetching user data
  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => {
          setUser(user);
          setUserTechniques(user.created_techniques);
          setUserComments(user.comments);
        });
      }
    });
  }, [setUser, setUserTechniques, setUserComments]);

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
          <Route path="/myvideos">
            <MyTechniques />
          </Route>
          <Route path="/mycomments"></Route>
          <Route path="/favorites"></Route>
        </Switch>
      </main>
    </>
  );
}
export default App;
