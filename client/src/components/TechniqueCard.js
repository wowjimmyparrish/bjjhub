import React from "react";
import Comment from "./Comment";
function TechniqueCard({ technique }) {
  return (
    <div className="card p-4 m-4">
      <h3>{technique.name}</h3>
      <iframe
        width="560"
        height="315"
        title="Video Player"
        src={technique.video}
      ></iframe>
      <Comment comments={technique.comments} />
    </div>
  );
}

export default TechniqueCard;
