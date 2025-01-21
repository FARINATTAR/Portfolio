import React from 'react';
import '../assets/styles/Navbar.css'; // Link to the external CSS file

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg custom-navbar">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav mx-auto">
            <a className="nav-link custom-nav-link" aria-current="page" href="#">
              Home
            </a>
            <a className="nav-link custom-nav-link" href="#about">
              About
            </a>
            <a className="nav-link custom-nav-link" href="#projects">
              Projects
            </a>
            <a className="nav-link custom-nav-link " href="#contact">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
