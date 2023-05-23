import React, { useContext } from "react";
import { UserTechniqueContext } from "../context/userTechnique";
import UserTechniqueCard from "../components/UserTechniqueCard";

function MyTechniques() {
  const { userTechniques } = useContext(UserTechniqueContext);
  const userTechniqueArray = userTechniques.map((userTechnique) => (
    <UserTechniqueCard
      key={userTechnique.id}
      name={userTechnique.name}
      userVideo={userTechnique.video}
    />
  ));
  return (
    <>
      <h1 className="text-center">My Videos</h1>
      <ul>{userTechniqueArray}</ul>
    </>
  );
}

export default MyTechniques;
