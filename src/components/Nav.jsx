import React from "react";
import { Link } from "react-router";

function Nav() {
  return (
    <div className="nav-div">
      <h1 className="nav-h">React Route</h1>
      <ul>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/product">Product</Link>
      </ul>
    </div>
  );
}

export default Nav;
