import React from "react";

function UserTechniqueCard({ name, userVideo }) {
  return (
    <div className="card p-4 m-4">
      <h3>{name}</h3>
      <iframe
        width="560"
        height="315"
        title="Video Player"
        src={userVideo}
      ></iframe>
      <button className="btn btn-danger" type="submit">
        Delete
      </button>
    </div>
  );
}

export default UserTechniqueCard;
