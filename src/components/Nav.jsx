import React from "react";
import { Link, NavLink } from "react-router";

function Nav() {
  return (
    <div className="nav-div">
      <h1 className="nav-h">React Route</h1>
      <ul>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          About
        </NavLink>
        <NavLink
          to="/product"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Product
        </NavLink>
      </ul>
    </div>
  );
}

export default Nav;
