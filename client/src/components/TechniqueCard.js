import React from "react";
import Comment from "./Comment";
import AddComment from "./AddComment";
function TechniqueCard({ technique, addComment }) {
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
      <AddComment addComment={addComment} technique={technique} />
    </div>
  );
}

export default TechniqueCard;
