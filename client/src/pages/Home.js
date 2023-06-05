import React from "react";
import TechniqueList from "../components/TechniqueList";

function Home({ addComment, selectedPosition }) {
  return (
    <>
      <TechniqueList
        addComment={addComment}
        selectedPosition={selectedPosition}
      />
    </>
  );
}

export default Home;
