import React, { createContext, useState } from "react";

const UserTechniqueContext = createContext();

function UserTechniqueProvider({ children }) {
  const [userTechniques, setUserTechniques] = useState([]);
  const [favoriteTechniques, setFavoriteTechniques] = useState([]);

  const value = {
    userTechniques,
    setUserTechniques,
    favoriteTechniques,
    setFavoriteTechniques,
  };

  return (
    <UserTechniqueContext.Provider value={value}>
      {children}
    </UserTechniqueContext.Provider>
  );
}

export { UserTechniqueContext, UserTechniqueProvider };
