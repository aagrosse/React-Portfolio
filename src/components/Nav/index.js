import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Nav(props) {
  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="#">Alan Grosse</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02"
        aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarColor02">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a className="nav-link fas fa-user-alt text-info" href="/about"> About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link fas fa-laptop-code" href="/portfolio"> Portfolio</a>
          </li>
          <li className="nav-item">
            <a className="nav-link fas fa-file-alt" href="/resume"> Resume</a>
          </li>
          <li className="nav-item">
            <a className="nav-link fas fa-envelope" href="/contact"> Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;