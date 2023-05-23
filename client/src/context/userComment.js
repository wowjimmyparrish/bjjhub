import React, { createContext, useState } from "react";

const UserCommentContext = createContext();

function UserCommentProvider({ children }) {
  const [userComments, setUserComments] = useState([]);

  const value = { userComments, setUserComments };

  return (
    <UserCommentContext.Provider value={value}>
      {children}
    </UserCommentContext.Provider>
  );
}

export { UserCommentContext, UserCommentProvider };
