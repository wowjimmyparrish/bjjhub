import React, { useEffect, useContext, useState } from "react";
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
import CreateTechnique from "./pages/CreateTechnique";
import TrainingResources from "./pages/TrainingResources";

function App() {
  const { user, setUser } = useContext(UserContext);
  const { allTechniques, setAllTechniques } = useContext(TechniqueContext);
  const { userTechniques, setUserTechniques } =
    useContext(UserTechniqueContext);
  const { userComments, setUserComments } = useContext(UserCommentContext);
  const [selectedPosition, setSelectedPosition] = useState("");

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

  function handleSearch(positionId) {
    setSelectedPosition(positionId);
  }

  function addTechnique(newTechnique) {
    //updated all techniques for home page
    setAllTechniques([...allTechniques, newTechnique]);
    //updated all user workouts for my workouts page
    setUserTechniques([...userTechniques, newTechnique]);
  }

  function deleteTechnique(deletedTechnique) {
    //update all technique data
    const updatedTechniques = allTechniques.filter(
      (technique) => technique.id !== deletedTechnique.id
    );
    setAllTechniques(updatedTechniques);

    //update my techniques data
    const updatedUserTechniques = userTechniques.filter(
      (technique) => technique.id !== deletedTechnique.id
    );
    setUserTechniques(updatedUserTechniques);

    setAllTechniques((prevTechniques) =>
      prevTechniques.map((technique) =>
        technique.id === deletedTechnique.id
          ? { ...technique, is_favorite: false }
          : technique
      )
    );
  }

  function addComment(newComment) {
    setAllTechniques((prevAllTechniques) => {
      return prevAllTechniques.map((technique) => {
        if (technique.id === newComment.technique.id) {
          return {
            ...technique,
            comments: [...technique.comments, newComment],
          };
        }
        return technique;
      });
    });
    setUserComments([...userComments, newComment]);
  }

  function deleteComment(deletedComment) {
    //mapping through all techniques, if id matches deleted comment id, then filter out deleted comment
    setAllTechniques((prevAllTechniques) => {
      return prevAllTechniques.map((technique) => {
        if (technique.id === deletedComment.technique.id) {
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
        if (technique.id === editedComment.technique.id) {
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
      <NavBar handleSearch={handleSearch} />

      <main>
        <Switch>
          <Route exact path="/">
            <Home addComment={addComment} selectedPosition={selectedPosition} />
          </Route>
          <Route path="/uploadvideo">
            <CreateTechnique addTechnique={addTechnique} />
          </Route>
          <Route path="/myvideos">
            <MyTechniques deleteTechnique={deleteTechnique} />
          </Route>
          <Route path="/mycomments">
            <MyComments
              deleteComment={deleteComment}
              editComment={editComment}
            />
          </Route>
          <Route path="/trainingresources">
            <TrainingResources />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
