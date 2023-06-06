import React from "react";

function CommentCard({ comment, username }) {
  return (
    <>
      <p>
        {comment} - {username}
      </p>
    </>
  );
}

export default CommentCard;
