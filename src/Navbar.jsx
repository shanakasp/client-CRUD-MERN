// Navbar.js
import React from "react";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark ">
      <a
        className="navbar-brand text-white"
        href="/"
        style={{ marginLeft: "20px" }}
      >
        Predict Disease
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon text-white"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <a className="nav-link text-white" href="/">
              Logout
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="/about">
              About
            </a>
          </li>
          {/* Add more navigation items as needed */}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
