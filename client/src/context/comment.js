import React, { createContext, useState } from "react";

const CommentContext = createContext();

function CommentProvider({ children }) {
  const [comments, setComments] = useState([]);

  const value = { comments, setComments };

  return (
    <CommentContext.Provider value={value}>{children}</CommentContext.Provider>
  );
}

export { CommentContext, CommentProvider };
