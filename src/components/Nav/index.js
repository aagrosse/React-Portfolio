import React from 'react';
import { Link } from 'react-router-dom';

function Nav(props) {
  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand">Alan Grosse</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02"
        aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarColor02">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link fas fa-user-alt text-info" to="/about"> About</Link>
            
          </li>
          <li className="nav-item">
            <Link className="nav-link fas fa-laptop-code" to="/portfolio"> Portfolio</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link fas fa-file-alt" to="/resume"> Resume</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link fas fa-envelope" to="/contact"> Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;