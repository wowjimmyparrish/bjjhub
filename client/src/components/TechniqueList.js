import React, { useContext } from "react";
import TechniqueCard from "./TechniqueCard";
import { TechniqueContext } from "../context/technique";

function TechniqueList({ addComment }) {
  const { allTechniques } = useContext(TechniqueContext);

  const techniqueArray = allTechniques.map((technique) => (
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
        <ul>{techniqueArray}</ul>
      </div>
    );
}

export default TechniqueList;
