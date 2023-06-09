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
    <div className="card p-4 m-4 shadow p-3 mb-5 bg-body-tertiary rounded">
      <h3>{technique.name}</h3>
      {videoError ? (
        <p>Video failed to load or display.</p>
      ) : (
        <ReactPlayer
          onError={handleVideoError}
          url={technique.video}
        ></ReactPlayer>
      )}
      <div className="position-absolute top-0 start-50">
        <Comment comments={technique.comments} />
      </div>
      <div>
        <AddComment addComment={addComment} technique={technique} />
      </div>
    </div>
  );
}

export default TechniqueCard;
