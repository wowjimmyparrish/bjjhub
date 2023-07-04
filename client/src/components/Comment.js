import React from "react";
import CommentCard from "./CommentCard";

function Comment({ comments }) {
  const commentArray = comments.map((comment) => (
    <CommentCard
      key={comment.id}
      comment={comment.comment}
      username={comment.user.username}
    />
  ));

  return (
    <div
      id="comment-list"
      className="mt-4 container"
      style={{ maxWidth: "600px" }}
    >
      <h5>Comments:</h5>
      <div className="card overflow-auto" style={{ maxHeight: "400px" }}>
        <ul className="list-group list-group-flush">{commentArray}</ul>
      </div>
    </div>
  );
}

export default Comment;
