import React, { useState } from "react";
import ReactPlayer from "react-player";
import Comment from "./Comment";
import AddComment from "./AddComment";

function TechniqueCard({ technique, addComment }) {
  const [videoError, setVideoError] = useState(false);

  const handleVideoError = () => {
    setVideoError(true);
  };

  return (
    <div className="card p-4 m-4">
      <h3>{technique.name}</h3>
      {videoError ? (
        <p>Video failed to load or display.</p>
      ) : (
        <ReactPlayer
          onError={handleVideoError}
          url={technique.video}
        ></ReactPlayer>
      )}

      <Comment comments={technique.comments} />
      <AddComment addComment={addComment} technique={technique} />
    </div>
  );
}

export default TechniqueCard;
