import React, { createContext, useState } from "react";

const TechniqueContext = createContext();

function TechniqueProvider({ children }) {
  const [allTechniques, setAllTechniques] = useState([]);

  const value = {
    allTechniques,
    setAllTechniques,
  };

  return (
    <TechniqueContext.Provider value={value}>
      {children}
    </TechniqueContext.Provider>
  );
}

export { TechniqueContext, TechniqueProvider };
