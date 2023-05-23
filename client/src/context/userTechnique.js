import React, { createContext, useState } from "react";

const UserTechniqueContext = createContext();

function UserTechniqueProvider({ children }) {
  const [userTechniques, setUserTechniques] = useState([]);

  const value = { userTechniques, setUserTechniques };

  return (
    <UserTechniqueContext.Provider value={value}>
      {children}
    </UserTechniqueContext.Provider>
  );
}

export { UserTechniqueContext, UserTechniqueProvider };
