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
import MyComments from "./pages/MyComments";

function App() {
  const { user, setUser } = useContext(UserContext);
  const { setAllTechniques } = useContext(TechniqueContext);
  const { setUserTechniques } = useContext(UserTechniqueContext);
  const { userComments, setUserComments } = useContext(UserCommentContext);

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

  function deleteComment(deletedComment) {
    //mapping through all techniques, if id matches deleted comment id, then filter out deleted comment
    setAllTechniques((prevAllTechniques) => {
      return prevAllTechniques.map((technique) => {
        if (technique.id === deletedComment.technique_id) {
          const filteredComments = technique.comments.filter(
            (prevComment) => prevComment.id !== deletedComment.id
          );
          return {
            ...technique,
            comments: filteredComments,
          };
        }
        return technique;
      });
    });
    //filtering user comment array
    const filterUserComments = userComments.filter(
      (comment) => comment.id !== deletedComment.id
    );
    setUserComments(filterUserComments);
  }

  //editing comments
  function editComment(editedComment) {
    setAllTechniques((prevAllTechniques) => {
      return prevAllTechniques.map((technique) => {
        if (technique.id === editedComment.technique_id) {
          const filteredComments = technique.comments.filter(
            (prevComment) => prevComment.id !== editedComment.id
          );
          return {
            ...technique,
            comments: [...filteredComments, editedComment],
          };
        }
        return technique;
      });
    });
    const filterUserComments = userComments.filter(
      (comment) => comment.id !== editedComment.id
    );
    setUserComments([...filterUserComments, editedComment]);
  }

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
          <Route path="/mycomments">
            <MyComments
              deleteComment={deleteComment}
              editComment={editComment}
            />
          </Route>
          <Route path="/favorites"></Route>
        </Switch>
      </main>
    </>
  );
}
export default App;
