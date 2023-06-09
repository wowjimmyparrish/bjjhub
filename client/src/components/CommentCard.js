import React from "react";

function CommentCard({ comment, username }) {
  return (
    <>
      <span>
        <ul>
          {comment} - {username}
        </ul>
      </span>
    </>
  );
}

export default CommentCard;
