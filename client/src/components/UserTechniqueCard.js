import React from "react";

function UserTechniqueCard({ name, userVideo, deleteTechnique, technique }) {
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
      <iframe
        width="560"
        height="315"
        title="Video Player"
        src={userVideo}
      ></iframe>
      <button className="btn btn-danger" onClick={handleDelete} type="submit">
        Delete
      </button>
    </div>
  );
}

export default UserTechniqueCard;
