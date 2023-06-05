import React, { useContext } from "react";
import { UserTechniqueContext } from "../context/userTechnique";
import UserFavoriteCard from "../components/UserFavoriteCard";

function MyFavorites() {
  const { userTechniques, favoriteTechniques } =
    useContext(UserTechniqueContext);
  const favoritedTechniques = userTechniques.filter(
    (technique) => technique.is_favorite === true
  );

  console.log("favorites", favoriteTechniques);

  const favoriteTechniqueArray = favoritedTechniques.map((technique) => (
    <UserFavoriteCard key={technique.id} technique={technique} />
  ));
  return (
    <>
      <h1>Favorite Techniques</h1>
      <ul>{favoriteTechniqueArray}</ul>
    </>
  );
}

export default MyFavorites;
