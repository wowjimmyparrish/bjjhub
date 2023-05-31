import React from "react";

function CommentCard({ comment }) {
  return (
    <>
      <p>
        {comment.comment} -{comment.user.username}
      </p>
    </>
  );
}

export default CommentCard;
