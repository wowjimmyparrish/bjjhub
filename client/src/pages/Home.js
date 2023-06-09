import React from "react";
import TechniqueList from "../components/TechniqueList";

function Home({ addComment, selectedPosition, hasMore, fetchMoreTechniques }) {
  return (
    <>
      <TechniqueList
        addComment={addComment}
        selectedPosition={selectedPosition}
        hasMore={hasMore}
        fetchMoreTechniques={fetchMoreTechniques}
      />
    </>
  );
}

export default Home;
