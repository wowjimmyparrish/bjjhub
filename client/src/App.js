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
  // page keeps track of the current page or offset for fetching teas
  const [page, setPage] = useState(1);
  // hasMore keeps track of whether there is more data available for infinite scroll
  const [hasMore, setHasMore] = useState(true);

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

  // fetch techniques data
  useEffect(() => {
    fetch("/techniques?page=1")
      .then((r) => r.json())
      .then((data) => setAllTechniques(data));
  }, [setAllTechniques]);

  // fetches more techniques when user triggers the infinite scroll by reaching end of page. updates techniques state with newly fetched data, increments the page state for the next fetch, and sets hasMore to false if there are no more teas to fetch.
  const fetchMoreTechniques = async () => {
    const response = await fetch(`/techniques?page=${page + 1}`);
    const data = await response.json();
    if (data.length > 0) {
      setAllTechniques((prevTechniques) => [...prevTechniques, ...data]);
      setPage((prevPage) => prevPage + 1);
    } else {
      setHasMore(false); // No more data available
    }
  };

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
            <Home
              addComment={addComment}
              selectedPosition={selectedPosition}
              hasMore={hasMore}
              fetchMoreTechniques={fetchMoreTechniques}
            />
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
