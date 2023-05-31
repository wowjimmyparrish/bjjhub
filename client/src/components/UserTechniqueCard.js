import React, { useState } from "react";
import ReactPlayer from "react-player";

function UserTechniqueCard({ name, userVideo, deleteTechnique, technique }) {
  const [videoError, setVideoError] = useState(false);

  const handleVideoError = () => {
    setVideoError(true);
  };

  const requestOptions = {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(technique),
  };

  function handleDelete(e) {
    e.preventDefault();
    fetch(`/techniques/${technique.id}`, requestOptions)
      .then((response) => {
        return response.json();
      })
      .then(() => deleteTechnique(technique));
  }

  return (
    <div className="card p-4 m-4">
      <h3>{name}</h3>
      {videoError ? (
        <p>Video failed to load or display.</p>
      ) : (
        <ReactPlayer url={userVideo} onError={handleVideoError}></ReactPlayer>
      )}
      <button className="btn btn-danger" onClick={handleDelete} type="submit">
        Delete
      </button>
    </div>
  );
}

export default UserTechniqueCard;
