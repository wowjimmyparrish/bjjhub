import React from "react";

function CommentCard({ comment, username }) {
  return (
    <li className="list-group-item">
      <span>
        {comment} - {username}
      </span>
    </li>
  );
}

export default CommentCard;
