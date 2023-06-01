import React from "react";

function Search({ handleSearch }) {
  const handleChange = (e) => {
    const positionId = e.target.value;
    handleSearch(positionId);
  };

  return (
    <label>
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
