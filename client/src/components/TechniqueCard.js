import React, { useState } from "react";
import ReactPlayer from "react-player";
import Comment from "./Comment";
import AddComment from "./AddComment";
function TechniqueCard({ technique, addComment, handleFavTechnique }) {
  const [videoError, setVideoError] = useState(false);
  const [isFavorite, setIsFavorite] = useState(technique.is_favorite);

  const handleVideoError = () => {
    setVideoError(true);
  };
  const handleFavorite = () => {
    setIsFavorite(!isFavorite);
    fetch(`/techniques/${technique.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ is_favorite: !technique.is_favorite }),
    })
      .then((response) => response.json())
      .then((updatedTechnique) => handleFavTechnique(updatedTechnique));
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
      {isFavorite ? (
        <div>
          <button onClick={handleFavorite}>Remove from Favorites</button>
        </div>
      ) : (
        <div>
          <button onClick={handleFavorite}>Add to Favorites</button>
        </div>
      )}

      <Comment comments={technique.comments} />
      <AddComment addComment={addComment} technique={technique} />
    </div>
  );
}

export default TechniqueCard;
