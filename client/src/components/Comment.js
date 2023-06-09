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
    <div id="comment-list" className="mt-4">
      <h5>Comments:</h5>
      <ul>{commentArray}</ul>
    </div>
  );
}

export default Comment;
