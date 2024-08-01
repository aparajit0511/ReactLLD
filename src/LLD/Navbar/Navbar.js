import React from "react";
import "../../App.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <h1>Navbar</h1>
      <div className="navbar">
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
      </div>
    </div>
  );
}

export default Navbar;
