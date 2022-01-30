import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        Navbar
      </Link>
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
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/account">
              Accounts
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/cart">
              <button className="btn btn-primary">
                <i className="fas fa-shopping-cart"></i>{" "}
                <span className="badge badge-light">4</span>
              </button>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
