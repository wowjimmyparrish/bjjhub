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
    <div className="card p-4 m-4 shadow p-3 mb-5 bg-body-tertiary rounded d-flex justify-content-between flex-row align-items-start  ">
      <div>
        <h3>{technique.name}</h3>
        {videoError ? (
          <p>Video failed to load or display.</p>
        ) : (
          <ReactPlayer
            onError={handleVideoError}
            url={technique.video}
          ></ReactPlayer>
        )}
        <div className="mt-2">
          <AddComment addComment={addComment} technique={technique} />
        </div>
      </div>

      <div className="me-auto p-2 bd-highlight">
        <h5>Comments:</h5>
        <Comment comments={technique.comments} />
      </div>
    </div>
  );
}

export default TechniqueCard;
