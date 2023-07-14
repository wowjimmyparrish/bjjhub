import React, { useContext } from "react";
import TechniqueList from "../components/TechniqueList";
import { UserContext } from "../context/user";
function Home({ addComment, selectedPosition, hasMore, fetchMoreTechniques }) {
  const { user } = useContext(UserContext);
  return (
    <>
      <h5 className="text-start ms-3 mb-3 p-1 me-4">
        Welcome, {user.username}!
      </h5>

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
