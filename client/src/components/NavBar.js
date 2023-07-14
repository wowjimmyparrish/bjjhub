import React, { useContext, useState } from "react";
import { UserContext } from "../context/user";
import { NavLink } from "react-router-dom";
import Search from "./Search";

function NavBar({ handleSearch }) {
  const { setUser } = useContext(UserContext);
  const [collapsed, setCollapsed] = useState(true);

  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light shadow p-3 mb-5 bg-body-tertiary rounded   ">
      <div className="container-fluid ">
        <NavLink className="navbar-brand fs-3" to="/">
          BJJHub
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded={!collapsed ? true : false}
          aria-label="Toggle navigation"
          onClick={toggleCollapse}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`collapse navbar-collapse ${collapsed ? "" : "show"}`}
          id="navbarNav"
        >
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
          <button className="btn btn-dark ms-2" onClick={handleLogoutClick}>
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
