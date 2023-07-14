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
    <div id="comment-list" className="mt-4" style={{ maxWidth: "600px" }}>
      <div
        className=" overflow-auto"
        style={{ maxHeight: "350px", maxWidth: "500px" }}
      >
        <ul>{commentArray}</ul>
      </div>
    </div>
  );
}

export default Comment;
