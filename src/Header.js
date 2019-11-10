import React from "react";
import "./App.css";

const Header = () => {
  return (
    <div className="header">
      <h2 className="header-text">EasyPics</h2>
      <p className="lead">Easiest way to find HD stock photos for free!</p>
      <nav className="navbar navbar-expand-lg navbar-light">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://www.linkedin.com/in/maverov"
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link disabled"
                href="/support"
                tabIndex="-1"
                aria-disabled="true"
              >
                Support
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
