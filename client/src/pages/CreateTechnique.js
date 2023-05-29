import React from "react";
import { useHistory } from "react-router-dom";
import { useState, useContext } from "react";
import { UserContext } from "../context/user";

function CreateTechnique({ addTechnique }) {
  const [errors, setErrors] = useState([]);
  const { user } = useContext(UserContext);
  const [data, setData] = useState({
    user_id: user.id,
    name: "",
    video: "",
    isFavorite: false,
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
      <hr></hr>
      <p className="text-center">Please submit information below</p>
      <form className="d-flex align-items-center justify-content-center flex-column">
        <input
          className="my-2"
          style={{ width: "50%" }}
          type="text"
          placeholder="Name"
          value={data.name}
          required
          onChange={(e) => setData({ ...data, name: e.target.value })}
        ></input>
        <input
          className="my-2"
          style={{ width: "50%" }}
          type="text"
          placeholder="Video"
          value={data.video}
          required
          onChange={(e) => setData({ ...data, video: e.target.value })}
        ></input>
        <br></br>
        <button
          onClick={handleSubmit}
          type="submit"
          className="btn btn-primary"
        >
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
