import React from "react";
import TechniqueList from "../components/TechniqueList";

function Home({ addComment }) {
  return (
    <>
      <TechniqueList addComment={addComment} />
    </>
  );
}

export default Home;
