import React from "react";
import { useContext } from "react";
import { UserContext } from "../context/user";
import { NavLink } from "react-router-dom";
import Search from "./Search";
function NavBar({ handleSearch }) {
  const { user, setUser } = useContext(UserContext);

  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }
  return (
    <div className="nav justify-content-end shadow p-3 mb-5 bg-body-tertiary rounded ">
      <div>
        <h1 className="fs-4 position-absolute top-0 start-0 m-1 p-1">BJJhub</h1>
      </div>
      <div>
        <h4 className="position-absolute top-0 end-0  m-1 p-1 me-4">
          Welcome, {user.username}!
        </h4>
      </div>
      <div className="navbar">
        <NavLink className="p-4 fs-5" to="/">
          Home{" "}
        </NavLink>
        <NavLink className="p-4 fs-5" to="/uploadvideo">
          Upload Video{" "}
        </NavLink>
        <NavLink className="p-4 fs-5" to="/myvideos">
          My Videos
        </NavLink>
        <NavLink className="p-4 fs-5" to="/mycomments">
          My Comments
        </NavLink>
        <NavLink className="p-4 fs-5" to="/trainingresources">
          Training Resources
        </NavLink>
        <Search handleSearch={handleSearch} />
        <button
          className="btn btn-primary me-4  m-2"
          onClick={handleLogoutClick}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default NavBar;
