import React, { useState } from "react";

function UserCommentCard({ deleteComment, editComment, comment, technique }) {
  const [data, setData] = useState({
    id: comment.id,
    comment: comment.comment,
    technique_id: comment.technique_id,
    user_id: comment.user_id,
  });
  const [edit, setEdit] = useState(true);

  function handleEditClick(e) {
    e.preventDefault();
    setEdit(!edit);
  }

  function handleSaveClick(e) {
    e.preventDefault();
    handleEdit(data);
    setEdit(!edit);
  }

  const requestOptions = {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(comment),
  };

  function handleDelete(e) {
    e.preventDefault();
    fetch(`/comments/${comment.id}`, requestOptions)
      .then((response) => {
        return response.json();
      })
      .then(() => deleteComment(comment));
  }

  function handleEdit() {
    const requestOptions = {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };
    fetch(`/comments/${comment.id}`, requestOptions)
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        editComment(res);
      });
  }

  return (
    <div className="card p-4 m-4 shadow p-3 mb-5 bg-body-tertiary rounded">
      <h3>Technique:</h3>
      <p>{technique}</p>
      <h3>Comment:</h3>
      <form>
        {edit ? (
          <p>{data.comment}</p>
        ) : (
          <input
            type="text"
            placeholder="Comment"
            value={data.comment}
            disabled={edit}
            onChange={(e) =>
              setData({
                comment: e.target.value,
                id: comment.id,
                technique_id: comment.workout_id,
                user_id: comment.user_id,
              })
            }
          ></input>
        )}
        <div>
          <button
            className="btn btn-dark m-2"
            type="submit"
            onClick={edit ? handleEditClick : handleSaveClick}
          >
            {edit ? "Edit" : "Save"}
          </button>
          <button
            className="btn btn-danger m-2"
            type="submit"
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
      </form>
    </div>
  );
}

export default UserCommentCard;
