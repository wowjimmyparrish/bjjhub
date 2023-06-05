import React, { useState } from "react";
import ReactPlayer from "react-player";

function UserFavoriteCard({ technique }) {
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
    </div>
  );
}

export default UserFavoriteCard;
