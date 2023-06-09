import React, { useContext } from "react";
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
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow p-3 mb-5 bg-body-tertiary rounded">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          BJJhub
        </NavLink>
        <h4 className="text-end m-1 p-1 me-4">Welcome, {user.username}!</h4>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                className="nav-link"
                activeClassName="active"
                exact
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                activeClassName="active"
                to="/uploadvideo"
              >
                Upload Video
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                activeClassName="active"
                to="/myvideos"
              >
                My Videos
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                activeClassName="active"
                to="/mycomments"
              >
                My Comments
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                activeClassName="active"
                to="/trainingresources"
              >
                Training Resources
              </NavLink>
            </li>
          </ul>
          <Search handleSearch={handleSearch} />
          <button className="btn btn-primary ms-2" onClick={handleLogoutClick}>
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
