import React from "react";

function CommentCard({ comment, username }) {
  return (
    <li className="list-group-item">
      <span>
        <br></br>
        {comment} - {username}
      </span>
    </li>
  );
}

export default CommentCard;
