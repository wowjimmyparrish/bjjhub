import React, { useContext } from "react";
import TechniqueCard from "./TechniqueCard";
import { TechniqueContext } from "../context/technique";
import InfiniteScroll from "react-infinite-scroll-component";

function TechniqueList({
  addComment,
  selectedPosition,
  hasMore,
  fetchMoreTechniques,
}) {
  const { allTechniques } = useContext(TechniqueContext);

  const filteredTechniques = selectedPosition
    ? allTechniques.filter(
        (technique) => technique.position_id === parseInt(selectedPosition)
      )
    : allTechniques;

  const techniqueArray = filteredTechniques.map((technique) => (
    <TechniqueCard
      key={technique.id}
      technique={technique}
      addComment={addComment}
    />
  ));

  if (techniqueArray.length === 0) {
    return (
      <div className="card p-4 m-4">
        <h2 className="m-auto text-danger">Technique not found</h2>
      </div>
    );
  } else
    return (
      <div id="technique-list">
        <h1 className="text-center">Video List</h1>
        <InfiniteScroll
          dataLength={allTechniques.length || 0} // Length of the data array. if falsy (0, null, or undefined), OR operator evaluates to 0, ensuring a valid value
          next={fetchMoreTechniques} // This prop specifies the function that should be called when the user reaches the end of the scrollable content.
          hasMore={hasMore} // Boolean indicating if there is more data to load; fetchMoreTechniquess sets it false when no more data
          loader={<h3>Loading...</h3>} // displays while loading more data>
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          <ul>{techniqueArray}</ul>
        </InfiniteScroll>
      </div>
    );
}

export default TechniqueList;
