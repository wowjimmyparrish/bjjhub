import React from "react";
import TechniqueList from "../components/TechniqueList";

function Home({ addComment, selectedPosition, handleFavTechnique }) {
  return (
    <>
      <TechniqueList
        addComment={addComment}
        selectedPosition={selectedPosition}
        handleFavTechnique={handleFavTechnique}
      />
    </>
  );
}

export default Home;
