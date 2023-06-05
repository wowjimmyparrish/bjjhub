import React, { useContext } from "react";
import TechniqueCard from "./TechniqueCard";
import { TechniqueContext } from "../context/technique";

function TechniqueList({ addComment, selectedPosition, handleFavTechnique }) {
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
      handleFavTechnique={handleFavTechnique}
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
