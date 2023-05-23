import React from "react";

function WorkoutCard({ technique }) {
  return (
    <div className="card p-4 m-4">
      <h3>{technique.name}</h3>
      <iframe
        width="560"
        height="315"
        src={technique.video}
        frameborder="0"
        allowfullscreen
      ></iframe>
    </div>
  );
}

export default WorkoutCard;
