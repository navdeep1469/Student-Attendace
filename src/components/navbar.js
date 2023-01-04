import React from "react";
import "../style/Navbar.css";

function navbar({ total }) {
  return (
    <div className="nav">
      <input type="checkbox" id="nav-check" />
      <div className="nav-header">
        <div className="nav-title"> Total Students Present = {total}</div>
      </div>
      <div className="nav-btn">
        <label htmlFor="nav-check">
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>
    </div>
  );
}

export default navbar;
