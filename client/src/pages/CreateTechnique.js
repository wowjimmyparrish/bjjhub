import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../context/user";

function CreateTechnique({ addTechnique }) {
  const [errors, setErrors] = useState([]);
  const { user } = useContext(UserContext);
  const [data, setData] = useState({
    user_id: user.id,
    name: "",
    video: "",
    isFavorite: false,
    position_id: 1,
  });

  const history = useHistory();
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/techniques", requestOptions).then((r) => {
      if (r.ok) {
        r.json().then((data) => addTechnique(data), history.push("/"));
      } else {
        r.json().then((errorData) => setErrors(errorData.errors));
      }
    });
  }

  return (
    <div>
      <h1 className="text-center">Post Technique</h1>
      <hr />
      <p className="text-center">Please submit information below</p>
      <form className="d-flex align-items-center justify-content-center flex-column">
        <div className="mb-3">
          <input
            className="form-control"
            type="text"
            placeholder="Name"
            value={data.name}
            required
            onChange={(e) => setData({ ...data, name: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <input
            className="form-control"
            type="text"
            placeholder="Video"
            value={data.video}
            required
            onChange={(e) => setData({ ...data, video: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Select position</label>
          <select
            className="form-select"
            name="position"
            value={data.position_id}
            onChange={(e) => setData({ ...data, position_id: e.target.value })}
          >
            <option value="1">Guard</option>
            <option value="2">Side Control</option>
            <option value="3">Knee on Belly</option>
            <option value="4">Mount</option>
            <option value="5">Rear Mount</option>
            <option value="6">Turtle</option>
          </select>
        </div>
        <button onClick={handleSubmit} type="submit" className="btn btn-dark">
          Submit Now
        </button>
        {errors.length > 0 && (
          <ul style={{ color: "red" }}>
            {errors.map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        )}
      </form>
    </div>
  );
}

export default CreateTechnique;
