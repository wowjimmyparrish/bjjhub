import React, { useState, useContext } from "react";
import { UserContext } from "../context/user";

function AddComment({ addComment, technique }) {
  const { user } = useContext(UserContext);
  const [errors, setErrors] = useState([]);
  const [data, setData] = useState({
    comment: "",
    user_id: user.id,
    technique_id: technique.id,
  });

  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/comments", requestOptions).then((response) => {
      if (response.ok) {
        response.json().then((data) => {
          addComment(data);
          setData({
            comment: "",
            technique_id: technique.id,
            user_id: user.id,
          });
        });
      } else {
        response.json().then((errorData) => {
          setErrors(errorData.errors.user_id);
          setData({
            comment: "",
            technique_id: technique.id,
            user_id: user.id,
          });
        });
      }
    });
  }

  return (
    <div>
      <form className="comment-form">
        <input
          className="form-control mb-2"
          type="text"
          placeholder="Comment"
          value={data.comment}
          style={{ width: "641px" }}
          onChange={(e) =>
            setData({
              comment: e.target.value,
              technique_id: technique.id,
              user_id: user.id,
            })
          }
        />
        <button
          className="btn btn-primary me-2"
          type="submit"
          disabled={!data.comment}
          onClick={handleSubmit}
        >
          Submit
        </button>
        {errors.map((error) => (
          <p key={error} className="text-danger">
            {error}
          </p>
        ))}
      </form>
    </div>
  );
}

export default AddComment;
