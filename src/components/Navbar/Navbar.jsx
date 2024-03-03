import React from "react";
import "../../assets/css/bootstrap.css";
import "./Navbar.css";
import { NavLink, Router } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="col-md-2">
          <NavLink to="/">
            <img
              src={process.env.PUBLIC_URL + "/images/picnicgames-logo.png"}
              alt="logo"
              className="navbar-logo"
            />
          </NavLink>
        </div>
        <div className="col-md-7 navbar--menu">
          <ul className="navbar--menu_item list-unstyled">
            <li className="nav-item d-inline">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="nav-item d-inline">
              <NavLink to="/about">About</NavLink>
            </li>
            <li className="nav-item d-inline">
              <NavLink to="/games">Games</NavLink>
            </li>
            <li className="nav-item d-inline">
              <NavLink to="/locations">Locations</NavLink>
            </li>
            <li className="nav-item d-inline">
              <NavLink to="/news">News</NavLink>
            </li>
            <li className="nav-item d-inline">
              <NavLink to="/feedback">Feedback</NavLink>
            </li>
          </ul>
        </div>
        <div className="col-md-2">
          <i class="fas fa-phone-alt"></i>
          <span className="navbar--quickcall">+84 928 282 888</span>
        </div>
        <div className="col-md-1">
          <div className="navbar--contactus-btn">
            <span>Contact Us</span>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
