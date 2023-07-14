import React from "react";
import { useHistory } from "react-router-dom";

function Search({ handleSearch }) {
  const history = useHistory();

  const handleChange = (e) => {
    const positionId = e.target.value;
    handleSearch(positionId);
    history.push("/");
  };

  return (
    <label className="ms-auto p-2 bd-highlight">
      Search By Position{" "}
      <select name="position" onChange={handleChange}>
        <option value="">All</option>
        <option value="1">Guard</option>
        <option value="2">Side Control</option>
        <option value="3">Knee on Belly</option>
        <option value="4">Mount</option>
        <option value="5">Rear Mount</option>
        <option value="6">Turtle</option>
      </select>
      <br />
    </label>
  );
}

export default Search;
