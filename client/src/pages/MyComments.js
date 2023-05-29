import React, { useContext } from "react";
import { UserCommentContext } from "../context/userComment";
import UserCommentCard from "../components/UserCommentCard";

function MyComments({ deleteComment, editComment }) {
  const { userComments } = useContext(UserCommentContext);

  const userCommentArray = userComments.map((userComment) => (
    <UserCommentCard
      key={userComment.id}
      technique={userComment.technique.name}
      comment={userComment}
      deleteComment={deleteComment}
      editComment={editComment}
    />
  ));
  return (
    <>
      <h1 className="text-center">My Comments</h1>
      <ul>{userCommentArray}</ul>
    </>
  );
}

export default MyComments;
